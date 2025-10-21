
import React from 'react';
import { motion } from 'framer-motion';
import { Bot, ShieldCheck, AreaChart, Settings, Ticket, Zap } from 'lucide-react';

const modules = [
  {
    icon: Bot,
    name: "AI & Automation",
    description: "Leverage state-of-the-art AI to automate conversations, predict customer needs, and streamline workflows for maximum efficiency.",
    features: ["Generative AI Bots", "Predictive Routing", "Sentiment Analysis", "Automated Workflows"]
  },
  {
    icon: Ticket,
    name: "Omnichannel Ticketing",
    description: "A unified inbox that brings all customer conversations from every channel into a single, manageable view for your agents.",
    features: ["Email, Chat, Social, Voice", "SLA Management", "Collision Detection", "Custom Fields"]
  },
  {
    icon: AreaChart,
    name: "Reporting & Analytics",
    description: "Make data-driven decisions with customizable dashboards, real-time reporting, and deep insights into every aspect of your CX operations.",
    features: ["Live Dashboards", "Agent Performance", "CSAT & NPS Tracking", "Trend Analysis"]
  },
  {
    icon: ShieldCheck,
    name: "Quality Control (QC)",
    description: "Automate 100% of your quality assurance processes. Score interactions, identify coaching opportunities, and ensure brand compliance.",
    features: ["Automated Interaction Scoring", "Agent Coaching Workflows", "Compliance Monitoring", "Dispute Management"]
  },
  {
    icon: Zap,
    name: "Workforce Management (WFM)",
    description: "Optimize your workforce with intelligent forecasting, scheduling, and real-time adherence tools to meet service levels efficiently.",
    features: ["AI-Powered Forecasting", "Automated Scheduling", "Intraday Management", "Time-Off Requests"]
  },
  {
    icon: Settings,
    name: "Open & Extensible",
    description: "Integrate RoboDesk seamlessly with your existing tech stack. Our platform is built to connect with hundreds of enterprise applications.",
    features: ["REST APIs", "Pre-built Integrations", "Custom Apps", "Secure Webhooks"]
  },
];

const PlatformPage: React.FC = () => {
  return (
    <div className="bg-white">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-16 sm:py-24">
        <div className="text-center">
          <h1 className="text-4xl font-extrabold tracking-tight text-gray-900 sm:text-5xl">
            The Complete Enterprise CX Platform
          </h1>
          <p className="mt-6 max-w-2xl mx-auto text-xl text-gray-600">
            One unified platform to manage the entire customer lifecycle, powered by cutting-edge AI.
          </p>
        </div>

        <div className="mt-20 grid gap-8 md:grid-cols-2 lg:grid-cols-3">
          {modules.map((module, index) => (
            <motion.div
              key={module.name}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.3 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="flex flex-col bg-gray-50 rounded-xl p-8 shadow-sm hover:shadow-lg transition-shadow duration-300"
            >
              <div className="flex-shrink-0">
                <div className="inline-flex items-center justify-center h-12 w-12 rounded-lg bg-gradient-to-r from-orange-100 to-violet-100">
                  <module.icon className="h-6 w-6 text-orange-500" />
                </div>
              </div>
              <div className="mt-6 flex-grow">
                <h3 className="text-xl font-bold text-gray-900">{module.name}</h3>
                <p className="mt-2 text-base text-gray-600">{module.description}</p>
              </div>
              <div className="mt-6">
                <ul className="space-y-2">
                    {module.features.map(feature => (
                        <li key={feature} className="flex items-center text-sm text-gray-700">
                            <svg className="w-4 h-4 mr-2 text-green-500 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20"><path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd"></path></svg>
                            {feature}
                        </li>
                    ))}
                </ul>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default PlatformPage;
