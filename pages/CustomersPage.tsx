import React from 'react';
import { motion } from 'framer-motion';

const clientLogos = [
    { src: '/images/fedex.webp', alt: 'FedEx' },
    { src: '/images/lg.webp', alt: 'LG' },
    { src: '/images/swvl.webp', alt: 'SWVL' },
    { src: '/images/du.webp', alt: 'du' },
    { src: '/images/scan.webp', alt: 'Alfa Laboratories' },
    { src: '/images/gym.webp', alt: "Gold's Gym" },
    { src: '/images/mano.png', alt: 'Mano Tourism' },
    { src: '/images/freezoner.png', alt: 'Freezoner' },
    { src: '/images/frg.png', alt: 'Fashion Retail Group' },
    { src: '/images/rotana.png', alt: 'Rotana Scan & Lab' },
    { src: '/images/granzia.png', alt: 'Granzia' },
    { src: '/images/darwish-electronics.png', alt: 'Darwish Electronics' },
    { src: '/images/alfa-scan.png', alt: 'Alfa Scan' },
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

const CustomersPage: React.FC = () => {
    return (
        <div className="bg-gray-50">
            <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-16 sm:py-24">
                <div className="text-center">
                    <h1 className="text-4xl font-extrabold tracking-tight text-gray-900 sm:text-5xl">
                        Loved by Leading Enterprises
                    </h1>
                    <p className="mt-6 max-w-2xl mx-auto text-xl text-gray-600">
                        We're proud to partner with innovative companies around the world to redefine customer experience.
                    </p>
                </div>

                <div className="mt-20">
                    <h2 className="text-2xl font-bold text-gray-900 text-center mb-10">
                        Trusted by the world's leading enterprises
                    </h2>
                    <div className="bg-white p-8 rounded-xl shadow-md">
                        <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-5 gap-8 items-center">
                            {clientLogos.map((logo, index) => (
                                <motion.div 
                                    key={index}
                                    className="flex justify-center"
                                    initial={{ opacity: 0, scale: 0.9 }}
                                    whileInView={{ opacity: 1, scale: 1 }}
                                    viewport={{ once: true, amount: 0.5 }}
                                    transition={{ duration: 0.3, delay: index * 0.05 }}
                                >
                                    <img 
                                        className="max-h-12 w-auto grayscale opacity-70 hover:grayscale-0 hover:opacity-100 transition-all duration-300" 
                                        src={logo.src} 
                                        alt={logo.alt} 
                                    />
                                </motion.div>
                            ))}
                        </div>
                    </div>
                </div>
            </div>
            
            <section className="bg-white py-20">
                <div className="container mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="text-center">
                        <h2 className="text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">What Our Customers Say</h2>
                        <p className="mt-4 text-lg text-gray-600">Real stories from businesses transformed by RoboDesk.</p>
                    </div>
                    <div className="mt-16 grid gap-8 lg:grid-cols-3">
                        {testimonials.map((testimonial, index) => (
                            <motion.div 
                                key={index}
                                initial={{ opacity: 0, y: 30 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true, amount: 0.5 }}
                                transition={{ duration: 0.5, delay: index * 0.1 }}
                                className="bg-gray-50 p-8 rounded-xl shadow-sm hover:shadow-lg transition-shadow duration-300 flex flex-col"
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
        </div>
    );
};

export default CustomersPage;
