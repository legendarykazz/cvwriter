import React from 'react';
import type { CVData } from '../types';
import { Layout, FileText, AlignLeft, Sidebar, Briefcase, Flag } from 'lucide-react';

interface TemplateSelectorProps {
    current: CVData['template'];
    onChange: (template: CVData['template']) => void;
}

export const TemplateSelector: React.FC<TemplateSelectorProps> = ({ current, onChange }) => {
    const templates: { id: CVData['template']; name: string; icon: React.ElementType; description: string }[] = [
        {
            id: 'nigerian',
            name: 'Nigerian',
            icon: Flag,
            description: 'Nigerian CV format with detailed personal data and green header.'
        },
        {
            id: 'modern',
            name: 'Modern',
            icon: Layout,
            description: 'Clean and professional with sidebar navigation.'
        },
        {
            id: 'classic',
            name: 'Classic',
            icon: FileText,
            description: 'Traditional serif layout, perfect for formal industries.'
        },
        {
            id: 'minimal',
            name: 'Minimal',
            icon: AlignLeft,
            description: 'Whitespace-heavy design that focuses on content.'
        },
        {
            id: 'sidebar',
            name: 'Sidebar',
            icon: Sidebar,
            description: 'Teal sidebar with section labels on the left.'
        },
        {
            id: 'professional',
            name: 'Professional',
            icon: Briefcase,
            description: 'Centered header with traditional dense layout.'
        },
    ];

    return (
        <div className="space-y-6">
            <div className="border-b pb-2 mb-4">
                <h3 className="text-lg font-medium text-gray-900">Choose a Template</h3>
                <p className="text-sm text-gray-500">Select a design that fits your style.</p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                {templates.map((template) => (
                    <button
                        key={template.id}
                        onClick={() => onChange(template.id)}
                        className={`text-left p-4 rounded-lg border-2 transition-all ${current === template.id
                            ? 'border-blue-600 bg-blue-50'
                            : 'border-gray-200 hover:border-blue-300 hover:bg-gray-50'
                            }`}
                    >
                        <div className="flex items-center gap-2 mb-2">
                            <div className={`p-2 rounded-lg ${current === template.id ? 'bg-blue-600 text-white' : 'bg-gray-200 text-gray-600'}`}>
                                <template.icon className="w-5 h-5" />
                            </div>
                            <span className={`font-semibold ${current === template.id ? 'text-blue-900' : 'text-gray-900'}`}>
                                {template.name}
                            </span>
                        </div>
                        <p className="text-xs text-gray-500">{template.description}</p>
                    </button>
                ))}
            </div>
        </div>
    );
};
