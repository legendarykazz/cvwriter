import React from 'react';
import { FileText, Download, Share2 } from 'lucide-react';
import { downloadPDF } from '../utils/pdfExport';

export const Header: React.FC = () => {

    return (
        <header className="flex items-center justify-between px-6 py-4 bg-white border-b border-gray-200">
            <div className="flex items-center gap-2">
                <div className="p-2 bg-blue-600 rounded-lg">
                    <FileText className="w-6 h-6 text-white" />
                </div>
                <h1 className="text-xl font-bold text-gray-800">CV Writer</h1>
            </div>

            <div className="flex items-center gap-3">
                <button className="flex items-center gap-2 px-4 py-2 text-sm font-medium text-gray-700 bg-white border border-gray-300 rounded-lg hover:bg-gray-50 transition-colors">
                    <Share2 className="w-4 h-4" />
                    Share
                </button>
                <button
                    onClick={downloadPDF}
                    className="flex items-center gap-2 px-4 py-2 text-sm font-medium text-white bg-blue-600 rounded-lg hover:bg-blue-700 transition-colors"
                >
                    <Download className="w-4 h-4" />
                    Download PDF
                </button>
            </div>
        </header>
    );
};
