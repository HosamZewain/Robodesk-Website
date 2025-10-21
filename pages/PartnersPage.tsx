
import React from 'react';

const partners = [
    { name: 'AWS', logo: 'https://upload.wikimedia.org/wikipedia/commons/9/93/Amazon_Web_Services_Logo.svg', category: 'Cloud' },
    { name: 'Google Cloud', logo: 'https://upload.wikimedia.org/wikipedia/commons/5/51/Google_Cloud_logo.svg', category: 'Cloud' },
    { name: 'Microsoft Azure', logo: 'https://upload.wikimedia.org/wikipedia/commons/a/a8/Microsoft_Azure_Logo.svg', category: 'Cloud' },
    { name: 'Salesforce', logo: 'https://upload.wikimedia.org/wikipedia/commons/f/f9/Salesforce.com_logo.svg', category: 'CRM' },
    { name: 'Zendesk', logo: 'https://upload.wikimedia.org/wikipedia/commons/a/a2/Zendesk_logo.svg', category: 'CRM' },
    { name: 'Twilio', logo: 'https://upload.wikimedia.org/wikipedia/commons/e/ef/Twilio_logo.svg', category: 'Communication' },
];

const certifications = [
    { name: 'SOC 2 Type II', logo: 'https://www.versions.dk/wp-content/uploads/2022/07/soc-2-type-2-logo-1.png' },
    { name: 'ISO 27001', logo: 'https://logowik.com/content/uploads/images/iso-27001-certified5768.jpg' },
    { name: 'GDPR Compliant', logo: 'https://www.gdprsummary.com/wp-content/uploads/2022/03/GDPR-compliant-logo.png' },
    { name: 'HIPAA Compliant', logo: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQf-D5p4eP1-u1F6V40u_ag_1y8Z3s-k1T2wQ&s' },
];

const PartnerLogo: React.FC<{ logo: string; name: string }> = ({ logo, name }) => (
    <div className="flex justify-center items-center p-6 bg-white rounded-lg shadow-md border border-gray-100 hover:shadow-xl transition-shadow duration-300 h-32">
        <img src={logo} alt={name} className="max-h-16 w-auto" />
    </div>
);

const PartnersPage: React.FC = () => {
    return (
        <div className="bg-white">
            <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-16 sm:py-24">
                <div className="text-center">
                    <h1 className="text-4xl font-extrabold tracking-tight text-gray-900 sm:text-5xl">
                        Our Technology Ecosystem
                    </h1>
                    <p className="mt-6 max-w-2xl mx-auto text-xl text-gray-600">
                        We partner with best-in-class technology providers to deliver a secure, scalable, and integrated solution.
                    </p>
                </div>

                <div className="mt-20">
                    <h2 className="text-2xl font-bold text-gray-900 text-center mb-10">Cloud & Technology Partners</h2>
                    <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8">
                        {partners.map(partner => <PartnerLogo key={partner.name} {...partner} />)}
                    </div>
                </div>

                <div className="mt-24">
                    <h2 className="text-2xl font-bold text-gray-900 text-center mb-10">Security & Compliance Certifications</h2>
                    <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
                        {certifications.map(cert => <PartnerLogo key={cert.name} {...cert} />)}
                    </div>
                </div>
            </div>
        </div>
    );
};

export default PartnersPage;
