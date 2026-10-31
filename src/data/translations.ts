export interface JobExperience {
  timeSpan: string;
  role: string;
  company: string;
  period: string;
  description: string;
}

export interface ProjectItem {
  id: string;
  title: string;
  category: "ai" | "systems" | "fullstack";
  description: string;
  tags: string[];
  statusLabel: string;
  isPrivate: boolean;
  link?: string;
  linkType?: "github" | "live" | "demo";
  iconName?: string;
}

export interface CertificationItem {
  issuer: string;
  title: string;
  desc: string;
  tag: string;
  code?: string;
  link?: string;
}

export interface ArchitectureItem {
  title: string;
  description: string;
  tags: string[];
  link?: string;
}

export interface LabItem {
  title: string;
  description: string;
  tags: string[];
}

export interface TranslationSchema {
  nav: {
    exp: string;
    ai: string;
    projects: string;
    themeLight: string;
    themeDark: string;
  };
  experience: {
    glitchTitle: string;
    roleTag: string;
    bioIntro: string;
    typewriterWords: string[];
    currentFocus: string;
    sectionTitle: string;
    jobs: JobExperience[];
    nextButton: string;
  };
  ai: {
    title: string;
    subtitle: string;
    prevButton: string;
    nextButton: string;
    coreTitle: string;
    coreSubtitle: string;
    coreItems: ArchitectureItem[];
    certsTitle: string;
    certsSubtitle: string;
    certifications: CertificationItem[];
    labTitle: string;
    labSubtitle: string;
    labItems: LabItem[];
  };
  projects: {
    title: string;
    subtitle: string;
    prevButton: string;
    privateBadge: string;
    proprietaryBadge: string;
    liveBadge: string;
    openSourceBadge: string;
    items: ProjectItem[];
    moreProjects: string;
    socialTitle: string;
  };
}

