import { useState } from 'react';
import { Header } from './components/Header';
import { Sidebar } from './components/Sidebar';
import { CVForm } from './components/CVForm';
import { CVPreview } from './components/CVPreview';
import { initialCVData, type CVData } from './types';
import { ZoomIn, ZoomOut, Maximize } from 'lucide-react';

function App() {
  const [cvData, setCVData] = useState<CVData>(initialCVData);
  const [activeSection, setActiveSection] = useState('personal');
  const [zoom, setZoom] = useState(0.8);

  return (
    <div className="min-h-screen bg-gray-100 flex flex-col">
      <Header />
      <div className="flex flex-col md:flex-row flex-1 overflow-hidden">
        <div className="hidden md:block">
          <Sidebar activeSection={activeSection} onSelect={setActiveSection} />
        </div>

        {/* Mobile Navigation (Basic) - visible only on small screens */}
        <div className="md:hidden p-2 bg-white border-b overflow-x-auto flex gap-2">
          {['personal', 'experience', 'education', 'skills', 'languages'].map(section => (
            <button
              key={section}
              onClick={() => setActiveSection(section)}
              className={`px-3 py-1 text-sm whitespace-nowrap rounded-full border ${activeSection === section ? 'bg-blue-600 text-white' : 'bg-gray-100'}`}
            >
              {section.charAt(0).toUpperCase() + section.slice(1)}
            </button>
          ))}
        </div>

        <div className="flex flex-col lg:flex-row flex-1 overflow-hidden">
          <div className="w-full lg:w-1/2 h-1/2 lg:h-full overflow-y-auto border-b lg:border-b-0 lg:border-r border-gray-200 order-2 lg:order-1">
            <CVForm activeSection={activeSection} data={cvData} onChange={setCVData} />
          </div>
          <div className="w-full lg:w-1/2 h-1/2 lg:h-full bg-gray-200 overflow-y-auto flex flex-col items-center p-4 lg:p-8 order-1 lg:order-2 border-t-4 lg:border-t-0 lg:border-l-4 border-gray-300 relative">

            {/* Zoom Controls */}
            <div className="absolute top-4 right-4 flex gap-2 bg-white p-1 rounded-lg shadow-md border border-gray-200 z-10">
              <button onClick={() => setZoom(Math.max(0.3, zoom - 0.1))} className="p-1 hover:bg-gray-100 rounded" title="Zoom Out">
                <ZoomOut className="w-4 h-4 text-gray-600" />
              </button>
              <span className="text-xs flex items-center min-w-[3ch] justify-center">{Math.round(zoom * 100)}%</span>
              <button onClick={() => setZoom(Math.min(1.5, zoom + 0.1))} className="p-1 hover:bg-gray-100 rounded" title="Zoom In">
                <ZoomIn className="w-4 h-4 text-gray-600" />
              </button>
              <button onClick={() => setZoom(0.6)} className="p-1 hover:bg-gray-100 rounded" title="Fit to Screen">
                <Maximize className="w-4 h-4 text-gray-600" />
              </button>
            </div>

            <div
              className="transform origin-top transition-transform duration-200 ease-in-out"
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
