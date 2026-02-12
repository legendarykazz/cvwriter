import React from 'react';
import type { Skill } from '../../types';
import { Plus, Trash2 } from 'lucide-react';

interface SkillsFormProps {
    data: Skill[];
    onChange: (data: Skill[]) => void;
}

export const SkillsForm: React.FC<SkillsFormProps> = ({ data, onChange }) => {
    const addSkill = () => {
        const newSkill: Skill = {
            id: crypto.randomUUID(),
            name: '',
            level: 3,
        };
        onChange([...data, newSkill]);
    };

    const updateSkill = (id: string, field: keyof Skill, value: any) => {
        onChange(data.map(item => item.id === id ? { ...item, [field]: value } : item));
    };

    const removeSkill = (id: string) => {
        onChange(data.filter(item => item.id !== id));
    };

    return (
        <div className="space-y-6">
            <div className="flex justify-between items-center border-b pb-2 mb-4">
                <h3 className="text-lg font-medium text-gray-900">Skills</h3>
                <button
                    onClick={addSkill}
                    className="flex items-center gap-1 text-sm font-medium text-blue-600 hover:text-blue-700"
                >
                    <Plus className="w-4 h-4" />
                    Add Skill
                </button>
            </div>

            {data.length === 0 && (
                <p className="text-gray-500 text-sm text-center py-4">No skills added yet. Click "Add Skill" to start.</p>
            )}

            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                {data.map((skill) => (
                    <div key={skill.id} className="flex items-center gap-2 bg-gray-50 p-2 rounded-lg border border-gray-200">
                        <div className="flex-1">
                            <input
                                type="text"
                                value={skill.name}
                                onChange={(e) => updateSkill(skill.id, 'name', e.target.value)}
                                className="block w-full rounded-md border-gray-300 shadow-sm focus:border-blue-500 focus:ring-blue-500 sm:text-sm p-1.5 border"
                                placeholder="Skill Name (e.g. React)"
                            />
                        </div>
                        <div className="w-24">
                            {/* 1-5 Level Selector */}
                            <select
                                value={skill.level}
                                onChange={(e) => updateSkill(skill.id, 'level', parseInt(e.target.value))}
                                className="block w-full rounded-md border-gray-300 shadow-sm focus:border-blue-500 focus:ring-blue-500 sm:text-sm p-1.5 border"
                            >
                                <option value={1}>Novice</option>
                                <option value={2}>Beginner</option>
                                <option value={3}>Skillful</option>
                                <option value={4}>Experienced</option>
                                <option value={5}>Expert</option>
                            </select>
                        </div>
                        <button
                            onClick={() => removeSkill(skill.id)}
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
