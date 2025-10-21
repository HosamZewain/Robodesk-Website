import React, { useState } from 'react';
import { NavLink } from 'react-router-dom';
import { motion, AnimatePresence } from 'framer-motion';
import { Bot, BarChart, Users, Phone, MessageSquare, Mail, ChevronDown } from 'lucide-react';
import CountUp from 'react-countup';

const clientLogos = [
    { src: '/images/fedex.webp', alt: 'FedEx' },
    { src: '/images/lg.webp', alt: 'LG' },
    { src: '/images/swvl.webp', alt: 'SWVL' },
    { src: '/images/du.webp', alt: 'du' },
    { src: '/images/scan.webp', alt: 'Alfa Laboratories' },
    { src: '/images/gym.webp', alt: "Gold's Gym" },
];

const testimonials = [
    {
        quote: "RoboDesk's AI automation has been a game-changer. We've reduced our average handle time by 35% and our customers are happier than ever.",
        author: "Jane Doe",
        title: "VP of Customer Support",
        company: "FedEx",
        logo: '/images/fedex.webp'
    },
    {
        quote: "The Agent Co-Pilot feature empowers our team to resolve issues faster and with more confidence. It's like giving every agent a personal expert.",
        author: "John Smith",
        title: "Director of CX",
        company: "LG",
        logo: '/images/lg.webp'
    },
     {
        quote: "The unified platform helped us streamline communication across all channels, leading to a 25% increase in our CSAT score.",
        author: "Fatima Al-Marzouqi",
        title: "Head of Digital Experience",
        company: "du",
        logo: '/images/du.webp'
    }
];

const kpis = [
    { value: 98, suffix: '%', label: 'Customer Satisfaction' },
    { value: 40, suffix: '%', label: 'Reduction in Costs' },
    { value: 3, suffix: 'x', label: 'Faster Response Time' },
    { value: 75, suffix: '%', label: 'Agent Task Automation' }
];

const features = [
    { icon: Bot, title: "AI Automation", description: "Resolve customer inquiries instantly with intelligent, context-aware bots." },
    { icon: Users, title: "Agent Co-Pilot", description: "Empower your agents with AI-powered suggestions and real-time guidance." },
    { icon: BarChart, title: "Advanced Analytics", description: "Gain deep insights into customer behavior and operational performance." },
];

const channels = [
    { icon: Phone, name: "Voice" },
    { icon: MessageSquare, name: "Chat & Social" },
    { icon: Mail, name: "Email" },
]

const faqs = [
    {
        question: "What is RoboDesk?",
        answer: "RoboDesk is an AI-First Customer Experience (CX) Platform designed for enterprise clients. It unifies all customer interactions into a single platform and uses generative AI to automate support, empower agents, and provide deep analytics."
    },
    {
        question: "How does the AI automation work?",
        answer: "Our platform uses advanced generative AI models to understand customer intent, access relevant information from your knowledge base, and provide accurate, human-like responses. It can handle everything from simple FAQs to complex, multi-step resolutions across voice, chat, and email."
    },
    {
        question: "Is RoboDesk secure for enterprise use?",
        answer: "Absolutely. Security is our top priority. RoboDesk is compliant with major industry standards like SOC 2 Type II, ISO 27001, and GDPR. We offer enterprise-grade security features, including data encryption, role-based access control, and regular security audits."
    },
    {
        question: "What kind of integrations do you support?",
        answer: "RoboDesk features an open and extensible architecture with REST APIs and pre-built integrations for major CRM (like Salesforce), communication (like Twilio), and enterprise systems. This ensures a seamless connection with your existing tech stack."
    },
    {
        question: "How long does it take to set up a free pilot?",
        answer: "Getting started is quick and easy. After you submit the pilot request form, our team typically reaches out within one business day. The pilot itself is a 2-week, no-obligation trial where we provide dedicated support to help you get set up and see the platform's value firsthand."
    }
];

