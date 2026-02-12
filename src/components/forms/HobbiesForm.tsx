import React from 'react';
import type { Hobby } from '../../types';
import { Plus, Trash2 } from 'lucide-react';

interface HobbiesFormProps {
    data: Hobby[];
    onChange: (data: Hobby[]) => void;
}

export const HobbiesForm: React.FC<HobbiesFormProps> = ({ data, onChange }) => {
    const addHobby = () => {
        const newHobby: Hobby = {
            id: crypto.randomUUID(),
            name: '',
        };
        onChange([...data, newHobby]);
    };

    const updateHobby = (id: string, name: string) => {
        onChange(data.map(item => item.id === id ? { ...item, name } : item));
    };

    const removeHobby = (id: string) => {
        onChange(data.filter(item => item.id !== id));
    };

    return (
        <div className="space-y-6">
            <div className="flex justify-between items-center border-b pb-2 mb-4">
                <h3 className="text-lg font-medium text-gray-900">Hobbies</h3>
                <button
                    onClick={addHobby}
                    className="flex items-center gap-1 text-sm font-medium text-blue-600 hover:text-blue-700"
                >
                    <Plus className="w-4 h-4" />
                    Add Hobby
                </button>
            </div>

            {data.length === 0 && (
                <p className="text-gray-500 text-sm text-center py-4">
                    No hobbies added yet.
                </p>
            )}

            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                {data.map((hobby) => (
                    <div key={hobby.id} className="flex items-center gap-2 bg-gray-50 p-2 rounded-lg border border-gray-200">
                        <div className="flex-1">
                            <input
                                type="text"
                                value={hobby.name}
                                onChange={(e) => updateHobby(hobby.id, e.target.value)}
                                className="block w-full rounded-md border-gray-300 shadow-sm focus:border-blue-500 focus:ring-blue-500 sm:text-sm p-1.5 border"
                                placeholder="Hobby (e.g. Photography)"
                            />
                        </div>
                        <button
                            onClick={() => removeHobby(hobby.id)}
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
