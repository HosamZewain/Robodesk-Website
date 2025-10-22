import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Bot, BarChart, Users, Phone, MessageSquare, Mail, ChevronDown, Sparkles, Voicemail, Library, Smartphone, Facebook, Instagram, PlayCircle, ShieldCheck, AreaChart, Settings, Ticket, Zap, Briefcase, MapPin, Send } from 'lucide-react';
import CountUp from 'react-countup';
import { LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer } from 'recharts';

type Language = 'en' | 'ar';

// --- TRANSLATIONS ---
const translations = {
    en: {
        heroTitle1: "The AI-First Platform for",
        heroTitle2: "Enterprise CX",
        heroSubtitle: "RoboDesk combines the power of generative AI with a unified platform to automate, analyze, and elevate every customer interaction.",
        requestDemo: "Request a Demo",
        explorePlatform: "Explore Platform",
        trustedBy: "Trusted by the world's leading enterprises",
        platformTitle: "The Complete Enterprise CX Platform",
        platformSubtitle: "One unified platform to manage the entire customer lifecycle, powered by cutting-edge AI.",
        featuresTitle: "Enterprise-Grade AI Features",
        featuresSubtitle: "Discover the powerful capabilities that make RoboDesk the leading CX platform.",
        analyticsTitle: "See the Impact with Advanced Analytics",
        analyticsSubtitle: "Track KPIs in real-time and visualize the impact of AI on your operations.",
        channelsTitle: "Engage Across Every Channel",
        channelsSubtitle: "Provide a seamless, consistent experience wherever your customers are.",
        customersTitle: "What Our Customers Say",
        customersSubtitle: "Real stories from businesses transformed by RoboDesk.",
        videoTitle: "Hear It Directly From Them",
        videoSubtitle: "Watch how leading enterprises are leveraging RoboDesk to build better customer relationships.",
        partnersTitle: "Our Technology Ecosystem",
        partnersSubtitle: "We partner with best-in-class technology providers to deliver a secure, scalable, and integrated solution.",
        techPartners: "Cloud & Technology Partners",
        compliance: "Security & Compliance Certifications",
        faqTitle: "Frequently Asked Questions",
        faqSubtitle: "Have questions? We have answers. If you don't find what you're looking for, feel free to contact us.",
        contactTitle: "Get In Touch",
        contactSubtitle: "We'd love to hear from you. Our team is always here to help. Reach out to us through any of the channels below.",
        chatOnWhatsApp: "Chat with Us on WhatsApp",
        offices: "Our Offices",
    },
    ar: {
        heroTitle1: "المنصة الأولى القائمة على الذكاء الاصطناعي",
        heroTitle2: "لتجربة عملاء المؤسسات",
        heroSubtitle: "يجمع RoboDesk بين قوة الذكاء الاصطناعي التوليدي ومنصة موحدة لأتمتة وتحليل والارتقاء بكل تفاعل مع العملاء.",
        requestDemo: "اطلب عرضًا",
        explorePlatform: "استكشف المنصة",
        trustedBy: "موثوق به من قبل الشركات الرائدة في العالم",
        platformTitle: "منصة تجربة العملاء المتكاملة للمؤسسات",
        platformSubtitle: "منصة موحدة لإدارة دورة حياة العميل بأكملها، مدعومة بأحدث تقنيات الذكاء الاصطناعي.",
        featuresTitle: "مميزات الذكاء الاصطناعي للمؤسسات",
        featuresSubtitle: "اكتشف القدرات القوية التي تجعل RoboDesk منصة رائدة في تجربة العملاء.",
        analyticsTitle: "شاهد التأثير مع التحليلات المتقدمة",
        analyticsSubtitle: "تتبع مؤشرات الأداء الرئيسية في الوقت الفعلي وتصور تأثير الذكاء الاصطناعي على عملياتك.",
        channelsTitle: "تفاعل عبر كل القنوات",
        channelsSubtitle: "قدم تجربة سلسة ومتسقة أينما كان عملاؤك.",
        customersTitle: "ماذا يقول عملاؤنا",
        customersSubtitle: "قصص حقيقية من شركات تم تحويلها بواسطة RoboDesk.",
        videoTitle: "اسمع منهم مباشرة",
        videoSubtitle: "شاهد كيف تستفيد الشركات الرائدة من RoboDesk لبناء علاقات أفضل مع العملاء.",
        partnersTitle: "نظامنا التكنولوجي",
        partnersSubtitle: "نتشارك مع أفضل مزودي التكنولوجيا لتقديم حل آمن وقابل للتطوير ومتكامل.",
        techPartners: "شركاء التكنولوجيا والسحابة",
        compliance: "شهادات الأمان والامتثال",
        faqTitle: "الأسئلة الشائعة",
        faqSubtitle: "لديك أسئلة؟ لدينا إجابات. إذا لم تجد ما تبحث عنه، فلا تتردد في الاتصال بنا.",
        contactTitle: "تواصل معنا",
        contactSubtitle: "يسعدنا أن نسمع منك. فريقنا دائمًا هنا للمساعدة. تواصل معنا عبر أي من القنوات أدناه.",
        chatOnWhatsApp: "تحدث معنا على WhatsApp",
        offices: "مكاتبنا",
    }
};

