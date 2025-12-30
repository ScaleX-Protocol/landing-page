/** @type {import('tailwindcss').Config} */
export default {
    content: ['./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}'],
    theme: {
        extend: {
            colors: {
                primary: {
                    DEFAULT: '#F97316',
                    dark: '#C75A11',
                    darker: '#A0480E',
                    light: '#FAAA7A',
                    lighter: '#FDD5BD',
                },
                success: {
                    DEFAULT: '#16A34A',
                    dark: '#15803D',
                    light: '#10B981',
                },
                surface: {
                    primary: '#0A0B0F',
                    secondary: '#111318',
                    tertiary: '#1A1C24',
                },
                border: '#1F2937',
            },
            fontFamily: {
                heading: ['Space Grotesk', 'sans-serif'],
                body: ['DM Sans', 'sans-serif'],
            },
            boxShadow: {
                'sm': '0 1px 2px rgba(0,0,0,0.05)',
                'md': '0 2px 4px rgba(0,0,0,0.1)',
                'lg': '0 4px 8px rgba(0,0,0,0.12)',
                'xl': '0 8px 16px rgba(0,0,0,0.15)',
                '2xl': '0 12px 24px rgba(0,0,0,0.18)',
                '3xl': '0 16px 32px rgba(0,0,0,0.2)',
                'glow': '0 4px 14px rgba(249,115,22,0.3)',
                'glow-lg': '0 8px 24px rgba(249,115,22,0.4)',
                'green-glow': '0 4px 14px rgba(22,163,74,0.3)',
            },
            animation: {
                'float': 'float 6s ease-in-out infinite',
                'float-slow': 'float 8s ease-in-out infinite',
                'float-fast': 'float 4s ease-in-out infinite',
                'pulse-glow': 'pulseGlow 2s ease-in-out infinite',
                'spin-slow': 'spin 20s linear infinite',
                'fade-in': 'fadeIn 0.5s ease-out',
                'slide-up': 'slideUp 0.6s ease-out',
                'scale-in': 'scaleIn 0.4s ease-out',
            },
            keyframes: {
                float: {
                    '0%, 100%': { transform: 'translateY(0px) rotate(0deg)' },
                    '50%': { transform: 'translateY(-20px) rotate(3deg)' },
                },
                pulseGlow: {
                    '0%, 100%': { opacity: '1', boxShadow: '0 0 20px rgba(249,115,22,0.4)' },
                    '50%': { opacity: '0.8', boxShadow: '0 0 40px rgba(249,115,22,0.6)' },
                },
                fadeIn: {
                    '0%': { opacity: '0' },
                    '100%': { opacity: '1' },
                },
                slideUp: {
                    '0%': { opacity: '0', transform: 'translateY(30px)' },
                    '100%': { opacity: '1', transform: 'translateY(0)' },
                },
                scaleIn: {
                    '0%': { opacity: '0', transform: 'scale(0.9)' },
                    '100%': { opacity: '1', transform: 'scale(1)' },
                },
            },
            backgroundImage: {
                'gradient-radial': 'radial-gradient(var(--tw-gradient-stops))',
                'hero-glow': 'radial-gradient(ellipse at center, rgba(249,115,22,0.15) 0%, transparent 70%)',
                'card-gradient': 'linear-gradient(135deg, rgba(255,255,255,0.05) 0%, rgba(255,255,255,0) 100%)',
            },
        },
    },
    plugins: [],
}
