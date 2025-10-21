
import React from 'react';

const PrivacyPolicyPage: React.FC = () => {
    return (
        <div className="bg-white">
            <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-16 sm:py-24">
                <div className="max-w-4xl mx-auto prose lg:prose-xl">
                    <h1>Privacy Policy</h1>
                    <p className="text-gray-500">Last updated: {new Date().toLocaleDateString()}</p>
                    
                    <h2>1. Introduction</h2>
                    <p>
                        Welcome to RoboDesk Inc. ("Company", "we", "our", "us")! We are committed to protecting your personal information and your right to privacy. If you have any questions or concerns about our policy, or our practices with regards to your personal information, please contact us at privacy@robodesk.ai.
                    </p>

                    <h2>2. Information We Collect</h2>
                    <p>
                        We collect personal information that you voluntarily provide to us when you express an interest in obtaining information about us or our products and services, when you participate in activities on the Website or otherwise when you contact us.
                    </p>
                    <p>
                        The personal information that we collect depends on the context of your interactions with us and the Website, the choices you make and the products and features you use. The personal information we collect may include the following: Name, Email Address, Phone Number, Company Name, etc.
                    </p>

                    <h2>3. How We Use Your Information</h2>
                    <p>
                        We use personal information collected via our Website for a variety of business purposes described below. We process your personal information for these purposes in reliance on our legitimate business interests, in order to enter into or perform a contract with you, with your consent, and/or for compliance with our legal obligations.
                    </p>

                    <h2>4. Will Your Information Be Shared With Anyone?</h2>
                    <p>
                        We only share information with your consent, to comply with laws, to provide you with services, to protect your rights, or to fulfill business obligations.
                    </p>

                    <h2>5. How Long Do We Keep Your Information?</h2>
                    <p>
                        We keep your information for as long as necessary to fulfill the purposes outlined in this privacy policy unless otherwise required by law.
                    </p>
                    
                    <h2>6. How Do We Keep Your Information Safe?</h2>
                    <p>
                        We aim to protect your personal information through a system of organizational and technical security measures.
                    </p>
                    
                    <h2>7. Contact Us</h2>
                    <p>
                        If you have questions or comments about this policy, you may email us at privacy@robodesk.ai.
                    </p>
                </div>
            </div>
        </div>
    );
};

export default PrivacyPolicyPage;
