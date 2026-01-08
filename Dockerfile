# ==============================================================================
# Stage 1: Build the Astro SSR application
# ==============================================================================
FROM node:20-alpine AS builder

# Install pnpm - use fixed version for reproducibility
RUN corepack enable && corepack prepare pnpm@9.0.0 --activate

# Set working directory
WORKDIR /app

# Copy package files
COPY package.json pnpm-lock.yaml ./

# Install dependencies
RUN pnpm install --frozen-lockfile

# Copy source files
COPY . .

# Build the SSR application
RUN pnpm build

# Verify build output exists
RUN ls -la dist/server/ && echo "Build output verified"

# ==============================================================================
# Stage 2: Production runtime with Node.js
# ==============================================================================
FROM node:20-alpine AS production

# Install wget for health checks (already in alpine, but ensure it's there)
RUN apk add --no-cache wget

# Create non-root user for security
RUN addgroup --system --gid 1001 nodejs
RUN adduser --system --uid 1001 astro

# Set working directory
WORKDIR /app

# Copy built application from builder stage
COPY --from=builder --chown=astro:nodejs /app/dist ./dist
COPY --from=builder --chown=astro:nodejs /app/node_modules ./node_modules
COPY --from=builder --chown=astro:nodejs /app/package.json ./package.json

# Switch to non-root user
USER astro

# Set environment variables for Astro standalone server
ENV HOST=0.0.0.0
ENV PORT=3000
ENV NODE_ENV=production

# Expose port 3000
EXPOSE 3000

# Health check - give more time for startup
HEALTHCHECK --interval=30s --timeout=10s --start-period=30s --retries=3 \
  CMD wget --quiet --tries=1 --spider http://localhost:3000/api/health || exit 1

# Start the Node.js server
CMD ["node", "./dist/server/entry.mjs"]
