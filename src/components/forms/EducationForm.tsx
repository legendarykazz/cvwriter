import React from 'react';
import type { Education } from '../../types';
import { Plus, Trash2 } from 'lucide-react';

interface EducationFormProps {
    data: Education[];
    onChange: (data: Education[]) => void;
}

export const EducationForm: React.FC<EducationFormProps> = ({ data, onChange }) => {
    const addEducation = () => {
        const newEducation: Education = {
            id: crypto.randomUUID(),
            degree: '',
            school: '',
            location: '',
            startDate: '',
            endDate: '',
            current: false,
            description: '',
        };
        onChange([...data, newEducation]);
    };

    const updateEducation = (id: string, field: keyof Education, value: any) => {
        onChange(data.map(item => item.id === id ? { ...item, [field]: value } : item));
    };

    const removeEducation = (id: string) => {
        onChange(data.filter(item => item.id !== id));
    };

    return (
        <div className="space-y-6">
            <div className="flex justify-between items-center border-b pb-2 mb-4">
                <h3 className="text-lg font-medium text-gray-900">Education</h3>
                <button
                    onClick={addEducation}
                    className="flex items-center gap-1 text-sm font-medium text-blue-600 hover:text-blue-700"
                >
                    <Plus className="w-4 h-4" />
                    Add Education
                </button>
            </div>

            {data.length === 0 && (
                <p className="text-gray-500 text-sm text-center py-4">No education entries yet. Click "Add Education" to start.</p>
            )}

            {data.map((edu) => (
                <div key={edu.id} className="bg-gray-50 p-4 rounded-lg border border-gray-200 relative group">
                    <button
                        onClick={() => removeEducation(edu.id)}
                        className="absolute top-2 right-2 text-gray-400 hover:text-red-500 opacity-0 group-hover:opacity-100 transition-opacity"
                        title="Remove"
                    >
                        <Trash2 className="w-4 h-4" />
                    </button>

                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-4">
                        <div>
                            <label className="block text-xs font-medium text-gray-700">Degree/Major</label>
                            <input
                                type="text"
                                value={edu.degree}
                                onChange={(e) => updateEducation(edu.id, 'degree', e.target.value)}
                                className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-blue-500 focus:ring-blue-500 sm:text-sm p-1.5 border"
                                placeholder="Bachelor of Science in Computer Science"
                            />
                        </div>
                        <div>
                            <label className="block text-xs font-medium text-gray-700">School/University</label>
                            <input
                                type="text"
                                value={edu.school}
                                onChange={(e) => updateEducation(edu.id, 'school', e.target.value)}
                                className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-blue-500 focus:ring-blue-500 sm:text-sm p-1.5 border"
                                placeholder="University of Technology"
                            />
                        </div>
                        <div>
                            <label className="block text-xs font-medium text-gray-700">Start Date</label>
                            <input
                                type="text"
                                value={edu.startDate}
                                onChange={(e) => updateEducation(edu.id, 'startDate', e.target.value)}
                                className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-blue-500 focus:ring-blue-500 sm:text-sm p-1.5 border"
                                placeholder="MM/YYYY"
                            />
                        </div>
                        <div>
                            <label className="block text-xs font-medium text-gray-700">End Date</label>
                            <input
                                type="text"
                                value={edu.endDate}
                                onChange={(e) => updateEducation(edu.id, 'endDate', e.target.value)}
                                disabled={edu.current}
                                className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-blue-500 focus:ring-blue-500 sm:text-sm p-1.5 border disabled:bg-gray-100 disabled:text-gray-400"
                                placeholder="MM/YYYY"
                            />
                        </div>
                    </div>
                </div>
            ))}
        </div>
    );
};
