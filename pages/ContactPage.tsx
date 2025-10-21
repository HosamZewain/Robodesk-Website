
import React from 'react';
import { MapPin, Phone, Mail } from 'lucide-react';

const offices = [
    { city: "New York", address: "123 Innovation Drive, New York, NY 10001", phone: "+1 (212) 555-0123" },
    { city: "London", address: "456 Tech Avenue, London, EC1Y 8SY, UK", phone: "+44 20 7946 0958" },
    { city: "Dubai", address: "789 Future Street, Dubai, UAE", phone: "+971 4 555 0199" },
];

const ContactPage: React.FC = () => {
    return (
        <div className="bg-white">
            <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-16 sm:py-24">
                <div className="text-center">
                    <h1 className="text-4xl font-extrabold tracking-tight text-gray-900 sm:text-5xl">
                        Get in Touch
                    </h1>
                    <p className="mt-6 max-w-2xl mx-auto text-xl text-gray-600">
                        We'd love to hear from you. Whether you have a question about features, pricing, or anything else, our team is ready to answer all your questions.
                    </p>
                </div>

                <div className="mt-20 grid md:grid-cols-3 gap-12">
                    {offices.map(office => (
                        <div key={office.city} className="text-center">
                            <MapPin className="mx-auto h-8 w-8 text-orange-500" />
                            <h3 className="mt-4 text-xl font-bold text-gray-900">{office.city}</h3>
                            <p className="mt-2 text-gray-600">{office.address}</p>
                            <p className="mt-1 text-gray-600">{office.phone}</p>
                        </div>
                    ))}
                </div>

                <div className="mt-20 max-w-5xl mx-auto grid lg:grid-cols-2 gap-16 items-start">
                    <div className="bg-gray-50 p-8 rounded-lg">
                        <h2 className="text-2xl font-bold text-gray-900">Contact Us Directly</h2>
                        <div className="mt-6 space-y-4">
                            <div className="flex items-center">
                                <Phone className="h-5 w-5 text-gray-500 mr-3"/>
                                <span className="text-gray-700">+1 (800) 555-ROBO</span>
                            </div>
                             <div className="flex items-center">
                                <Mail className="h-5 w-5 text-gray-500 mr-3"/>
                                <span className="text-gray-700">sales@robodesk.ai</span>
                            </div>
                        </div>
                        {/* Map Placeholder */}
                        <div className="mt-8 h-64 bg-gray-200 rounded-lg flex items-center justify-center">
                            <p className="text-gray-500">Map loading...</p>
                        </div>
                    </div>

                     <div className="bg-white p-8 rounded-lg shadow-xl border border-gray-100">
                        <h2 className="text-2xl font-bold text-gray-900 mb-6">Send us a Message</h2>
                        <form action="#" method="POST" className="space-y-6">
                            <div>
                                <label htmlFor="name" className="sr-only">Full Name</label>
                                <input type="text" name="name" id="name" placeholder="Full Name" className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-violet-500 focus:border-violet-500 sm:text-sm" />
                            </div>
                            <div>
                                <label htmlFor="email" className="sr-only">Email</label>
                                <input type="email" name="email" id="email" placeholder="Email Address" className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-violet-500 focus:border-violet-500 sm:text-sm" />
                            </div>
                             <div>
                                <label htmlFor="message" className="sr-only">Message</label>
                                <textarea name="message" id="message" rows={4} placeholder="Your Message" className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-violet-500 focus:border-violet-500 sm:text-sm"></textarea>
                            </div>
                            <div>
                                <button type="submit" className="w-full flex justify-center py-3 px-4 border border-transparent rounded-md shadow-sm text-sm font-medium text-white bg-gradient-to-r from-orange-500 to-violet-600 hover:opacity-90 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-violet-500">
                                    Send Message
                                </button>
                            </div>
                        </form>
                    </div>

                </div>
            </div>
        </div>
    );
};

export default ContactPage;
