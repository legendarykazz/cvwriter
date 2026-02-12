import React from 'react';
import type { PersonalInfo } from '../../types';

interface PersonalInfoFormProps {
    data: PersonalInfo;
    onChange: (data: PersonalInfo) => void;
}

export const PersonalInfoForm: React.FC<PersonalInfoFormProps> = ({ data, onChange }) => {
    const [isGenerating, setIsGenerating] = React.useState(false);

    // Move handleChange back inside the component
    const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
        const { name, value } = e.target;
        onChange({ ...data, [name]: value });
    };

    const handleGenerateSummary = async () => {
        if (!data.jobTitle) {
            alert('Please enter your Job Title first.');
            return;
        }

        const userContext = prompt('Enter a few keywords or highlights about yourself (e.g., "5 years experience, expert in React, team lead"):', 'Experienced professional with a passion for excellence.');
        if (!userContext) return; // User cancelled

        setIsGenerating(true);
        try {
            const aiService = await import('../../utils/aiService');
            const summary = await aiService.generateSummary(
                data.jobTitle,
                userContext
            );
            onChange({ ...data, summary });
        } catch (error) {
            console.error(error);
            alert('Failed to generate summary. Please check your network connection.');
        } finally {
            setIsGenerating(false);
        }
    };

    return (
        <div className="space-y-4">
            <h3 className="text-lg font-medium text-gray-900 border-b pb-2 mb-4">Personal Information</h3>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div>
                    <label className="block text-sm font-medium text-gray-700">Full Name</label>
                    <input
                        type="text"
                        name="fullName"
                        value={data.fullName}
                        onChange={handleChange}
                        className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-blue-500 focus:ring-blue-500 sm:text-sm p-2 border"
                        placeholder="John Doe"
                    />
                </div>
                <div>
                    <label className="block text-sm font-medium text-gray-700">Job Title</label>
                    <input
                        type="text"
                        name="jobTitle"
                        value={data.jobTitle || ''}
                        onChange={handleChange}
                        className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-blue-500 focus:ring-blue-500 sm:text-sm p-2 border"
                        placeholder="Software Engineer"
                    />
                </div>
                <div>
                    <label className="block text-sm font-medium text-gray-700">Email</label>
                    <input
                        type="email"
                        name="email"
                        value={data.email}
                        onChange={handleChange}
                        className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-blue-500 focus:ring-blue-500 sm:text-sm p-2 border"
                        placeholder="john@example.com"
                    />
                </div>
                <div>
                    <label className="block text-sm font-medium text-gray-700">Phone</label>
                    <input
                        type="tel"
                        name="phone"
                        value={data.phone}
                        onChange={handleChange}
                        className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-blue-500 focus:ring-blue-500 sm:text-sm p-2 border"
                        placeholder="+1 234 567 890"
                    />
                </div>
                <div>
                    <label className="block text-sm font-medium text-gray-700">Location/Address</label>
                    <input
                        type="text"
                        name="address"
                        value={data.address}
                        onChange={handleChange}
                        className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-blue-500 focus:ring-blue-500 sm:text-sm p-2 border"
                        placeholder="New York, NY"
                    />
                </div>
                <div>
                    <label className="block text-sm font-medium text-gray-700">LinkedIn (Optional)</label>
                    <input
                        type="url"
                        name="linkedin"
                        value={data.linkedin}
                        onChange={handleChange}
                        className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-blue-500 focus:ring-blue-500 sm:text-sm p-2 border"
                        placeholder="linkedin.com/in/johndoe"
                    />
                </div>
                <div>
                    <label className="block text-sm font-medium text-gray-700">Website/Portfolio (Optional)</label>
                    <input
                        type="url"
                        name="website"
                        value={data.website}
                        onChange={handleChange}
                        className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-blue-500 focus:ring-blue-500 sm:text-sm p-2 border"
                        placeholder="johndoe.com"
                    />
                </div>
                <div>
                    <label className="block text-sm font-medium text-gray-700">Gender (Optional)</label>
                    <input
                        type="text"
                        name="gender"
                        value={data.gender || ''}
                        onChange={handleChange}
                        className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-blue-500 focus:ring-blue-500 sm:text-sm p-2 border"
                        placeholder="Male/Female/Other"
                    />
                </div>
                <div>
                    <label className="block text-sm font-medium text-gray-700">Marital Status (Optional)</label>
                    <input
                        type="text"
                        name="maritalStatus"
                        value={data.maritalStatus || ''}
                        onChange={handleChange}
                        className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-blue-500 focus:ring-blue-500 sm:text-sm p-2 border"
                        placeholder="Single/Married/Divorced"
                    />
                </div>
                <div>
                    <label className="block text-sm font-medium text-gray-700">Nationality (Optional)</label>
                    <input
                        type="text"
                        name="nationality"
                        value={data.nationality || ''}
                        onChange={handleChange}
                        className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-blue-500 focus:ring-blue-500 sm:text-sm p-2 border"
                        placeholder="Nigerian/American/etc."
                    />
                </div>
                <div>
                    <label className="block text-sm font-medium text-gray-700">Date of Birth (Optional)</label>
                    <input
                        type="text"
                        name="dateOfBirth"
                        value={data.dateOfBirth || ''}
                        onChange={handleChange}
                        className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-blue-500 focus:ring-blue-500 sm:text-sm p-2 border"
                        placeholder="22nd January 1997"
                    />
                </div>
                <div>
                    <label className="block text-sm font-medium text-gray-700">State of Origin (Optional)</label>
                    <input
                        type="text"
                        name="stateOfOrigin"
                        value={data.stateOfOrigin || ''}
                        onChange={handleChange}
                        className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-blue-500 focus:ring-blue-500 sm:text-sm p-2 border"
                        placeholder="Lagos State"
                    />
                </div>
                <div>
                    <label className="block text-sm font-medium text-gray-700">Local Government (Optional)</label>
                    <input
                        type="text"
                        name="localGovernment"
                        value={data.localGovernment || ''}
                        onChange={handleChange}
                        className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-blue-500 focus:ring-blue-500 sm:text-sm p-2 border"
                        placeholder="Ikeja"
                    />
                </div>
                <div>
                    <label className="block text-sm font-medium text-gray-700">Religion (Optional)</label>
                    <input
                        type="text"
                        name="religion"
                        value={data.religion || ''}
                        onChange={handleChange}
                        className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-blue-500 focus:ring-blue-500 sm:text-sm p-2 border"
                        placeholder="Christian/Muslim/etc."
                    />
                </div>
            </div>
            <div>
                <div className="flex justify-between items-center mb-1">
                    <label className="block text-sm font-medium text-gray-700">Professional Summary</label>
                    <button
                        onClick={handleGenerateSummary}
                        disabled={isGenerating}
                        className="flex items-center gap-1 text-sm font-medium text-blue-600 hover:text-blue-800 disabled:opacity-50 transition-colors"
                        title="Generate a summary using AI"
                    >
                        <span>{isGenerating ? 'Generating...' : '✨ Generate with AI'}</span>
                    </button>
                </div>
                <textarea
                    name="summary"
                    rows={4}
                    value={data.summary}
                    onChange={handleChange}
                    className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-blue-500 focus:ring-blue-500 sm:text-sm p-2 border"
                    placeholder="Briefly describe your professional background and goals..."
                />
            </div>
        </div>
    );
};
