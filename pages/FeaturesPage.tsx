
import React from 'react';
import { LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer } from 'recharts';
import { Bot, Users, ShieldCheck, Ticket, AreaChart, Briefcase } from 'lucide-react';

const featureList = [
    { icon: Bot, name: "AI Automation", description: "Deploy powerful generative AI bots that handle complex queries, automate tasks, and provide instant resolutions 24/7, freeing up your agents to focus on high-value interactions." },
    { icon: Users, name: "Agent Co-Pilot", description: "Supercharge your agents' productivity with real-time AI assistance, including response suggestions, knowledge base access, and automated summaries for every conversation." },
    { icon: ShieldCheck, name: "Automated QC", description: "Monitor 100% of interactions for quality and compliance automatically. Get unbiased, consistent scoring and identify critical coaching moments without manual effort." },
    { icon: Briefcase, name: "Intelligent WFM", description: "Optimize staffing levels with AI-driven forecasting and scheduling. Ensure you have the right agents, in the right place, at the right time to meet demand." },
    { icon: Ticket, name: "Unified Ticketing", description: "Consolidate all customer interactions from every channel into a single, intelligent ticketing system. Improve agent efficiency and provide seamless customer journeys." },
    { icon: AreaChart, name: "Predictive Analytics", description: "Go beyond historical data. Leverage predictive analytics to anticipate customer needs, identify churn risks, and uncover opportunities for growth with actionable insights." },
];

const analyticsData = [
  { name: 'Jan', 'Avg. Handle Time (s)': 240, 'CSAT %': 85 },
  { name: 'Feb', 'Avg. Handle Time (s)': 220, 'CSAT %': 88 },
  { name: 'Mar', 'Avg. Handle Time (s)': 210, 'CSAT %': 90 },
  { name: 'Apr', 'Avg. Handle Time (s)': 195, 'CSAT %': 92 },
  { name: 'May', 'Avg. Handle Time (s)': 180, 'CSAT %': 94 },
  { name: 'Jun', 'Avg. Handle Time (s)': 175, 'CSAT %': 95 },
];


const FeaturesPage: React.FC = () => {
    return (
        <div className="bg-gray-50">
            <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-16 sm:py-24">
                <div className="text-center">
                    <h1 className="text-4xl font-extrabold tracking-tight text-gray-900 sm:text-5xl">
                        Enterprise-Grade AI Features
                    </h1>
                    <p className="mt-6 max-w-2xl mx-auto text-xl text-gray-600">
                        Discover the powerful capabilities that make RoboDesk the leading CX platform.
                    </p>
                </div>

                <div className="mt-20 grid gap-10 md:grid-cols-2 lg:grid-cols-3">
                    {featureList.map((feature) => (
                        <div key={feature.name} className="flex items-start space-x-4">
                            <div className="flex-shrink-0 h-10 w-10 flex items-center justify-center rounded-lg bg-gradient-to-r from-orange-100 to-violet-100">
                                <feature.icon className="h-6 w-6 text-orange-500" />
                            </div>
                            <div>
                                <h3 className="text-lg font-bold text-gray-900">{feature.name}</h3>
                                <p className="mt-1 text-base text-gray-600">{feature.description}</p>
                            </div>
                        </div>
                    ))}
                </div>

                <div className="mt-24 bg-white p-8 rounded-xl shadow-lg">
                    <h2 className="text-2xl font-bold text-gray-900 mb-2">See the Impact with Advanced Analytics</h2>
                    <p className="text-gray-600 mb-8">Track KPIs in real-time and visualize the impact of AI on your operations.</p>
                     <div style={{ width: '100%', height: 400 }}>
                        <ResponsiveContainer>
                            <LineChart
                                data={analyticsData}
                                margin={{ top: 5, right: 30, left: 20, bottom: 5 }}
                            >
                                <CartesianGrid strokeDasharray="3 3" />
                                <XAxis dataKey="name" />
                                <YAxis yAxisId="left" label={{ value: 'Avg. Handle Time (s)', angle: -90, position: 'insideLeft' }} />
                                <YAxis yAxisId="right" orientation="right" label={{ value: 'CSAT %', angle: 90, position: 'insideRight' }} />
                                <Tooltip />
                                <Legend />
                                <Line yAxisId="left" type="monotone" dataKey="Avg. Handle Time (s)" stroke="#ff6a00" activeDot={{ r: 8 }} />
                                <Line yAxisId="right" type="monotone" dataKey="CSAT %" stroke="#7c4dff" />
                            </LineChart>
                        </ResponsiveContainer>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default FeaturesPage;
