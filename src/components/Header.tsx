import React from 'react';
import { FileText, Download, FileDown, Menu } from 'lucide-react';
import { downloadPDF } from '../utils/pdfExport';
import { exportToWord } from '../utils/wordExport';
import type { CVData } from '../types';

interface HeaderProps {
    cvData: CVData;
    onMenuClick?: () => void;
}

export const Header: React.FC<HeaderProps> = ({ cvData, onMenuClick }) => {

    const handleWordExport = () => {
        console.log('Word export button clicked!', cvData);
        exportToWord(cvData);
    };

    return (
        <header className="flex items-center justify-between px-4 md:px-6 py-4 bg-white border-b border-gray-200">
            <div className="flex items-center gap-2">
                {onMenuClick && (
                    <button
                        onClick={onMenuClick}
                        className="md:hidden p-2 hover:bg-gray-100 rounded-lg transition-colors"
                        aria-label="Toggle menu"
                    >
                        <Menu className="w-6 h-6 text-gray-700" />
                    </button>
                )}
                <div className="p-2 bg-blue-600 rounded-lg">
                    <FileText className="w-5 h-5 md:w-6 md:h-6 text-white" />
                </div>
                <h1 className="text-lg md:text-xl font-bold text-gray-800">CV Writer</h1>
            </div>

            <div className="flex items-center gap-2 md:gap-3">
                <button
                    onClick={handleWordExport}
                    className="flex items-center gap-1 md:gap-2 px-3 md:px-4 py-2 text-xs md:text-sm font-medium text-white bg-green-600 rounded-lg hover:bg-green-700 transition-colors"
                >
                    <FileDown className="w-4 h-4" />
                    <span>Word</span>
                </button>
                <button
                    onClick={downloadPDF}
                    className="flex items-center gap-1 md:gap-2 px-3 md:px-4 py-2 text-xs md:text-sm font-medium text-white bg-blue-600 rounded-lg hover:bg-blue-700 transition-colors"
                >
                    <Download className="w-4 h-4" />
                    <span>PDF</span>
                </button>
            </div>
        </header>
    );
};
