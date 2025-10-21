
import React, { useState } from 'react';
import { submitToTeams } from '../services/teamsWebhook';

type FormState = {
    name: string;
    company: string;
    email: string;
    phone: string;
    brief: string;
};

type FormStatus = 'idle' | 'loading' | 'success' | 'error';

const FreePilotPage: React.FC = () => {
    const [formState, setFormState] = useState<FormState>({
        name: '',
        company: '',
        email: '',
        phone: '',
        brief: '',
    });
    const [status, setStatus] = useState<FormStatus>('idle');
    const [errors, setErrors] = useState<Partial<FormState>>({});

    const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
        const { name, value } = e.target;
        setFormState(prevState => ({ ...prevState, [name]: value }));
        if(errors[name as keyof FormState]) {
            setErrors(prevErrors => ({...prevErrors, [name]: undefined}));
        }
    };

    const validateForm = (): boolean => {
        const newErrors: Partial<FormState> = {};
        if (!formState.name.trim()) newErrors.name = 'Full name is required';
        if (!formState.company.trim()) newErrors.company = 'Company name is required';
        if (!formState.email.trim()) {
            newErrors.email = 'Email is required';
        } else if (!/\S+@\S+\.\S+/.test(formState.email)) {
            newErrors.email = 'Email address is invalid';
        }
        if (!formState.phone.trim()) newErrors.phone = 'Phone number is required';
        
        setErrors(newErrors);
        return Object.keys(newErrors).length === 0;
    };

    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault();
        if (!validateForm()) {
            return;
        }

        setStatus('loading');
        try {
            await submitToTeams(formState);
            setStatus('success');
            setFormState({ name: '', company: '', email: '', phone: '', brief: '' });
        } catch (error) {
            setStatus('error');
            console.error('Failed to submit to Teams:', error);
        }
    };
    
    const InputField: React.FC<{name: keyof FormState; label: string; type?: string; required?: boolean}> = ({name, label, type='text', required=false}) => (
         <div>
            <label htmlFor={name} className="block text-sm font-medium text-gray-700">{label}{required && '*'}</label>
            <input
                type={type}
                name={name}
                id={name}
                value={formState[name]}
                onChange={handleChange}
                className={`mt-1 block w-full px-3 py-2 border ${errors[name] ? 'border-red-500' : 'border-gray-300'} rounded-md shadow-sm focus:outline-none focus:ring-violet-500 focus:border-violet-500 sm:text-sm`}
            />
            {errors[name] && <p className="mt-1 text-sm text-red-600">{errors[name]}</p>}
        </div>
    );

    return (
        <div className="bg-gray-50 py-16 sm:py-24">
            <div className="container mx-auto px-4 sm:px-6 lg:px-8">
                <div className="max-w-4xl mx-auto grid lg:grid-cols-2 gap-16 items-center">
                    <div>
                        <h1 className="text-3xl font-extrabold tracking-tight text-gray-900 sm:text-4xl">
                            Start Your <span className="text-transparent bg-clip-text bg-gradient-to-r from-orange-500 to-violet-600">Free Pilot</span>
                        </h1>
                        <p className="mt-4 text-lg text-gray-600">
                            Experience the full power of RoboDesk's AI-first CX platform, tailored to your business needs. Fill out the form, and our team will get in touch to set up your personalized pilot program.
                        </p>
                        <ul className="mt-8 space-y-4 text-gray-700">
                            <li className="flex items-start"><svg className="w-5 h-5 mr-2 text-green-500 flex-shrink-0 mt-1" fill="currentColor" viewBox="0 0 20 20"><path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd"></path></svg><span>No-obligation, 2-week trial</span></li>
                            <li className="flex items-start"><svg className="w-5 h-5 mr-2 text-green-500 flex-shrink-0 mt-1" fill="currentColor" viewBox="0 0 20 20"><path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd"></path></svg><span>Access to all enterprise features</span></li>
                            <li className="flex items-start"><svg className="w-5 h-5 mr-2 text-green-500 flex-shrink-0 mt-1" fill="currentColor" viewBox="0 0 20 20"><path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd"></path></svg><span>Dedicated support during setup</span></li>
                        </ul>
                    </div>
                    <div className="bg-white p-8 rounded-lg shadow-xl">
                        <form onSubmit={handleSubmit} className="space-y-6">
                            <InputField name="name" label="Full Name" required/>
                            <InputField name="company" label="Company" required/>
                            <InputField name="email" label="Work Email" type="email" required/>
                            <InputField name="phone" label="Phone Number" type="tel" required/>
                            <div>
                                <label htmlFor="brief" className="block text-sm font-medium text-gray-700">Project Brief</label>
                                <textarea name="brief" id="brief" rows={4} value={formState.brief} onChange={handleChange} className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-violet-500 focus:border-violet-500 sm:text-sm"></textarea>
                            </div>
                            <div>
                                <button type="submit" disabled={status === 'loading'} className="w-full flex justify-center py-3 px-4 border border-transparent rounded-md shadow-sm text-sm font-medium text-white bg-gradient-to-r from-orange-500 to-violet-600 hover:opacity-90 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-violet-500 disabled:opacity-50">
                                    {status === 'loading' ? 'Submitting...' : 'Request Pilot'}
                                </button>
                            </div>
                        </form>
                        {status === 'success' && <p className="mt-4 text-center text-green-600">Thank you! Your request has been received. We'll be in touch shortly.</p>}
                        {status === 'error' && <p className="mt-4 text-center text-red-600">Something went wrong. Please try again later.</p>}
                    </div>
                </div>
            </div>
        </div>
    );
};

export default FreePilotPage;