const clientLogos = [
    { src: '/images/fedex.webp', alt: 'FedEx' }, { src: '/images/lg.webp', alt: 'LG' }, { src: '/images/swvl.webp', alt: 'SWVL' }, { src: '/images/du.webp', alt: 'du' }, { src: '/images/scan.webp', alt: 'Alfa Laboratories' }, { src: '/images/gym.webp', alt: "Gold's Gym" }, { src: '/images/mano.png', alt: 'Mano Tourism' }, { src: '/images/freezoner.png', alt: 'Freezoner' }, { src: '/images/frg.png', alt: 'Fashion Retail Group' }, { src: '/images/rotana.png', alt: 'Rotana Scan & Lab' }, { src: '/images/granzia.png', alt: 'Granzia' }, { src: '/images/darwish-electronics.png', alt: 'Darwish Electronics' }, { src: '/images/alfa-scan.png', alt: 'Alfa Scan' },
];
const testimonials = [
    { quote: "RoboDesk's AI automation has been a game-changer. We've reduced our average handle time by 35% and our customers are happier than ever.", author: "Jane Doe", title: "VP of Customer Support", company: "FedEx", logo: '/images/fedex.webp' }, { quote: "The Agent Co-Pilot feature empowers our team to resolve issues faster and with more confidence. It's like giving every agent a personal expert.", author: "John Smith", title: "Director of CX", company: "LG", logo: '/images/lg.webp' }, { quote: "The unified platform helped us streamline communication across all channels, leading to a 25% increase in our CSAT score.", author: "Fatima Al-Marzouqi", title: "Head of Digital Experience", company: "du", logo: '/images/du.webp' }
];
const videoTestimonials = [
    { quote: "Since implementing RoboDesk, our first response time has decreased by 60%, and our team's efficiency is through the roof.", author: "Sarah Johnson", title: "Head of Operations", company: "SWVL", }, { quote: "The analytics module is incredibly powerful. We now have a clear, data-driven view of our customer interactions, which was impossible before.", author: "David Chen", title: "Chief Technology Officer", company: "Granzia", }, { quote: "RoboDesk didn't just meet our expectations; it exceeded them. The platform is robust, the AI is intelligent, and the support has been outstanding.", author: "Maria Garcia", title: "Customer Experience Manager", company: "Mano Tourism", }
];
// Updated KPIs as per requirements
const kpis = [
    { value: 50, suffix: 'M+', label: 'Total Interactions', labelAr: 'إجمالي التفاعلات' },
    { value: 82, suffix: '%', label: 'AI Agent %', labelAr: 'نسبة وكيل الذكاء الاصطناعي' },
    { value: 12, suffix: '+', label: 'Channels', labelAr: 'قناة' },
    { value: 35, suffix: '+', label: 'Countries', labelAr: 'دولة' }
];
const channels = [
    { icon: <svg width="48" height="48" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M16.5 2H7.5C4.7 2 3 3.7 3 6.5V17.5C3 20.3 4.7 22 7.5 22H16.5C19.3 22 21 20.3 21 17.5V6.5C21 3.7 19.3 2 16.5 2Z" stroke="#8A2BE2" strokeWidth="1.5" strokeMiterlimit="10" strokeLinecap="round" strokeLinejoin="round"></path><path d="M8.58008 7.5H15.4201" stroke="#8A2BE2" strokeWidth="1.5" strokeMiterlimit="10" strokeLinecap="round" strokeLinejoin="round"></path><path d="M8.58008 12H15.4201" stroke="#8A2BE2" strokeWidth="1.5" strokeMiterlimit="10" strokeLinecap="round" strokeLinejoin="round"></path></svg>, name: "SMS" },
    { icon: <svg width="48" height="48" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M12 22C17.5228 22 22 17.5228 22 12C22 6.47715 17.5228 2 12 2C6.47715 2 2 6.47715 2 12C2 13.8214 2.48697 15.5291 3.33782 17L2.5 21.5L7 20.6622C8.47087 21.513 10.1786 22 12 22Z" stroke="#25D366" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"></path><path d="M8 12.5C8 12.5 9 13.5 10 13.5C11 13.5 12 11.5 13.5 11.5C15 11.5 16 12.5 16 12.5" stroke="#25D366" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"></path></svg>, name: "Chat" },
    { icon: <svg width="48" height="48" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M2 8.5C2 5.42 4.42 3 7.5 3H16.5C19.58 3 22 5.42 22 8.5V15.5C22 18.58 19.58 21 16.5 21H7.5" stroke="#4B5563" strokeWidth="1.5" strokeMiterlimit="10" strokeLinecap="round" strokeLinejoin="round"></path><path d="M7 9L10.43 11.43C11.33 12.03 12.67 12.03 13.57 11.43L17 9" stroke="#4B5563" strokeWidth="1.5" strokeMiterlimit="10" strokeLinecap="round" strokeLinejoin="round"></path></svg>, name: "Email" },
    { icon: <svg width="48" height="48" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M21.99 12.16C21.99 17.51 17.65 21.99 12.33 21.99C11.33 21.99 10.37 21.82 9.49 21.51C8.28 22.21 6.81 22.49 5.31 22.49C4.54 22.49 3.79 22.38 3.07 22.18C2.18 21.92 2.33 20.71 2.89 20.02C2.41 19.03 2 17.92 2 16.74C2 10.33 6.64 5.31 12.97 5.31C18.14 5.31 21.99 8.35 21.99 12.16Z" fill="#0088cc" stroke="#0088cc" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"></path><path d="M9.49023 12.5901L11.4402 14.8601C11.7702 15.2401 12.3002 15.2401 12.6302 14.8601L14.5802 12.5901L17.5002 9.68005" stroke="white" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"></path></svg>, name: "Telegram" },
    { icon: <svg width="48" height="48" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M12.94 2.14014H11.06C6.84 2.14014 5.36 3.63014 5.36 7.84014V9.71014C5.36 13.9201 6.84 15.4101 11.06 15.4101H12.94C17.16 15.4101 18.64 13.9201 18.64 9.71014V7.84014C18.64 3.63014 17.16 2.14014 12.94 2.14014Z" stroke="#3b5998" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"></path><path d="M12 15.41V22.0001" stroke="#3b5998" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"></path><path d="M8.83008 22H15.1701" stroke="#3b5998" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"></path><path d="M10.0398 8.84998H13.9598" stroke="#3b5998" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"></path></svg>, name: "Voice" },
    { icon: <svg width="48" height="48" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M12 18.25C15.4518 18.25 18.25 15.4518 18.25 12C18.25 8.54822 15.4518 5.75 12 5.75C8.54822 5.75 5.75 8.54822 5.75 12C5.75 15.4518 8.54822 18.25 12 18.25Z" fill="url(#paint0_linear_1_2)" stroke="url(#paint1_linear_1_2)" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"></path><path d="M16.5 7.5V7.50001" stroke="url(#paint2_linear_1_2)" strokeWidth="2" strokeLinecap="round"></path><path d="M9 22H15C20 22 22 20 22 15V9C22 4 20 2 15 2H9C4 2 2 4 2 9V15C2 20 4 22 9 22Z" stroke="url(#paint3_linear_1_2)" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"></path><defs><linearGradient id="paint0_linear_1_2" x1="5.75" y1="12" x2="18.25" y2="12" gradientUnits="userSpaceOnUse"><stop stopColor="#feda75"/><stop offset="0.2" stopColor="#fa7e1e"/><stop offset="0.4" stopColor="#d62976"/><stop offset="0.6" stopColor="#962fbf"/><stop offset="0.8" stopColor="#4f5bd5"/></linearGradient><linearGradient id="paint1_linear_1_2" x1="5" y1="12" x2="19" y2="12" gradientUnits="userSpaceOnUse"><stop stopColor="#feda75"/><stop offset="0.2" stopColor="#fa7e1e"/><stop offset="0.4" stopColor="#d62976"/><stop offset="0.6" stopColor="#962fbf"/><stop offset="0.8" stopColor="#4f5bd5"/></linearGradient><linearGradient id="paint2_linear_1_2" x1="16.5" y1="7.5" x2="16.5" y2="7.50001" gradientUnits="userSpaceOnUse"><stop stopColor="#feda75"/><stop offset="0.2" stopColor="#fa7e1e"/><stop offset="0.4" stopColor="#d62976"/><stop offset="0.6" stopColor="#962fbf"/><stop offset="0.8" stopColor="#4f5bd5"/></linearGradient><linearGradient id="paint3_linear_1_2" x1="2" y1="12" x2="22" y2="12" gradientUnits="userSpaceOnUse"><stop stopColor="#feda75"/><stop offset="0.2" stopColor="#fa7e1e"/><stop offset="0.4" stopColor="#d62976"/><stop offset="0.6" stopColor="#962fbf"/><stop offset="0.8" stopColor="#4f5bd5"/></linearGradient></defs></svg>, name: "Instagram" },
    { icon: <svg width="48" height="48" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M12 22C17.5228 22 22 17.5228 22 12C22 6.47715 17.5228 2 12 2C6.47715 2 2 6.47715 2 12C2 17.5228 6.47715 22 12 22Z" fill="#1877F2" stroke="#1877F2" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"></path><path d="M15.75 12H13.5V18.75H9.75V12H8.25V9H9.75V7.5C9.75 6.25 10.5 5.25 12 5.25H14.25V8.25H12.75C12.375 8.25 12.375 8.625 12.375 9H14.25L13.5 12H15.75Z" fill="white"></path></svg>, name: "Facebook" },
    { icon: <svg width="48" height="48" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M.057 24L1.687-6.163c-1.041-1.804-1.588-3.849-1.587-5.946.003-6.556 5.338-11.891 11.893-11.891 3.181.001 6.167 1.24 8.413 3.488 2.245 2.248 3.481 5.236 3.48 8.414-.003 6.557-5.338 11.892-11.894 11.892-1.99-.001-3.951-.5-5.688-1.448l-6.305 1.654zm6.597-3.807c1.676.995 3.276 1.591 5.392 1.592 5.448 0 9.886-4.434 9.889-9.885.002-5.462-4.415-9.89-9.881-9.892-5.452 0-9.887 4.434-9.889 9.886-.001 2.269.655 4.398 1.898 6.166l-1.29 4.721 4.753-1.241zM11.893 7.072c-.136 0-.273.007-.405.021l-.032.002c-.556.098-1.01.33-1.39.676-.38.346-.721.787-.946 1.203-.228.415-.347.858-.351 1.378-.002.522.083 1.018.235 1.463.153.445.358.87.589 1.231.23.36.495.69.776.99.28.3.59.566.911.803.32.236.661.438 1.01.606.35.168.714.295 1.093.38.378.085.768.128 1.161.126.54 0 1.05-.107 1.521-.322.47-.215.88-.508 1.217-.866.337-.358.584-.781.728-1.238.143-.458.214-.961.211-1.494-.004-.537-.1-1.044-.282-1.521-.183-.477-.445-.9-.773-1.258-.328-.358-.72-.647-1.156-.858-.436-.211-.92-.319-1.428-.319z" fill="#25D366" transform="scale(0.8) translate(4, -1)"/></svg>, name: "WhatsApp" },
];
const faqsData = {
    en: [
        { question: "What is RoboDesk?", answer: "RoboDesk is an AI-First Customer Experience (CX) Platform designed for enterprise clients. It unifies all customer interactions into a single platform and uses generative AI to automate support, empower agents, and provide deep analytics." }, { question: "How does the AI automation work?", answer: "Our platform uses advanced generative AI models to understand customer intent, access relevant information from your knowledge base, and provide accurate, human-like responses. It can handle everything from simple FAQs to complex, multi-step resolutions across voice, chat, and email." }, { question: "Is RoboDesk secure for enterprise use?", answer: "Absolutely. Security is our top priority. RoboDesk is compliant with major industry standards like SOC 2 Type II, ISO 27001, and GDPR. We offer enterprise-grade security features, including data encryption, role-based access control, and regular security audits." }, { question: "What kind of integrations do you support?", answer: "RoboDesk features an open and extensible architecture with REST APIs and pre-built integrations for major CRM (like Salesforce), communication (like Twilio), and enterprise systems. This ensures a seamless connection with your existing tech stack." }, { question: "What is the process for requesting a demo?", answer: "Requesting a demo is simple. Once you fill out the form, our team will contact you within one business day to schedule a personalized walkthrough of the RoboDesk platform at your convenience." }
    ],
    ar: [
        { question: "ما هو RoboDesk؟", answer: "RoboDesk هو منصة تجربة عملاء (CX) قائمة على الذكاء الاصطناعي مصممة للشركات الكبرى. توحد جميع تفاعلات العملاء في منصة واحدة وتستخدم الذكاء الاصطناعي التوليدي لأتمتة الدعم وتمكين الوكلاء وتوفير تحليلات عميقة." }, { question: "كيف تعمل أتمتة الذكاء الاصطناعي؟", answer: "تستخدم منصتنا نماذج ذكاء اصطناعي توليدية متقدمة لفهم نية العميل، والوصول إلى المعلومات ذات الصلة من قاعدة المعرفة الخاصة بك، وتقديم ردود دقيقة شبيهة بالإنسان. يمكنها التعامل مع كل شيء من الأسئلة الشائعة البسيطة إلى الحلول المعقدة متعددة الخطوات عبر الصوت والدردشة والبريد الإلكتروني." }, { question: "هل RoboDesk آمن للاستخدام في المؤسسات؟", answer: "بالتأكيد. الأمان هو أولويتنا القصوى. يتوافق RoboDesk مع معايير الصناعة الرئيسية مثل SOC 2 Type II و ISO 27001 و GDPR. نقدم ميزات أمان على مستوى المؤسسات، بما في ذلك تشفير البيانات والتحكم في الوصول المستند إلى الأدوار وعمليات تدقيق الأمان المنتظمة." }, { question: "ما نوع عمليات التكامل التي تدعمونها؟", answer: "يتميز RoboDesk ببنية مفتوحة وقابلة للتوسيع مع واجهات برمجة تطبيقات REST وعمليات تكامل مسبقة الصنع لأنظمة CRM الرئيسية (مثل Salesforce) والاتصالات (مثل Twilio) وأنظمة المؤسسات. وهذا يضمن اتصالاً سلسًا بمجموعة التكنولوجيا الحالية لديك." }, { question: "ما هي عملية طلب عرض توضيحي؟", answer: "طلب عرض توضيحي بسيط. بمجرد ملء النموذج، سيتصل بك فريقنا في غضون يوم عمل واحد لتحديد موعد جولة شخصية في منصة RoboDesk في الوقت الذي يناسبك." }
    ]
};
const platformModules = [
  { icon: Bot, name: "AI & Automation", description: "Leverage state-of-the-art AI to automate conversations, predict customer needs, and streamline workflows for maximum efficiency.", features: ["Generative AI Bots", "Predictive Routing", "Sentiment Analysis", "Automated Workflows"] },
  { icon: Ticket, name: "Omnichannel Ticketing", description: "A unified inbox that brings all customer conversations from every channel into a single, manageable view for your agents.", features: ["Email, Chat, Social, Voice", "SLA Management", "Collision Detection", "Custom Fields"] },
  { icon: AreaChart, name: "Reporting & Analytics", description: "Make data-driven decisions with customizable dashboards, real-time reporting, and deep insights into every aspect of your CX operations.", features: ["Live Dashboards", "Agent Performance", "CSAT & NPS Tracking", "Trend Analysis"] },
  { icon: ShieldCheck, name: "Quality Control (QC)", description: "Automate 100% of your quality assurance processes. Score interactions, identify coaching opportunities, and ensure brand compliance.", features: ["Automated Interaction Scoring", "Agent Coaching Workflows", "Compliance Monitoring", "Dispute Management"] },
  { icon: Zap, name: "Workforce Management (WFM)", description: "Optimize your workforce with intelligent forecasting, scheduling, and real-time adherence tools to meet service levels efficiently.", features: ["AI-Powered Forecasting", "Automated Scheduling", "Intraday Management", "Time-Off Requests"] },
  { icon: Settings, name: "Open & Extensible", description: "Integrate RoboDesk seamlessly with your existing tech stack. Our platform is built to connect with hundreds of enterprise applications.", features: ["REST APIs", "Pre-built Integrations", "Custom Apps", "Secure Webhooks"] },
];
const featureList = [
    { icon: Bot, name: "AI Automation", description: "Deploy powerful generative AI bots that handle complex queries, automate tasks, and provide instant resolutions 24/7, freeing up your agents to focus on high-value interactions." }, { icon: Users, name: "Agent Co-Pilot", description: "Supercharge your agents' productivity with real-time AI assistance, including response suggestions, knowledge base access, and automated summaries for every conversation." }, { icon: ShieldCheck, name: "Automated QC", description: "Monitor 100% of interactions for quality and compliance automatically. Get unbiased, consistent scoring and identify critical coaching moments without manual effort." }, { icon: Briefcase, name: "Intelligent WFM", description: "Optimize staffing levels with AI-driven forecasting and scheduling. Ensure you have the right agents, in the right place, at the right time to meet demand." }, { icon: Ticket, name: "Unified Ticketing", description: "Consolidate all customer interactions from every channel into a single, intelligent ticketing system. Improve agent efficiency and provide seamless customer journeys." }, { icon: AreaChart, name: "Predictive Analytics", description: "Go beyond historical data. Leverage predictive analytics to anticipate customer needs, identify churn risks, and uncover opportunities for growth with actionable insights." }, { icon: Sparkles, name: "Proactive Engagement", description: "Utilize AI-driven triggers and predictive insights to engage customers at the perfect moment. Reduce churn and increase loyalty by solving problems before they arise." }, { icon: Voicemail, name: "Conversational Voice AI & IVR", description: "Replace frustrating phone menus with an intelligent, human-like conversational IVR. Understand customer intent, automate complex voice-based tasks, and seamlessly escalate to agents when needed." }, { icon: Library, name: "AI-Powered Self-Service", description: "Deflect common inquiries and empower customers with a dynamic, AI-curated knowledge base and self-service portal. Provide instant answers and reduce agent workload." },
];
const analyticsData = [
  { name: 'Jan', 'Avg. Handle Time (s)': 240, 'CSAT %': 85 }, { name: 'Feb', 'Avg. Handle Time (s)': 220, 'CSAT %': 88 }, { name: 'Mar', 'Avg. Handle Time (s)': 210, 'CSAT %': 90 }, { name: 'Apr', 'Avg. Handle Time (s)': 195, 'CSAT %': 92 }, { name: 'May', 'Avg. Handle Time (s)': 180, 'CSAT %': 94 }, { name: 'Jun', 'Avg. Handle Time (s)': 175, 'CSAT %': 95 },
];
const partners = [
    { name: 'Meta', logo: 'https://upload.wikimedia.org/wikipedia/commons/a/ab/Meta-Logo.svg' }, { name: 'AWS', logo: 'https://upload.wikimedia.org/wikipedia/commons/9/93/Amazon_Web_Services_Logo.svg' }, { name: 'Google Cloud', logo: 'https://upload.wikimedia.org/wikipedia/commons/5/51/Google_Cloud_logo.svg' }, { name: 'Microsoft Azure', logo: 'https://upload.wikimedia.org/wikipedia/commons/a/a8/Microsoft_Azure_Logo.svg' }, { name: 'Salesforce', logo: 'https://upload.wikimedia.org/wikipedia/commons/f/f9/Salesforce.com_logo.svg' }, { name: 'Twilio', logo: 'https://upload.wikimedia.org/wikipedia/commons/e/ef/Twilio_logo.svg' },
];
const certifications = [
    { name: 'SOC 2 Type II', logo: 'https://www.versions.dk/wp-content/uploads/2022/07/soc-2-type-2-logo-1.png' }, { name: 'ISO 27001', logo: 'https://logowik.com/content/uploads/images/iso-27001-certified5768.jpg' }, { name: 'GDPR Compliant', logo: 'https://www.gdprsummary.com/wp-content/uploads/2022/03/GDPR-compliant-logo.png' }, { name: 'ISO 9001', logo: 'https://upload.wikimedia.org/wikipedia/commons/thumb/0/0d/ISO_9001.svg/1200px-ISO_9001.svg.png' },
];
const offices = [
    { city: "Egypt Office", address: "2 El Geish St., Capital Tower, Tanta, Egypt" },
    { city: "London Office", address: "33 Charlbury Road, Ickenham, Middlesex, UB10 8EY" },
    { city: "Dubai Office", address: "43-44 Dubai Municipality – Bur Dubai - Al Fahidi" },
];

interface HomePageProps {
  language?: Language;
}

const HomePage: React.FC<HomePageProps> = ({ language = 'en' }) => {
    const [activeIndex, setActiveIndex] = useState<number | null>(null);
    const t = translations[language];
    const faqs = faqsData[language];
    const isRtl = language === 'ar';

    const handleLinkClick = (e: React.MouseEvent<HTMLAnchorElement>) => {
        e.preventDefault();
        const href = e.currentTarget.getAttribute('href');
        if (href?.startsWith('#')) {
          const elementId = href.substring(1);
          const element = document.getElementById(elementId);
          if (element) {
            element.scrollIntoView({ behavior: 'smooth' });
          }
        }
      };

    return (
        <div className="overflow-x-hidden">
            {/* Hero Section */}
            <section id="home" className="relative bg-white pt-20 pb-20 lg:pt-32 lg:pb-24">
                <div className="container mx-auto px-4 sm:px-6 lg:px-8 text-center">
                    <motion.h1 initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.5 }} className="text-4xl md:text-6xl font-extrabold tracking-tight text-gray-900">
                        {t.heroTitle1} <br /> <span className="text-transparent bg-clip-text bg-gradient-to-r from-orange-500 to-violet-600">{t.heroTitle2}</span>
                    </motion.h1>
                    <motion.p initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.5, delay: 0.2 }} className="mt-6 max-w-2xl mx-auto text-lg md:text-xl text-gray-600">
                        {t.heroSubtitle}
                    </motion.p>
                    <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.5, delay: 0.4 }} className="mt-10 flex justify-center gap-4">
                        <a href="#contact" onClick={handleLinkClick} className="inline-block bg-gradient-to-r from-orange-500 to-violet-600 text-white font-semibold py-3 px-8 rounded-lg shadow-lg hover:scale-105 transform transition-transform duration-300">
                            {t.requestDemo}
                        </a>
                        <a href="#platform" onClick={handleLinkClick} className="inline-block bg-white text-gray-700 font-semibold py-3 px-8 rounded-lg shadow-md border border-gray-200 hover:bg-gray-50 transition-colors">
                            {t.explorePlatform}
                        </a>
                    </motion.div>
                </div>
            </section>

            {/* Trust/Client Logos Section */}
            <section id="clients" className="bg-gray-50 py-12">
                <style>{`@keyframes marquee { 0% { transform: translateX(0%); } 100% { transform: translateX(-100%); } } @keyframes marquee-rtl { 0% { transform: translateX(-100%); } 100% { transform: translateX(0%); } } .animate-marquee { flex-shrink: 0; display: flex; align-items: center; min-width: 100%; animation: marquee 60s linear infinite; } .animate-marquee-rtl { flex-shrink: 0; display: flex; align-items: center; min-width: 100%; animation: marquee-rtl 60s linear infinite; } .group:hover .animate-marquee, .group:hover .animate-marquee-rtl { animation-play-state: paused; }`}</style>
                <div className="container mx-auto px-4 sm:px-6 lg:px-8">
                    <h2 className="text-center text-sm font-semibold text-gray-600 uppercase tracking-wider">{t.trustedBy}</h2>
                    <div className="mt-8 relative w-full overflow-hidden group">
                         <div className="flex">
                            <div className={isRtl ? 'animate-marquee-rtl' : 'animate-marquee'}>{clientLogos.map((logo, index) => (<div key={`logo-a-${index}`} className="mx-8 flex-shrink-0"><img className="h-12 w-auto grayscale opacity-60 hover:grayscale-0 hover:opacity-100 transition-all duration-300" src={logo.src} alt={logo.alt} /></div>))}</div>
                            <div className={isRtl ? 'animate-marquee-rtl' : 'animate-marquee'} aria-hidden="true">{clientLogos.map((logo, index) => (<div key={`logo-b-${index}`} className="mx-8 flex-shrink-0"><img className="h-12 w-auto grayscale opacity-60 hover:grayscale-0 hover:opacity-100 transition-all duration-300" src={logo.src} alt={logo.alt} /></div>))}</div>
                        </div>
                    </div>
                </div>
            </section>
            
            {/* Platform Section */}
            <section id="platform" className="bg-white py-20 lg:py-24">
                <div className="container mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="text-center">
                      <h2 className="text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">{t.platformTitle}</h2>
                      <p className="mt-4 max-w-2xl mx-auto text-lg text-gray-600">{t.platformSubtitle}</p>
                    </div>
                    <div className="mt-20 grid gap-8 md:grid-cols-2 lg:grid-cols-3">
                      {platformModules.map((module, index) => (
                        <motion.div key={module.name} initial={{ opacity: 0, y: 50 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true, amount: 0.3 }} transition={{ duration: 0.5, delay: index * 0.1 }} className="flex flex-col bg-gray-50 rounded-xl p-8 shadow-sm hover:shadow-lg transition-shadow duration-300">
                          <div className="inline-flex items-center justify-center h-12 w-12 rounded-lg bg-gradient-to-r from-orange-100 to-violet-100"><module.icon className="h-6 w-6 text-orange-500" /></div>
                          <div className="mt-6 flex-grow">
                            <h3 className="text-xl font-bold text-gray-900">{module.name}</h3>
                            <p className="mt-2 text-base text-gray-600">{module.description}</p>
                          </div>
                          <div className="mt-6"><ul className="space-y-2">{module.features.map(feature => (<li key={feature} className="flex items-center text-sm text-gray-700"><svg className="w-4 h-4 mr-2 text-green-500 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20"><path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd"></path></svg>{feature}</li>))}</ul></div>
                        </motion.div>
                      ))}
                    </div>
                </div>
            </section>

            {/* Features Section */}
            <section id="features" className="bg-gray-50 py-20 lg:py-24">
                <div className="container mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="text-center">
                        <h2 className="text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">{t.featuresTitle}</h2>
                        <p className="mt-4 max-w-2xl mx-auto text-lg text-gray-600">{t.featuresSubtitle}</p>
                    </div>
                    <div className="mt-20 grid gap-10 md:grid-cols-2 lg:grid-cols-3">
                        {featureList.map((feature) => (<div key={feature.name} className="flex items-start space-x-4"><div className="flex-shrink-0 h-10 w-10 flex items-center justify-center rounded-lg bg-gradient-to-r from-orange-100 to-violet-100"><feature.icon className="h-6 w-6 text-orange-500" /></div><div><h3 className="text-lg font-bold text-gray-900">{feature.name}</h3><p className="mt-1 text-base text-gray-600">{feature.description}</p></div></div>))}
                    </div>
                     <div className="mt-24 bg-white p-8 rounded-xl shadow-lg">
                        <h3 className="text-2xl font-bold text-gray-900 mb-2">{t.analyticsTitle}</h3>
                        <p className="text-gray-600 mb-8">{t.analyticsSubtitle}</p>
                        <div style={{ width: '100%', height: 400 }}><ResponsiveContainer><LineChart data={analyticsData} margin={{ top: 5, right: 30, left: 20, bottom: 5 }}><CartesianGrid strokeDasharray="3 3" /><XAxis dataKey="name" /><YAxis yAxisId="left" label={{ value: 'Avg. Handle Time (s)', angle: -90, position: 'insideLeft' }} /><YAxis yAxisId="right" orientation="right" label={{ value: 'CSAT %', angle: 90, position: 'insideRight' }} /><Tooltip /><Legend /><Line yAxisId="left" type="monotone" dataKey="Avg. Handle Time (s)" stroke="#ff6a00" activeDot={{ r: 8 }} /><Line yAxisId="right" type="monotone" dataKey="CSAT %" stroke="#7c4dff" /></LineChart></ResponsiveContainer></div>
                    </div>
                </div>
            </section>
            
            {/* KPIs Section */}
            <section id="numbers" className="bg-gradient-to-r from-orange-500 to-violet-600 py-20 lg:py-24">
                <div className="container mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="grid grid-cols-2 gap-8 md:grid-cols-4">{kpis.map((kpi) => (<div key={kpi.label} className="text-center text-white"><span className="text-5xl font-extrabold tracking-tight"><CountUp end={kpi.value} duration={3} enableScrollSpy />{kpi.suffix}</span><p className="mt-2 text-lg font-medium opacity-80">{isRtl ? kpi.labelAr : kpi.label}</p></div>))}</div>
                </div>
            </section>

             {/* Channels Section */}
            <section id="channels" className="py-20 lg:py-24 bg-white">
                <div className="container mx-auto px-4 sm:px-6 lg:px-8 text-center">
                    <h2 className="text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">{t.channelsTitle}</h2>
                    <p className="mt-4 max-w-2xl mx-auto text-lg text-gray-600">{t.channelsSubtitle}</p>
                    <div className="mt-16 max-w-4xl mx-auto grid grid-cols-2 md:grid-cols-4 gap-8">
                        {channels.map((channel) => (
                            <div key={channel.name} className="flex flex-col items-center justify-center p-6 bg-gray-50 rounded-xl border border-gray-100 hover:shadow-lg hover:-translate-y-1 transition-all duration-300">
                                {channel.icon}
                                <span className="mt-4 font-semibold text-gray-700">{channel.name}</span>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* Customers/Testimonials Section */}
            <section id="customers" className="bg-gray-50 py-20 lg:py-24">
                <div className="container mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="text-center">
                        <h2 className="text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">{t.customersTitle}</h2>
                        <p className="mt-4 max-w-2xl mx-auto text-lg text-gray-600">{t.customersSubtitle}</p>
                    </div>
                    <div className="mt-16 grid gap-8 lg:grid-cols-3">{testimonials.map((testimonial, index) => (<motion.div key={index} initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true, amount: 0.5 }} transition={{ duration: 0.5, delay: index * 0.1 }} className="bg-white p-8 rounded-xl shadow-sm hover:shadow-lg transition-shadow duration-300 flex flex-col"><blockquote className="flex-grow text-lg text-gray-800 italic"><p>“{testimonial.quote}”</p></blockquote><figcaption className="mt-6 pt-6 border-t border-gray-200 flex items-center"><img className="h-12 w-auto object-contain" src={testimonial.logo} alt={testimonial.company} /><div className="ml-4"><div className="font-bold text-gray-900">{testimonial.author}</div><div className="text-sm text-gray-600">{testimonial.title}, {testimonial.company}</div></div></figcaption></motion.div>))}</div>
                    <div className="mt-24 text-center">
                        <h3 className="text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">{t.videoTitle}</h3>
                        <p className="mt-4 max-w-2xl mx-auto text-lg text-gray-600">{t.videoSubtitle}</p>
                    </div>
                    <div className="mt-16 grid gap-12 lg:grid-cols-3">{videoTestimonials.map((testimonial, index) => (<motion.div key={index} initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true, amount: 0.5 }} transition={{ duration: 0.5, delay: index * 0.1 }} className="flex flex-col"><div className="relative aspect-video w-full bg-gray-800 rounded-xl shadow-lg overflow-hidden group cursor-pointer"><div className="absolute inset-0 bg-gradient-to-r from-orange-500 to-violet-600 opacity-80"></div><div className="absolute inset-0 flex items-center justify-center"><PlayCircle className="h-16 w-16 text-white/80 transform group-hover:scale-110 transition-transform duration-300" /></div><span className="absolute bottom-4 left-4 text-white font-bold text-lg">{testimonial.company}</span></div><blockquote className="mt-6 flex-grow"><p className="text-lg text-gray-700 italic">“{testimonial.quote}”</p></blockquote><figcaption className="mt-4"><div className="font-bold text-gray-900">{testimonial.author}</div><div className="text-sm text-gray-600">{testimonial.title}, {testimonial.company}</div></figcaption></motion.div>))}</div>
                </div>
            </section>
            
            {/* Partners Section */}
            <section id="partners" className="bg-white py-20 lg:py-24">
                <div className="container mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="text-center">
                        <h2 className="text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">{t.partnersTitle}</h2>
                        <p className="mt-4 max-w-2xl mx-auto text-lg text-gray-600">{t.partnersSubtitle}</p>
                    </div>
                    <div className="mt-16">
                        <h3 className="text-2xl font-bold text-gray-900 text-center mb-10">{t.techPartners}</h3>
                        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-8">{partners.map(p => (<div key={p.name} className="flex justify-center items-center p-6 bg-gray-50 rounded-lg border border-gray-100 hover:shadow-md transition-shadow duration-300 h-24"><img src={p.logo} alt={p.name} className="max-h-12 w-auto" /></div>))}</div>
                    </div>
                    <div className="mt-20">
                        <h3 className="text-2xl font-bold text-gray-900 text-center mb-10">{t.compliance}</h3>
                        <div className="grid grid-cols-2 md:grid-cols-4 gap-8">{certifications.map(c => (<div key={c.name} className="flex justify-center items-center p-6 bg-gray-50 rounded-lg border border-gray-100 hover:shadow-md transition-shadow duration-300 h-24"><img src={c.logo} alt={c.name} className="max-h-16 w-auto" /></div>))}</div>
                    </div>
                </div>
            </section>

            {/* FAQ Section */}
            <section id="faq" className="bg-gray-50 py-20 lg:py-24">
                <div className="container mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="text-center">
                        <h2 className="text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">{t.faqTitle}</h2>
                        <p className="mt-4 max-w-2xl mx-auto text-lg text-gray-600">{t.faqSubtitle}</p>
                    </div>
                    <div className="mt-12 max-w-3xl mx-auto"><div className="divide-y-2 divide-gray-200">{faqs.map((faq, index) => (<div key={index} className="py-6"><button onClick={() => setActiveIndex(activeIndex === index ? null : index)} className="flex justify-between items-center w-full text-left text-lg font-medium text-gray-900"><span>{faq.question}</span><motion.div animate={{ rotate: activeIndex === index ? 180 : 0 }} transition={{ duration: 0.2 }}><ChevronDown className="h-6 w-6 text-gray-500" /></motion.div></button><AnimatePresence initial={false}>{activeIndex === index && (<motion.div initial="collapsed" animate="open" exit="collapsed" variants={{ open: { opacity: 1, height: 'auto', marginTop: '16px' }, collapsed: { opacity: 0, height: 0, marginTop: '0px' }, }} transition={{ duration: 0.3, ease: [0.04, 0.62, 0.23, 0.98] }}><p className="text-base text-gray-600">{faq.answer}</p></motion.div>)}</AnimatePresence></div>))}</div></div>
                </div>
            </section>
            
            {/* Contact Section */}
            <section id="contact" className="bg-white py-20 lg:py-24">
                <div className="container mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="max-w-5xl mx-auto grid lg:grid-cols-2 gap-16 items-center">
                        <div>
                            <h2 className="text-3xl font-extrabold tracking-tight text-gray-900 sm:text-4xl">{t.contactTitle}</h2>
                            <p className="mt-4 text-lg text-gray-600">{t.contactSubtitle}</p>
                            
                             <div className="mt-8">
                                <a 
                                   href="https://wa.me/1234567890" // Placeholder number
                                   target="_blank" 
                                   rel="noopener noreferrer" 
                                   className="inline-flex items-center justify-center gap-3 w-full sm:w-auto bg-green-500 text-white font-bold py-4 px-8 rounded-lg shadow-lg hover:bg-green-600 transform transition-transform duration-300 hover:scale-105 text-lg"
                                >
                                    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="currentColor" className="h-7 w-7"><path d="M.057 24l1.687-6.163c-1.041-1.804-1.588-3.849-1.587-5.946.003-6.556 5.338-11.891 11.893-11.891 3.181.001 6.167 1.24 8.413 3.488 2.245 2.248 3.481 5.236 3.48 8.414-.003 6.557-5.338 11.892-11.894 11.892-1.99-.001-3.951-.5-5.688-1.448l-6.305 1.654zm6.597-3.807c1.676.995 3.276 1.591 5.392 1.592 5.448 0 9.886-4.434 9.889-9.885.002-5.462-4.415-9.89-9.881-9.892-5.452 0-9.887 4.434-9.889 9.886-.001 2.269.655 4.398 1.898 6.166l-1.29 4.721 4.753-1.241zM11.893 7.072c-.136 0-.273.007-.405.021l-.032.002c-.556.098-1.01.33-1.39.676-.38.346-.721.787-.946 1.203-.228.415-.347.858-.351 1.378-.002.522.083 1.018.235 1.463.153.445.358.87.589 1.231.23.36.495.69.776.99.28.3.59.566.911.803.32.236.661.438 1.01.606.35.168.714.295 1.093.38.378.085.768.128 1.161.126.54 0 1.05-.107 1.521-.322.47-.215.88-.508 1.217-.866.337-.358.584-.781.728-1.238.143-.458.214-.961.211-1.494-.004-.537-.1-1.044-.282-1.521-.183-.477-.445-.9-.773-1.258-.328-.358-.72-.647-1.156-.858-.436-.211-.92-.319-1.428-.319z"/></svg>
                                    {t.chatOnWhatsApp}
                                </a>
                            </div>

                            <div className="mt-12">
                                <h3 className="text-xl font-bold text-gray-900">{t.offices}</h3>
                                <div className="mt-6 grid gap-6">
                                    {offices.map(office => (
                                        <div key={office.city}>
                                            <h4 className="font-semibold text-gray-800 flex items-center"><MapPin className="h-5 w-5 mr-2 text-orange-500" /> {office.city}</h4>
                                            <p className="mt-1 text-gray-600 text-sm">{office.address}</p>
                                        </div>
                                    ))}
                                </div>
                            </div>
                        </div>

                        <div className="rounded-lg shadow-inner overflow-hidden aspect-square lg:aspect-auto min-h-[450px]">
                           <iframe
                                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3433.076352763311!2d30.99781367623326!3d30.772093874632734!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x14f7c97974555555%3A0x442b58832361667b!2sCapital%20Tower!5e0!3m2!1sen!2seg!4v1719245593683!5m2!1sen!2seg"
                                className="w-full h-full"
                                style={{ border: 0 }}
                                allowFullScreen={true}
                                loading="lazy"
                                referrerPolicy="no-referrer-when-downgrade"
                                title="Google Map of RoboDesk Egypt Office location in Capital Tower"
                            ></iframe>
                        </div>
                    </div>
                </div>
            </section>
        </div>
    );
};

export default HomePage;