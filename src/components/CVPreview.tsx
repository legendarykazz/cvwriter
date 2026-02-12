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
        <div className="flex-1 bg-gray-100 p-8 overflow-hidden flex flex-col items-center">
            <div
                id="cv-preview"
                className="w-[210mm] min-h-[297mm] bg-white shadow-2xl p-8 border-2 border-gray-300 transform origin-top scale-[0.6] sm:scale-[0.7] md:scale-[0.85] lg:scale-100 transition-transform"
            >
                {renderTemplate()}
            </div>
        </div>
    );
};
