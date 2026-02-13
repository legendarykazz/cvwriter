import React from 'react';
import type { CVData } from '../types';
import { Modern } from './templates/Modern';
import { Classic } from './templates/Classic';
import { Minimal } from './templates/Minimal';
import { SidebarTemplate } from './templates/SidebarTemplate';
import { ProfessionalTemplate } from './templates/ProfessionalTemplate';
import { NigerianTemplate } from './templates/NigerianTemplate';

interface CVPreviewProps {
    data: CVData;
}

export const CVPreview: React.FC<CVPreviewProps> = ({ data }) => {
    // Select the template component based on data.template
    const renderTemplate = () => {
        switch (data.template) {
            case 'modern':
                return <Modern data={data} />;
            case 'classic':
                return <Classic data={data} />;
            case 'minimal':
                return <Minimal data={data} />;
            case 'sidebar':
                return <SidebarTemplate data={data} />;
            case 'professional':
                return <ProfessionalTemplate data={data} />;
            case 'nigerian':
                return <NigerianTemplate data={data} />;
            default:
                return <Modern data={data} />;
        }
    };

    return (
        <div className="flex-1 bg-gray-100 p-2 sm:p-4 md:p-8 overflow-auto flex flex-col">
            <div
                id="cv-preview"
                className="w-full min-h-[297mm] bg-white shadow-lg sm:shadow-2xl p-4 sm:p-6 md:p-8 border border-gray-200 sm:border-2 sm:border-gray-300"
            >
                {renderTemplate()}
            </div>
        </div>
    );
};
