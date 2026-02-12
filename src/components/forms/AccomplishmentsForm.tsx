import React from 'react';
import type { Accomplishment } from '../../types';
import { Plus, X } from 'lucide-react';

interface AccomplishmentsFormProps {
    data: Accomplishment[];
    onChange: (data: Accomplishment[]) => void;
}

export const AccomplishmentsForm: React.FC<AccomplishmentsFormProps> = ({ data, onChange }) => {
    const addAccomplishment = () => {
        const newAccomplishment: Accomplishment = {
            id: crypto.randomUUID(),
            description: '',
        };
        onChange([...data, newAccomplishment]);
    };

    const updateAccomplishment = (id: string, description: string) => {
        onChange(data.map((acc) => (acc.id === id ? { ...acc, description } : acc)));
    };

    const removeAccomplishment = (id: string) => {
        onChange(data.filter((acc) => acc.id !== id));
    };

    return (
        <div className="space-y-6">
            <div className="flex justify-between items-center border-b pb-2 mb-4">
                <h3 className="text-lg font-medium text-gray-900">Accomplishments</h3>
                <button
                    onClick={addAccomplishment}
                    className="flex items-center gap-1 text-sm font-medium text-blue-600 hover:text-blue-700"
                >
                    <Plus className="w-4 h-4" />
                    Add Accomplishment
                </button>
            </div>

            {data.length === 0 ? (
                <p className="text-sm text-gray-500 text-center py-8">
                    No accomplishments added yet. Click "Add Accomplishment" to get started.
                </p>
            ) : (
                <div className="space-y-4">
                    {data.map((accomplishment) => (
                        <div key={accomplishment.id} className="border rounded-lg p-4 bg-gray-50">
                            <div className="flex justify-between items-start mb-2">
                                <label className="block text-sm font-medium text-gray-700">Description</label>
                                <button
                                    onClick={() => removeAccomplishment(accomplishment.id)}
                                    className="text-red-600 hover:text-red-800"
                                    title="Remove"
                                >
                                    <X className="w-4 h-4" />
                                </button>
                            </div>
                            <textarea
                                value={accomplishment.description}
                                onChange={(e) => updateAccomplishment(accomplishment.id, e.target.value)}
                                rows={2}
                                className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-blue-500 focus:ring-blue-500 sm:text-sm p-2 border"
                                placeholder="Describe your accomplishment..."
                            />
                        </div>
                    ))}
                </div>
            )}
        </div>
    );
};
