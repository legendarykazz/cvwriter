import React from 'react';
import { User, Briefcase, GraduationCap, Award, Languages, Heart, Trophy, LayoutTemplate } from 'lucide-react';
import clsx from 'clsx';

const navItems = [
    { id: 'personal', icon: User, label: 'Personal Info' },
    { id: 'experience', icon: Briefcase, label: 'Experience' },
    { id: 'education', icon: GraduationCap, label: 'Education' },
    { id: 'skills', icon: Award, label: 'Skills' },
    { id: 'languages', icon: Languages, label: 'Languages' },
    { id: 'hobbies', icon: Heart, label: 'Hobbies' },
    { id: 'accomplishments', icon: Trophy, label: 'Accomplishments' },
    { id: 'referees', icon: User, label: 'Referees' },
    { id: 'templates', icon: LayoutTemplate, label: 'Templates' },
];

export const Sidebar: React.FC<{ activeSection: string; onSelect: (id: string) => void }> = ({ activeSection, onSelect }) => {
    return (
        <nav className="w-64 bg-white border-r border-gray-200 h-[calc(100vh-73px)] overflow-y-auto">
            <div className="p-4 space-y-1">
                {navItems.map((item) => (
                    <button
                        key={item.id}
                        onClick={() => onSelect(item.id)}
                        className={clsx(
                            "flex items-center w-full gap-3 px-3 py-2 text-sm font-medium rounded-lg transition-colors",
                            activeSection === item.id
                                ? "text-blue-600 bg-blue-50"
                                : "text-gray-600 hover:bg-gray-50 hover:text-gray-900"
                        )}
                    >
                        <item.icon className="w-5 h-5" />
                        {item.label}
                    </button>
                ))}
            </div>
        </nav>
    );
};
