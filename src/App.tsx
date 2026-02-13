import { useState } from 'react';
import { Header } from './components/Header';
import { Sidebar } from './components/Sidebar';
import { CVForm } from './components/CVForm';
import { CVPreview } from './components/CVPreview';
import { initialCVData, type CVData } from './types';
import { ZoomIn, ZoomOut, Maximize, X } from 'lucide-react';

function App() {
  const [cvData, setCVData] = useState<CVData>(initialCVData);
  const [activeSection, setActiveSection] = useState('personal');
  const [zoom, setZoom] = useState(0.7);
  const [isMobileSidebarOpen, setIsMobileSidebarOpen] = useState(false);

  const handleSectionSelect = (section: string) => {
    setActiveSection(section);
    setIsMobileSidebarOpen(false); // Close sidebar on mobile after selection
  };

  return (
    <div className="min-h-screen bg-gray-100 flex flex-col">
      <Header cvData={cvData} onMenuClick={() => setIsMobileSidebarOpen(true)} />

      <div className="flex flex-col md:flex-row flex-1 overflow-hidden">
        {/* Desktop Sidebar */}
        <div className="hidden md:block">
          <Sidebar activeSection={activeSection} onSelect={setActiveSection} />
        </div>

        {/* Mobile Sidebar Drawer */}
        {isMobileSidebarOpen && (
          <div className="fixed inset-0 z-50 md:hidden">
            {/* Overlay */}
            <div
              className="absolute inset-0 bg-black bg-opacity-50"
              onClick={() => setIsMobileSidebarOpen(false)}
            />
            {/* Drawer */}
            <div className="absolute left-0 top-0 bottom-0 w-64 bg-white shadow-xl">
              <div className="flex items-center justify-between p-4 border-b">
                <h2 className="font-semibold text-gray-800">Sections</h2>
                <button
                  onClick={() => setIsMobileSidebarOpen(false)}
                  className="p-1 hover:bg-gray-100 rounded"
                >
                  <X className="w-5 h-5" />
                </button>
              </div>
              <Sidebar activeSection={activeSection} onSelect={handleSectionSelect} />
            </div>
          </div>
        )}

        <div className="flex flex-col lg:flex-row flex-1 overflow-hidden">
          {/* Form Section */}
          <div className="w-full lg:w-2/5 h-auto lg:h-full overflow-y-auto border-b lg:border-b-0 lg:border-r border-gray-200 order-2 lg:order-1">
            <CVForm activeSection={activeSection} data={cvData} onChange={setCVData} />
          </div>

          {/* Preview Section */}
          <div className="w-full lg:w-3/5 h-[50vh] lg:h-full bg-gray-200 overflow-y-auto flex flex-col p-2 sm:p-4 lg:p-8 order-1 lg:order-2 border-t-4 lg:border-t-0 lg:border-l-4 border-gray-300 relative">

            {/* Zoom Controls */}
            <div className="absolute top-2 right-2 sm:top-4 sm:right-4 flex gap-1 sm:gap-2 bg-white p-1 rounded-lg shadow-md border border-gray-200 z-10">
              <button onClick={() => setZoom(Math.max(0.3, zoom - 0.1))} className="p-1 hover:bg-gray-100 rounded" title="Zoom Out">
                <ZoomOut className="w-3 h-3 sm:w-4 sm:h-4 text-gray-600" />
              </button>
              <span className="text-xs flex items-center min-w-[3ch] justify-center">{Math.round(zoom * 100)}%</span>
              <button onClick={() => setZoom(Math.min(1.5, zoom + 0.1))} className="p-1 hover:bg-gray-100 rounded" title="Zoom In">
                <ZoomIn className="w-3 h-3 sm:w-4 sm:h-4 text-gray-600" />
              </button>
              <button onClick={() => setZoom(1.0)} className="p-1 hover:bg-gray-100 rounded" title="Fit to Screen">
                <Maximize className="w-3 h-3 sm:w-4 sm:h-4 text-gray-600" />
              </button>
            </div>

            <div
              className="w-full transform origin-top transition-transform duration-200 ease-in-out"
              style={{ transform: `scale(${zoom})` }}
            >
              <CVPreview data={cvData} />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