const HomePage: React.FC = () => {
    const [activeIndex, setActiveIndex] = useState<number | null>(null);

    return (
        <div className="overflow-hidden">
            {/* Hero Section */}
            <section className="relative bg-white pt-20 pb-20 lg:pt-32 lg:pb-24">
                <div className="container mx-auto px-4 sm:px-6 lg:px-8 text-center">
                    <motion.h1 
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.5 }}
                        className="text-4xl md:text-6xl font-extrabold tracking-tight text-gray-900"
                    >
                        The AI-First Platform for
                        <br />
                        <span className="text-transparent bg-clip-text bg-gradient-to-r from-orange-500 to-violet-600">Enterprise CX</span>
                    </motion.h1>
                    <motion.p 
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.5, delay: 0.2 }}
                        className="mt-6 max-w-2xl mx-auto text-lg md:text-xl text-gray-600"
                    >
                        RoboDesk combines the power of generative AI with a unified platform to automate, analyze, and elevate every customer interaction.
                    </motion.p>
                    <motion.div 
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.5, delay: 0.4 }}
                        className="mt-10 flex justify-center gap-4"
                    >
                        <NavLink to="/free-pilot" className="inline-block bg-gradient-to-r from-orange-500 to-violet-600 text-white font-semibold py-3 px-8 rounded-lg shadow-lg hover:scale-105 transform transition-transform duration-300">
                            Get a Free Pilot
                        </NavLink>
                        <NavLink to="/platform" className="inline-block bg-white text-gray-700 font-semibold py-3 px-8 rounded-lg shadow-md border border-gray-200 hover:bg-gray-50 transition-colors">
                            Explore Platform
                        </NavLink>
                    </motion.div>
                </div>
            </section>

            {/* Trust/Client Logos Section */}
            <section className="bg-gray-50 py-12">
                <div className="container mx-auto px-4 sm:px-6 lg:px-8">
                    <h2 className="text-center text-sm font-semibold text-gray-600 uppercase tracking-wider">
                        Trusted by the world's leading enterprises
                    </h2>
                    <div className="mt-8 flow-root">
                        <div className="-mt-4 -ml-8 flex flex-wrap justify-center lg:-ml-4">
                            {clientLogos.map((logo, index) => (
                                <div key={index} className="mt-4 ml-8 flex flex-grow flex-shrink-0 justify-center items-center lg:flex-grow-0 lg:ml-4">
                                    <img className="h-12 grayscale opacity-60 hover:grayscale-0 hover:opacity-100 transition-all duration-300" src={logo.src} alt={logo.alt} />
                                </div>
                            ))}
                        </div>
                    </div>
                </div>
            </section>

             {/* Features Section */}
            <section className="py-20 lg:py-24">
                <div className="container mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="text-center">
                        <h2 className="text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">A Smarter Way to CX</h2>
                        <p className="mt-4 text-lg text-gray-600">Everything you need to deliver exceptional customer experiences at scale.</p>
                    </div>
                    <div className="mt-16 grid gap-12 md:grid-cols-3">
                        {features.map((feature, index) => (
                            <motion.div 
                                key={index}
                                initial={{ opacity: 0, y: 30 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true, amount: 0.5 }}
                                transition={{ duration: 0.5, delay: index * 0.1 }}
                                className="text-center p-8 border border-gray-100 rounded-xl shadow-sm hover:shadow-lg transition-shadow"
                            >
                                <div className="inline-flex items-center justify-center h-12 w-12 rounded-lg bg-gradient-to-r from-orange-100 to-violet-100">
                                    <feature.icon className="h-6 w-6 text-orange-500" />
                                </div>
                                <h3 className="mt-6 text-lg font-semibold text-gray-900">{feature.title}</h3>
                                <p className="mt-2 text-base text-gray-600">{feature.description}</p>
                            </motion.div>
                        ))}
                    </div>
                </div>
            </section>

            {/* KPIs Section */}
            <section className="bg-gradient-to-r from-orange-500 to-violet-600 py-20 lg:py-24">
                <div className="container mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="grid grid-cols-2 gap-8 md:grid-cols-4">
                        {kpis.map((kpi) => (
                            <div key={kpi.label} className="text-center text-white">
                                <span className="text-5xl font-extrabold tracking-tight">
                                    <CountUp end={kpi.value} duration={3} enableScrollSpy />{kpi.suffix}
                                </span>
                                <p className="mt-2 text-lg font-medium opacity-80">{kpi.label}</p>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

             {/* Channels Section */}
            <section className="py-20 lg:py-24 bg-white">
                <div className="container mx-auto px-4 sm:px-6 lg:px-8 text-center">
                    <h2 className="text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">Engage Across Every Channel</h2>
                    <p className="mt-4 max-w-2xl mx-auto text-lg text-gray-600">Provide a seamless, consistent experience wherever your customers are.</p>
                    <div className="mt-16 flex justify-center items-center gap-12 md:gap-20">
                         {channels.map((channel) => (
                            <div key={channel.name} className="flex flex-col items-center gap-4 text-gray-600">
                               <channel.icon className="h-10 w-10"/>
                               <span className="font-medium">{channel.name}</span>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* Testimonials Section */}
            <section className="bg-gray-50 py-20 lg:py-24">
                <div className="container mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="text-center">
                        <h2 className="text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">What Our Customers Say</h2>
                        <p className="mt-4 max-w-2xl mx-auto text-lg text-gray-600">Real stories from businesses transformed by RoboDesk.</p>
                    </div>
                    <div className="mt-16 grid gap-8 lg:grid-cols-3">
                        {testimonials.map((testimonial, index) => (
                            <motion.div 
                                key={index}
                                initial={{ opacity: 0, y: 30 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true, amount: 0.5 }}
                                transition={{ duration: 0.5, delay: index * 0.1 }}
                                className="bg-white p-8 rounded-xl shadow-sm hover:shadow-lg transition-shadow duration-300 flex flex-col"
                            >
                                <blockquote className="flex-grow text-lg text-gray-800 italic">
                                    <p>“{testimonial.quote}”</p>
                                </blockquote>
                                <figcaption className="mt-6 pt-6 border-t border-gray-200 flex items-center">
                                    <img className="h-12 w-auto object-contain" src={testimonial.logo} alt={testimonial.company} />
                                    <div className="ml-4">
                                        <div className="font-bold text-gray-900">{testimonial.author}</div>
                                        <div className="text-sm text-gray-600">{testimonial.title}, {testimonial.company}</div>
                                    </div>
                                </figcaption>
                            </motion.div>
                        ))}
                    </div>
                </div>
            </section>

            {/* FAQ Section */}
            <section className="bg-white py-20 lg:py-24">
                <div className="container mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="text-center">
                        <h2 className="text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">Frequently Asked Questions</h2>
                        <p className="mt-4 max-w-2xl mx-auto text-lg text-gray-600">Have questions? We have answers. If you don't find what you're looking for, feel free to contact us.</p>
                    </div>
                    <div className="mt-12 max-w-3xl mx-auto">
                        <div className="divide-y-2 divide-gray-200">
                            {faqs.map((faq, index) => (
                                <div key={index} className="py-6">
                                    <button
                                        onClick={() => setActiveIndex(activeIndex === index ? null : index)}
                                        className="flex justify-between items-center w-full text-left text-lg font-medium text-gray-900"
                                    >
                                        <span>{faq.question}</span>
                                        <motion.div
                                            animate={{ rotate: activeIndex === index ? 180 : 0 }}
                                            transition={{ duration: 0.2 }}
                                        >
                                            <ChevronDown className="h-6 w-6 text-gray-500" />
                                        </motion.div>
                                    </button>
                                    <AnimatePresence initial={false}>
                                        {activeIndex === index && (
                                            <motion.div
                                                initial="collapsed"
                                                animate="open"
                                                exit="collapsed"
                                                variants={{
                                                    open: { opacity: 1, height: 'auto', marginTop: '16px' },
                                                    collapsed: { opacity: 0, height: 0, marginTop: '0px' },
                                                }}
                                                transition={{ duration: 0.3, ease: [0.04, 0.62, 0.23, 0.98] }}
                                            >
                                                <p className="text-base text-gray-600">{faq.answer}</p>
                                            </motion.div>
                                        )}
                                    </AnimatePresence>
                                </div>
                            ))}
                        </div>
                    </div>
                </div>
            </section>


            {/* CTA Section */}
            <section className="bg-gray-50">
                 <div className="container mx-auto py-16 px-4 sm:px-6 lg:px-8">
                     <div className="bg-white rounded-2xl shadow-xl p-8 md:p-12 lg:flex lg:items-center lg:justify-between">
                         <div>
                            <h2 className="text-2xl font-extrabold tracking-tight text-gray-900 sm:text-3xl">
                                <span className="block">Ready to transform your CX?</span>
                                <span className="block text-transparent bg-clip-text bg-gradient-to-r from-orange-500 to-violet-600">Start your free pilot today.</span>
                            </h2>
                            <p className="mt-3 text-lg text-gray-600">
                               No credit card required. See the power of RoboDesk in action.
                            </p>
                         </div>
                         <div className="mt-8 lg:mt-0 lg:flex-shrink-0">
                             <div className="inline-flex rounded-md shadow">
                                 <NavLink to="/free-pilot" className="inline-block bg-gradient-to-r from-orange-500 to-violet-600 text-white font-semibold py-3 px-8 rounded-lg shadow-lg hover:scale-105 transform transition-transform duration-300">
                                     Start Free Pilot
                                 </NavLink>
                             </div>
                         </div>
                     </div>
                 </div>
            </section>
        </div>
    );
};

export default HomePage;
