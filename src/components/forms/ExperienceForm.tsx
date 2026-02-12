import React from 'react';
import type { Experience } from '../../types';
import { Plus, Trash2 } from 'lucide-react';

interface ExperienceFormProps {
    data: Experience[];
    onChange: (data: Experience[]) => void;
}

export const ExperienceForm: React.FC<ExperienceFormProps> = ({ data, onChange }) => {
    const addExperience = () => {
        const newExperience: Experience = {
            id: crypto.randomUUID(),
            title: '',
            company: '',
            location: '',
            startDate: '',
            endDate: '',
            current: false,
            description: '',
        };
        onChange([...data, newExperience]);
    };

    const updateExperience = (id: string, field: keyof Experience, value: any) => {
        onChange(data.map(item => item.id === id ? { ...item, [field]: value } : item));
    };

    const removeExperience = (id: string) => {
        onChange(data.filter(item => item.id !== id));
    };

    return (
        <div className="space-y-6">
            <div className="flex justify-between items-center border-b pb-2 mb-4">
                <h3 className="text-lg font-medium text-gray-900">Work Experience</h3>
                <button
                    onClick={addExperience}
                    className="flex items-center gap-1 text-sm font-medium text-blue-600 hover:text-blue-700"
                >
                    <Plus className="w-4 h-4" />
                    Add Experience
                </button>
            </div>

            {data.length === 0 && (
                <p className="text-gray-500 text-sm text-center py-4">No experience entries yet. Click "Add Experience" to start.</p>
            )}

            {data.map((exp) => (
                <div key={exp.id} className="bg-gray-50 p-4 rounded-lg border border-gray-200 relative group">
                    <button
                        onClick={() => removeExperience(exp.id)}
                        className="absolute top-2 right-2 text-gray-400 hover:text-red-500 opacity-0 group-hover:opacity-100 transition-opacity"
                        title="Remove"
                    >
                        <Trash2 className="w-4 h-4" />
                    </button>

                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-4">
                        <div>
                            <label className="block text-xs font-medium text-gray-700">Job Title</label>
                            <input
                                type="text"
                                value={exp.title}
                                onChange={(e) => updateExperience(exp.id, 'title', e.target.value)}
                                className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-blue-500 focus:ring-blue-500 sm:text-sm p-1.5 border"
                                placeholder="Software Engineer"
                            />
                        </div>
                        <div>
                            <label className="block text-xs font-medium text-gray-700">Company</label>
                            <input
                                type="text"
                                value={exp.company}
                                onChange={(e) => updateExperience(exp.id, 'company', e.target.value)}
                                className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-blue-500 focus:ring-blue-500 sm:text-sm p-1.5 border"
                                placeholder="Tech Corp"
                            />
                        </div>
                        <div>
                            <label className="block text-xs font-medium text-gray-700">Start Date</label>
                            <input
                                type="text"
                                value={exp.startDate}
                                onChange={(e) => updateExperience(exp.id, 'startDate', e.target.value)}
                                className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-blue-500 focus:ring-blue-500 sm:text-sm p-1.5 border"
                                placeholder="MM/YYYY"
                            />
                        </div>
                        <div>
                            <label className="block text-xs font-medium text-gray-700">End Date</label>
                            <input
                                type="text"
                                value={exp.endDate}
                                onChange={(e) => updateExperience(exp.id, 'endDate', e.target.value)}
                                disabled={exp.current}
                                className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-blue-500 focus:ring-blue-500 sm:text-sm p-1.5 border disabled:bg-gray-100 disabled:text-gray-400"
                                placeholder="MM/YYYY"
                            />
                            <div className="mt-1 flex items-center">
                                <input
                                    type="checkbox"
                                    id={`current-${exp.id}`}
                                    checked={exp.current}
                                    onChange={(e) => updateExperience(exp.id, 'current', e.target.checked)}
                                    className="h-4 w-4 text-blue-600 focus:ring-blue-500 border-gray-300 rounded"
                                />
                                <label htmlFor={`current-${exp.id}`} className="ml-2 block text-xs text-gray-700">
                                    I currently work here
                                </label>
                            </div>
                        </div>
                    </div>
                    <div>
                        <div className="flex justify-between items-center mb-1">
                            <label className="block text-xs font-medium text-gray-700">Description</label>
                            <button
                                onClick={async () => {
                                    if (!exp.description) return;
                                    try {
                                        const aiService = await import('../../utils/aiService');
                                        const enhanced = await aiService.enhanceText(exp.description);
                                        updateExperience(exp.id, 'description', enhanced);
                                    } catch (error) {
                                        console.error(error);
                                        alert('Failed to enhance text. Please check your API key.');
                                    }
                                }}
                                className="text-xs text-blue-600 hover:text-blue-800"
                            >
                                ✨ Enhance
                            </button>
                        </div>
                        <textarea
                            rows={3}
                            value={exp.description}
                            onChange={(e) => updateExperience(exp.id, 'description', e.target.value)}
                            className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-blue-500 focus:ring-blue-500 sm:text-sm p-1.5 border"
                            placeholder="Describe your responsibilities and achievements..."
                        />
                    </div>
                </div>
            ))}
        </div>
    );
};
