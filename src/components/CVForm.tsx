import React from 'react';
import type { CVData } from '../types';
import { PersonalInfoForm } from './forms/PersonalInfoForm';
import { ExperienceForm } from './forms/ExperienceForm';
import { EducationForm } from './forms/EducationForm';
import { SkillsForm } from './forms/SkillsForm';
import { LanguagesForm } from './forms/LanguagesForm';
import { HobbiesForm } from './forms/HobbiesForm';
import { RefereesForm } from './forms/RefereesForm';
import { AccomplishmentsForm } from './forms/AccomplishmentsForm';
import { TemplateSelector } from './TemplateSelector';

interface CVFormProps {
    activeSection: string;
    data: CVData;
    onChange: (data: CVData) => void;
}

export const CVForm: React.FC<CVFormProps> = ({ activeSection, data, onChange }) => {
    const renderForm = () => {
        switch (activeSection) {
            case 'personal':
                return (
                    <PersonalInfoForm
                        data={data.personalInfo}
                        onChange={(newData) => onChange({ ...data, personalInfo: newData })}
                    />
                );
            case 'experience':
                return (
                    <ExperienceForm
                        data={data.experience}
                        onChange={(newData) => onChange({ ...data, experience: newData })}
                    />
                );
            case 'education':
                return (
                    <EducationForm
                        data={data.education}
                        onChange={(newData) => onChange({ ...data, education: newData })}
                    />
                );
            case 'skills':
                return (
                    <SkillsForm
                        data={data.skills}
                        onChange={(newData) => onChange({ ...data, skills: newData })}
                    />
                );
            case 'languages':
                return (
                    <LanguagesForm
                        data={data.languages}
                        onChange={(newData) => onChange({ ...data, languages: newData })}
                    />
                );
            case 'hobbies':
                return (
                    <HobbiesForm
                        data={data.hobbies || []}
                        onChange={(newData) => onChange({ ...data, hobbies: newData })}
                    />
                );
            case 'referees':
                return (
                    <RefereesForm
                        data={data.referees || []} // Handle potential undefined for existing data
                        onChange={(newData) => onChange({ ...data, referees: newData })}
                    />
                );
            case 'accomplishments':
                return (
                    <AccomplishmentsForm
                        data={data.accomplishments || []}
                        onChange={(newData) => onChange({ ...data, accomplishments: newData })}
                    />
                );
            case 'templates':
                return (
                    <TemplateSelector
                        current={data.template}
                        onChange={(newTemplate) => onChange({ ...data, template: newTemplate })}
                    />
                );
            default:
                return <div>Select a section to edit</div>;
        }
    };

    return (
        <div className="flex-1 p-8 overflow-y-auto bg-gray-50 min-h-full">
            <div className="max-w-3xl mx-auto">
                <h2 className="text-2xl font-bold text-gray-800 mb-6 capitalize">
                    {activeSection.replace('-', ' ')}
                </h2>
                <div className="p-6 bg-white rounded-xl shadow-sm border border-gray-200">
                    {renderForm()}
                </div>
            </div>
        </div>
    );
};