export const translations: Record<"en" | "pt", TranslationSchema> = {
  en: {
    nav: {
      exp: "01 // Experience",
      ai: "02 // AI & Systems",
      projects: "03 // Projects",
      themeLight: "Switch to light theme",
      themeDark: "Switch to dark theme",
    },
    experience: {
      glitchTitle: "W_K.O",
      roleTag: "Software Engineer & AI Systems Developer",
      bioIntro:
        "I'm a Software Engineer with a Computer Science degree (PUC Minas), focused on scalable backend services, asynchronous AI agent pipelines, and high-performance systems with Python, TypeScript, and Rust. Always architecting solutions that are",
      typewriterWords: [
        "intelligent",
        "resilient",
        "high-performance",
        "fault-tolerant",
        "scalable",
      ],
      currentFocus:
        "Currently open to Software Engineering, Backend, AI & AppSec opportunities (Remote / Hybrid).",
      sectionTitle: "Experience",
      jobs: [
        {
          timeSpan: "1 year of",
          role: "Software Engineer - iOS",
          company: "dti digital",
          period: "Jun/25 - May/26",
          description:
            "Native iOS development with Swift & SwiftUI, clean architecture, modular design, automated testing, and agile delivery pipelines.",
        },
        {
          timeSpan: "0.5 year of",
          role: "Software Engineer (Mobile & IoT)",
          company: "Mestria",
          period: "Feb/24 - Jul/24",
          description:
            "Mobile app engineering using Flutter & Dart, REST API integrations, state management, and continuous feature delivery.",
        },
      ],
      nextButton: "AI & Systems",
    },
    ai: {
      title: "AI & Systems",
      subtitle:
        "Autonomous multimodal pipelines, low-latency agent workflows, and verified machine learning credentials.",
      prevButton: "Experience",
      nextButton: "Projects",
      coreTitle: "AI & Systems",
      coreSubtitle:
        "Production and open-source AI architectures developed end-to-end.",
      coreItems: [
        {
          title: "Pipeline Shorts Engine",
          description:
            "Autonomous vertical shorts generation on consumer GPUs, phonetic WhisperX alignment, and visual active speaker detection with LR-ASD & YuNet.",
          tags: ["Multimodal / Video", "Ollama / Whisper"],
          link: "https://github.com/WKO8/pipeline-shorts",
        },
        {
          title: "WKontrolAI Engine",
          description:
            "WhatsApp & PWA financial co-pilot featuring low-latency Whisper LPU, DeepSeek V3 vision, BullMQ queues, and Human-in-the-Loop confirmation.",
          tags: ["Autonomous Agents", "Groq / DeepSeek"],
        },
      ],
      certsTitle: "Certifications",
      certsSubtitle:
        "Official credentials in generative artificial intelligence and enterprise cloud systems.",
      certifications: [
        {
          issuer: "Databricks",
          title: "Generative AI Fundamentals",
          desc: "LLMs foundations, RAG architectures & ethical AI governance",
          tag: "ID: 169612060",
          code: "169612060",
        },
        {
          issuer: "DIO",
          title: "Modern AI Fundamentals",
          desc: "Machine Learning, LLMs, Generative AI and Agents",
          tag: "Certified",
          code: "J2DQHOY1",
          link: "https://www.dio.me/certificate/J2DQHOY1",
        },
        {
          issuer: "Itaú / DIO",
          title: "Bootcamp Itaú - Java com IA",
          desc: "Enterprise Java backend engineering and AI integration",
          tag: "Certified",
          code: "AW6BOVSB",
          link: "https://www.dio.me/certificate/AW6BOVSB",
        },
        {
          issuer: "AWS / TreinaBrasil",
          title: "AWS Chatbots & Cloud Automation",
          desc: "AWS cloud architecture, intelligent chatbots & automation",
          tag: "Specialization",
        },
      ],
      labTitle: "AI Lab & Studies",
      labSubtitle:
        "Applied research, experimental prototypes, and real machine learning studies.",
      labItems: [
        {
          title: "Video Translation & Phonetic Alignment",
          description:
            "Automated phonetic forced alignment with Montreal Forced Aligner & Whisper for frame-accurate dubbing and subtitles.",
          tags: ["MFA / Whisper"],
        },
        {
          title: "Computer Vision & OCR (YOLOv5)",
          description:
            "Custom models for object detection, spatial tracking, and visual text extraction optimized for local edge inference.",
          tags: ["Computer Vision"],
        },
        {
          title: "Natural Language Queries (PandasAI)",
          description:
            "Natural language query translation into executable Python DataFrame aggregations and dynamic charting.",
          tags: ["Tabular AI"],
        },
      ],
    },
    projects: {
      title: "Recent Projects",
      subtitle:
        "Production platforms, autonomous agent systems, and digital forensics software.",
      prevButton: "AI & Systems",
      privateBadge: "Private Source",
      proprietaryBadge: "Proprietary",
      liveBadge: "Production Live",
      openSourceBadge: "Open Source",
      moreProjects: "more projects",
      socialTitle: "Social Media",
      items: [
        {
          id: "wkohub",
          title: "WKO Hub",
          category: "fullstack",
          description:
            "A multi-tenant SaaS platform designed to digitize small and medium-sized businesses.",
          tags: ["Next.js", "TypeScript", "PostgreSQL", "Multi-Tenant"],
          statusLabel: "Production Live",
          isPrivate: false,
          link: "https://wkohub.com",
          linkType: "live",
          iconName: "/images/wkohub-logo-plain.svg",
        },
        {
          id: "wkontrolai",
          title: "WKontrolAI",
          category: "ai",
          description:
            "Autonomous AI financial co-pilot operating via WhatsApp and PWA with multi-modal vision expense extraction.",
          tags: ["Next.js 15", "Groq Whisper LPU", "DeepSeek V3", "BullMQ", "Redis"],
          statusLabel: "Open Source",
          isPrivate: false,
          link: "https://github.com/WKO8/wkontrolai",
          linkType: "github",
          iconName: "/images/wkontrolai-logo.svg",
        },
        {
          id: "pipeline-shorts",
          title: "Pipeline Shorts",
          category: "ai",
          description:
            "Local-first multimodal pipeline that generates vertical shorts on consumer GPUs using faster-whisper, Ollama Qwen, YuNet, and Active Speaker Detection (LR-ASD).",
          tags: ["Python", "Whisper", "Ollama", "YuNet", "LR-ASD", "FFmpeg"],
          statusLabel: "Open Source",
          isPrivate: false,
          link: "https://github.com/WKO8/pipeline-shorts",
          linkType: "github",
          iconName: "/images/pipeline-shorts-logo.svg",
        },
        {
          id: "wkrawler",
          title: "WKrawler / TCC",
          category: "systems",
          description:
            "High-concurrency OSINT crawler and digital forensics extraction engine for threat intelligence graphs.",
          tags: ["Python", "Tor", "Ed25519", "ISO/IEC 27037", "DFIR"],
          statusLabel: "Open Source",
          isPrivate: false,
          link: "https://github.com/WKO8/wkrawler",
          linkType: "github",
          iconName: "/images/wkrawler-logo.svg",
        },
      ],
    },
  },
  pt: {
    nav: {
      exp: "01 // Experiência",
      ai: "02 // IA & Sistemas",
      projects: "03 // Projetos",
      themeLight: "Mudar para tema claro",
      themeDark: "Mudar para tema escuro",
    },
    experience: {
      glitchTitle: "W_K.O",
      roleTag: "Engenheiro de Software & Desenvolvedor de Sistemas de IA",
      bioIntro:
        "Sou Engenheiro de Software formado em Ciência da Computação (PUC Minas), focado em serviços backend escaláveis, pipelines assíncronos de agentes de IA e sistemas de alta performance com Python, TypeScript e Rust. Sempre desenvolvendo soluções",
      typewriterWords: [
        "inteligentes",
        "resilientes",
        "de alta performance",
        "tolerantes a falhas",
        "escaláveis",
      ],
      currentFocus:
        "Atualmente disponível para oportunidades em Engenharia de Software, Backend, IA e AppSec (Remoto / Híbrido).",
      sectionTitle: "Experiência",
      jobs: [
        {
          timeSpan: "1 ano de",
          role: "Desenvolvedor de Software - iOS",
          company: "dti digital",
          period: "Jun/25 - Mai/26",
          description:
            "Desenvolvimento iOS nativo com Swift & SwiftUI, arquitetura limpa, design modular, testes automatizados e esteiras de entrega contínua.",
        },
        {
          timeSpan: "0.5 ano de",
          role: "Desenvolvedor de Software (Mobile & IoT)",
          company: "Mestria",
          period: "Fev/24 - Jul/24",
          description:
            "Engenharia de aplicativos mobile com Flutter & Dart, integração com APIs REST, gerência de estado e entregas contínuas em sprints ágeis.",
        },
      ],
      nextButton: "IA & Sistemas",
    },
    ai: {
      title: "IA & Sistemas",
      subtitle:
        "Pipelines multimodais autônomos, workflows agênticos de baixa latência e credenciais oficiais comprovadas.",
      prevButton: "Experiência",
      nextButton: "Projetos",
      coreTitle: "IA & Sistemas",
      coreSubtitle:
        "Arquiteturas de IA em produção e código aberto desenvolvidas de ponta a ponta.",
      coreItems: [
        {
          title: "Pipeline Shorts Engine",
          description:
            "Geração autônoma de cortes verticais em GPU de consumo, sincronização fonética WhisperX e detecção visual de falante com LR-ASD e YuNet.",
          tags: ["Visão Multimodal", "Ollama / Whisper"],
          link: "https://github.com/WKO8/pipeline-shorts",
        },
        {
          title: "WKontrolAI Engine",
          description:
            "Co-piloto financeiro no WhatsApp e PWA com Whisper LPU de baixa latência, DeepSeek V3, filas BullMQ e confirmação Human-in-the-Loop.",
          tags: ["Agentes Autônomos", "Groq / DeepSeek"],
        },
      ],
      certsTitle: "Certificações",
      certsSubtitle:
        "Credenciais oficiais em inteligência artificial generativa e arquitetura cloud corporativa.",
      certifications: [
        {
          issuer: "Databricks",
          title: "Generative AI Fundamentals",
          desc: "Fundamentos de LLMs, arquiteturas RAG e governança de IA",
          tag: "Cód: 169612060",
          code: "169612060",
        },
        {
          issuer: "DIO",
          title: "Fundamentos da IA Moderna",
          desc: "Machine Learning, LLMs, IA Generativa e Agentes",
          tag: "Certificado",
          code: "J2DQHOY1",
          link: "https://www.dio.me/certificate/J2DQHOY1",
        },
        {
          issuer: "Itaú / DIO",
          title: "Bootcamp Itaú - Java com IA",
          desc: "Engenharia backend corporativa em Java e integração com IA",
          tag: "Certificado",
          code: "AW6BOVSB",
          link: "https://www.dio.me/certificate/AW6BOVSB",
        },
        {
          issuer: "AWS / TreinaBrasil",
          title: "Como automatizar chatbots para o seu negócio",
          desc: "Arquitetura cloud AWS, automação inteligente e chatbots",
          tag: "Especialização",
        },
      ],
      labTitle: "Laboratório & Estudos de IA",
      labSubtitle:
        "Pesquisa aplicada, protótipos experimentais e estudos aprofundados em Machine Learning.",
      labItems: [
        {
          title: "Tradução & Alinhamento de Vídeo",
          description:
            "Alinhamento fonético automatizado com Montreal Forced Aligner e Whisper para dublagem e legendas com precisão temporal de frames.",
          tags: ["MFA / Whisper"],
        },
        {
          title: "Visão Computacional & OCR (YOLOv5)",
          description:
            "Modelos treinados para detecção de objetos, rastreamento espacial e leitura visual de texto otimizados para execução local.",
          tags: ["Visão em Edge"],
        },
        {
          title: "Consultas em Linguagem Natural (PandasAI)",
          description:
            "Conversão de linguagem natural em código de manipulação e geração dinâmica de gráficos em DataFrames analíticos.",
          tags: ["Tabular AI"],
        },
      ],
    },
    projects: {
      title: "Projetos Selecionados",
      subtitle:
        "Plataformas em produção, sistemas de IA e software forense.",
      prevButton: "IA & Sistemas",
      privateBadge: "Código Privado",
      proprietaryBadge: "Proprietário",
      liveBadge: "Em Produção",
      openSourceBadge: "Código Aberto",
      moreProjects: "mais projetos",
      socialTitle: "Social Media",
      items: [
        {
          id: "wkohub",
          title: "WKO Hub",
          category: "fullstack",
          description:
            "Plataforma SaaS multi-tenant criada para digitalizar a gestão de pequenas e médias empresas.",
          tags: ["Next.js", "TypeScript", "PostgreSQL", "Multi-Tenant"],
          statusLabel: "Em Produção",
          isPrivate: false,
          link: "https://wkohub.com",
          linkType: "live",
          iconName: "/images/wkohub-logo-plain.svg",
        },
        {
          id: "wkontrolai",
          title: "WKontrolAI",
          category: "ai",
          description:
            "Co-piloto autônomo de inteligência financeira integrado ao WhatsApp e PWA com extração multimodal de comprovantes.",
          tags: ["Next.js 15", "Groq Whisper LPU", "DeepSeek V3", "BullMQ", "Redis"],
          statusLabel: "Código Aberto",
          isPrivate: false,
          link: "https://github.com/WKO8/wkontrolai",
          linkType: "github",
          iconName: "/images/wkontrolai-logo.svg",
        },
        {
          id: "pipeline-shorts",
          title: "Pipeline Shorts",
          category: "ai",
          description:
            "Pipeline local de IA multimodal para geração autônoma de cortes verticais em GPUs de consumo com faster-whisper, Ollama Qwen, YuNet e Active Speaker Detection (LR-ASD).",
          tags: ["Python", "Whisper", "Ollama", "YuNet", "LR-ASD", "FFmpeg"],
          statusLabel: "Código Aberto",
          isPrivate: false,
          link: "https://github.com/WKO8/pipeline-shorts",
          linkType: "github",
          iconName: "/images/pipeline-shorts-logo.svg",
        },
        {
          id: "wkrawler",
          title: "WKrawler / TCC",
          category: "systems",
          description:
            "Crawler de alta concorrência e motor de extração para perícia forense digital e OSINT.",
          tags: ["Python", "Tor", "Ed25519", "ISO/IEC 27037", "DFIR"],
          statusLabel: "Código Aberto",
          isPrivate: false,
          link: "https://github.com/WKO8/wkrawler",
          linkType: "github",
          iconName: "/images/wkrawler-logo.svg",
        },
      ],
    },
  },
};
