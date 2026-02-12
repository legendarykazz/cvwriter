import React from 'react';
import type { Referee } from '../../types';
import { Plus, Trash2 } from 'lucide-react';

interface RefereesFormProps {
    data: Referee[];
    onChange: (data: Referee[]) => void;
}

export const RefereesForm: React.FC<RefereesFormProps> = ({ data, onChange }) => {
    const addReferee = () => {
        const newReferee: Referee = {
            id: crypto.randomUUID(),
            fullName: '',
            position: '',
            phone: '',
            email: '',
        };
        onChange([...data, newReferee]);
    };

    const updateReferee = (id: string, field: keyof Referee, value: any) => {
        onChange(data.map(item => item.id === id ? { ...item, [field]: value } : item));
    };

    const removeReferee = (id: string) => {
        onChange(data.filter(item => item.id !== id));
    };

    return (
        <div className="space-y-6">
            <div className="flex justify-between items-center border-b pb-2 mb-4">
                <h3 className="text-lg font-medium text-gray-900">Referees</h3>
                <button
                    onClick={addReferee}
                    className="flex items-center gap-1 text-sm font-medium text-blue-600 hover:text-blue-700"
                >
                    <Plus className="w-4 h-4" />
                    Add Referee
                </button>
            </div>

            {data.length === 0 && (
                <p className="text-gray-500 text-sm text-center py-4">
                    No referees yet. Click "Add Referee" to include references.
                </p>
            )}

            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                {data.map((referee) => (
                    <div key={referee.id} className="bg-gray-50 p-4 rounded-lg border border-gray-200 relative group">
                        <button
                            onClick={() => removeReferee(referee.id)}
                            className="absolute top-2 right-2 text-gray-400 hover:text-red-500 opacity-0 group-hover:opacity-100 transition-opacity"
                            title="Remove"
                        >
                            <Trash2 className="w-4 h-4" />
                        </button>

                        <div className="space-y-3">
                            <div>
                                <label className="block text-xs font-medium text-gray-700">Full Name</label>
                                <input
                                    type="text"
                                    value={referee.fullName}
                                    onChange={(e) => updateReferee(referee.id, 'fullName', e.target.value)}
                                    className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-blue-500 focus:ring-blue-500 sm:text-sm p-1.5 border"
                                    placeholder="Dr. Jane Smith"
                                />
                            </div>
                            <div>
                                <label className="block text-xs font-medium text-gray-700">Position / Job Title</label>
                                <input
                                    type="text"
                                    value={referee.position}
                                    onChange={(e) => updateReferee(referee.id, 'position', e.target.value)}
                                    className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-blue-500 focus:ring-blue-500 sm:text-sm p-1.5 border"
                                    placeholder="Senior Manager"
                                />
                            </div>
                            <div>
                                <label className="block text-xs font-medium text-gray-700">Phone Number</label>
                                <input
                                    type="tel"
                                    value={referee.phone}
                                    onChange={(e) => updateReferee(referee.id, 'phone', e.target.value)}
                                    className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-blue-500 focus:ring-blue-500 sm:text-sm p-1.5 border"
                                    placeholder="+1 234 567 890"
                                />
                            </div>
                            <div>
                                <label className="block text-xs font-medium text-gray-700">Email (Optional)</label>
                                <input
                                    type="email"
                                    value={referee.email || ''}
                                    onChange={(e) => updateReferee(referee.id, 'email', e.target.value)}
                                    className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-blue-500 focus:ring-blue-500 sm:text-sm p-1.5 border"
                                    placeholder="jane.smith@example.com"
                                />
                            </div>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
};
