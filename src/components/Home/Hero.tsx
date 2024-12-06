// import { Code, Database, Layout, Server, Terminal, Workflow } from 'lucide-react';
import { Brain, Brush, FolderKanban, Layout, LineChart, Palette } from 'lucide-react';

import React from 'react';

const Hero: React.FC = () => {
  return (
    <div className="relative min-h-screen pt-20 flex flex-col items-center justify-center overflow-hidden">
      <div className="container mx-auto px-4 flex flex-col lg:flex-row items-center justify-between">
        {/* Text Content */}
        <div className="w-full lg:w-1/2 text-center lg:text-left z-10 space-y-8">
          <h1 className="font-handwriting text-5xl sm:text-5xl md:text-5xl text-gray-800">
            Laura Wu
          </h1>
          <p className="font-montserrat text-xl sm:text-2xl text-gray-600">
            Full Stack Developer & Software Engineer
          </p>
          <div className="grid grid-cols-2 sm:grid-cols-3 gap-6 max-w-lg mx-auto lg:mx-0">
            {[
              // { icon: Code, label: 'Frontend' },
              // { icon: Server, label: 'Backend' },
              // { icon: Layout, label: 'UI/UX' },
              // { icon: Database, label: 'Database' },
              // { icon: Terminal, label: 'DevOps' },
              // { icon: Workflow, label: 'Architecture' },
              { icon: Layout, label: 'Frontend' },
              { icon: Palette, label: 'UI/UX' },
              { icon: Brain, label: 'AI' },
              { icon: Brush, label: 'Styling' },
              { icon: LineChart, label: 'Analysis' },
              { icon: FolderKanban, label: 'Projects' },
            ].map(({ icon: Icon, label }) => (
              <div key={label} className="flex flex-col items-center gap-2 p-3 rounded-lg hover:bg-white/50 transition-colors duration-200">
                <Icon className="w-6 h-6 text-gray-700" />
                <span className="text-sm font-medium text-gray-600">{label}</span>
              </div>
            ))}
          </div>
        </div>

        {/* Image Container */}
        <div className="w-full lg:w-1/2 mt-12 lg:mt-0 relative">
          <div className="absolute inset-0 z-10" />
          <img 
            src="/src/images/background/about_me_image3.png"
            alt="Profile Picture"
            className="relative w-full h-[500px] object-cover object-right rounded-lg"
          />
        </div>
      </div>
    </div>
  );
};

export default Hero;