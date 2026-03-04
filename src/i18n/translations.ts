export const languages = {
  en: { label: "English", flag: "EN" },
  id: { label: "Indonesia", flag: "ID" },
  zh: { label: "中文", flag: "ZH" },
  ja: { label: "日本語", flag: "JA" },
} as const;

export type Language = keyof typeof languages;

export const defaultLang: Language = "en";

export const translations = {
  en: {
    nav: {
      features: "Features",
      howItWorks: "How it works",
      docs: "Docs",
      community: "Community",
      blog: "Blog",
      launchApp: "Launch App",
    },
    hero: {
      badge: "Live on Base Sepolia",
      headline: "The Most Capital Efficient and Safe DApp for Agent and Human",
      description: "The only DEX where limit orders generate yield automatically. Trade smarter. Earn passively. Zero extra steps.",
      startTrading: "Start Trading",
      readDocs: "Read Docs",
      totalVolume: "Total Volume",
      limitOrderAPY: "Limit Order APY",
      tvl: "TVL",
    },
    problemSolution: {
      title: "Other DEXs vs ScaleX.",
      subtitle: "Stop Leaving Money on the Table, Every second your limit order waits, you're losing potential yield. ScaleX changes that.",
    },
    features: {
      title: "Built for Serious Traders",
      subtitle: "Every feature designed to maximize your capital efficiency and trading edge. Same trades.",
      subtitleBold: "Same strategy. More profit.",
    },
    comparison: {
      title: "The ScaleX Advantage",
      subtitle: "See how we stack up against traditional DEXs and lending protocols.",
    },
    flywheel: {
      title: "The Compounding Engine",
      subtitle: "A self-reinforcing cycle that grows your portfolio while you trade.",
    },
    cta: {
      title: "Ready to Earn More?",
      subtitle: "Join traders who refuse to let their capital sit idle. Start earning yield on every order today.",
      launchApp: "Launch App",
      readDocs: "Read Docs",
    },
  },
  id: {
    nav: {
      features: "Fitur",
      howItWorks: "Cara Kerja",
      docs: "Dokumen",
      community: "Komunitas",
      blog: "Blog",
      launchApp: "Buka Aplikasi",
    },
    hero: {
      badge: "Aktif di Base Sepolia",
      headline: "Kami Membayar Anda\nUntuk Trading.",
      description: "Satu-satunya DEX di mana limit order menghasilkan yield secara otomatis. Trading lebih cerdas. Dapatkan penghasilan pasif. Tanpa langkah tambahan.",
      startTrading: "Mulai Trading",
      readDocs: "Baca Docs",
      totalVolume: "Total Volume",
      limitOrderAPY: "APY Limit Order",
      tvl: "TVL",
    },
    problemSolution: {
      title: "DEX Lain vs ScaleX.",
      subtitle: "Berhenti Membiarkan Uang Terbuang. Setiap detik limit order Anda menunggu, Anda kehilangan potensi yield. ScaleX mengubah itu.",
    },
    features: {
      title: "Dibangun untuk Trader Serius",
      subtitle: "Setiap fitur dirancang untuk memaksimalkan efisiensi modal dan keunggulan trading Anda. Transaksi yang sama.",
      subtitleBold: "Strategi sama. Profit lebih banyak.",
    },
    comparison: {
      title: "Keunggulan ScaleX",
      subtitle: "Lihat bagaimana kami dibandingkan dengan DEX tradisional dan protokol lending.",
    },
    flywheel: {
      title: "Mesin Compounding",
      subtitle: "Siklus yang saling menguatkan yang menumbuhkan portofolio Anda saat Anda trading.",
    },
    cta: {
      title: "Siap Mendapatkan Lebih?",
      subtitle: "Bergabung dengan trader yang menolak membiarkan modal mereka menganggur. Mulai dapatkan yield hari ini.",
      launchApp: "Buka Aplikasi",
      readDocs: "Baca Docs",
    },
  },
  zh: {
    nav: {
      features: "功能",
      howItWorks: "运作方式",
      docs: "文档",
      community: "社区",
      blog: "博客",
      launchApp: "启动应用",
    },
    hero: {
      badge: "已上线 Base Sepolia",
      headline: "我们付钱\n让你交易。",
      description: "唯一一个限价订单自动产生收益的DEX。更智能地交易，被动赚取收益，无需额外步骤。",
      startTrading: "开始交易",
      readDocs: "阅读文档",
      totalVolume: "总交易量",
      limitOrderAPY: "限价单APY",
      tvl: "TVL",
    },
    problemSolution: {
      title: "其他DEX vs ScaleX。",
      subtitle: "停止浪费你的资金。你的限价订单每等待一秒，你就失去潜在收益。ScaleX改变了这一切。",
    },
    features: {
      title: "为专业交易者打造",
      subtitle: "每个功能都旨在最大化您的资本效率和交易优势。相同的交易。",
      subtitleBold: "相同的策略。更多的利润。",
    },
    comparison: {
      title: "ScaleX 优势",
      subtitle: "看看我们如何与传统DEX和借贷协议相比。",
    },
    flywheel: {
      title: "复利引擎",
      subtitle: "一个自我强化的循环，在您交易时增长您的投资组合。",
    },
    cta: {
      title: "准备赚取更多？",
      subtitle: "加入拒绝让资金闲置的交易者。今天就开始赚取每笔订单的收益。",
      launchApp: "启动应用",
      readDocs: "阅读文档",
    },
  },
  ja: {
    nav: {
      features: "機能",
      howItWorks: "仕組み",
      docs: "ドキュメント",
      community: "コミュニティ",
      blog: "ブログ",
      launchApp: "アプリを起動",
    },
    hero: {
      badge: "Base Sepoliaで稼働中",
      headline: "取引するだけで\n報酬を獲得。",
      description: "リミットオーダーが自動的にイールドを生む唯一のDEX。よりスマートに取引し、パッシブに稼ぐ。追加のステップ不要。",
      startTrading: "取引を開始",
      readDocs: "ドキュメントを読む",
      totalVolume: "総取引量",
      limitOrderAPY: "リミットオーダーAPY",
      tvl: "TVL",
    },
    problemSolution: {
      title: "他のDEX vs ScaleX。",
      subtitle: "資金を無駄にするのをやめましょう。リミットオーダーが待つ毎秒、潜在的なイールドを失っています。ScaleXがそれを変えます。",
    },
    features: {
      title: "本格トレーダー向けに構築",
      subtitle: "すべての機能は、資本効率と取引の優位性を最大化するために設計されています。同じ取引。",
      subtitleBold: "同じ戦略。より多くの利益。",
    },
    comparison: {
      title: "ScaleXの優位性",
      subtitle: "従来のDEXやレンディングプロトコルとの比較をご覧ください。",
    },
    flywheel: {
      title: "複利エンジン",
      subtitle: "取引しながらポートフォリオを成長させる自己強化サイクル。",
    },
    cta: {
      title: "もっと稼ぐ準備はできていますか？",
      subtitle: "資金を遊ばせることを拒否するトレーダーに参加しましょう。今日からすべての注文でイールドを獲得しましょう。",
      launchApp: "アプリを起動",
      readDocs: "ドキュメントを読む",
    },
  },
} as const;
