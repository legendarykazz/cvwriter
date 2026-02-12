import React from 'react';
import type { Language } from '../../types';
import { Plus, Trash2 } from 'lucide-react';

interface LanguagesFormProps {
    data: Language[];
    onChange: (data: Language[]) => void;
}

export const LanguagesForm: React.FC<LanguagesFormProps> = ({ data, onChange }) => {
    const addLanguage = () => {
        const newLanguage: Language = {
            id: crypto.randomUUID(),
            name: '',
            proficiency: 'Fluent',
        };
        onChange([...data, newLanguage]);
    };

    const updateLanguage = (id: string, field: keyof Language, value: any) => {
        onChange(data.map(item => item.id === id ? { ...item, [field]: value } : item));
    };

    const removeLanguage = (id: string) => {
        onChange(data.filter(item => item.id !== id));
    };

    return (
        <div className="space-y-6">
            <div className="flex justify-between items-center border-b pb-2 mb-4">
                <h3 className="text-lg font-medium text-gray-900">Languages</h3>
                <button
                    onClick={addLanguage}
                    className="flex items-center gap-1 text-sm font-medium text-blue-600 hover:text-blue-700"
                >
                    <Plus className="w-4 h-4" />
                    Add Language
                </button>
            </div>

            {data.length === 0 && (
                <p className="text-gray-500 text-sm text-center py-4">No languages added yet. Click "Add Language" to start.</p>
            )}

            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                {data.map((lang) => (
                    <div key={lang.id} className="flex items-center gap-2 bg-gray-50 p-2 rounded-lg border border-gray-200">
                        <div className="flex-1">
                            <input
                                type="text"
                                value={lang.name}
                                onChange={(e) => updateLanguage(lang.id, 'name', e.target.value)}
                                className="block w-full rounded-md border-gray-300 shadow-sm focus:border-blue-500 focus:ring-blue-500 sm:text-sm p-1.5 border"
                                placeholder="Language (e.g. English)"
                            />
                        </div>
                        <div className="w-32">
                            <select
                                value={lang.proficiency}
                                onChange={(e) => updateLanguage(lang.id, 'proficiency', e.target.value)}
                                className="block w-full rounded-md border-gray-300 shadow-sm focus:border-blue-500 focus:ring-blue-500 sm:text-sm p-1.5 border"
                            >
                                <option value="Native">Native</option>
                                <option value="Fluent">Fluent</option>
                                <option value="Proficient">Proficient</option>
                                <option value="Intermediate">Intermediate</option>
                                <option value="Basic">Basic</option>
                            </select>
                        </div>
                        <button
                            onClick={() => removeLanguage(lang.id)}
                            className="text-gray-400 hover:text-red-500 transition-colors"
                            title="Remove"
                        >
                            <Trash2 className="w-4 h-4" />
                        </button>
                    </div>
                ))}
            </div>
        </div>
    );
};
