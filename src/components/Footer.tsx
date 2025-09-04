import React from 'react';
import { Heart, Code } from 'lucide-react';
import { portfolioData } from '../data/portfolio';

const Footer: React.FC = () => {
  const { personal_info } = portfolioData;
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-slate-950 border-t border-slate-800 py-12">
      <div className="container mx-auto px-6">
        <div className="max-w-4xl mx-auto">
          {/* Footer Content */}
          <div className="text-center">
            <div className="mb-6">
              <h3 className="text-2xl font-bold text-white mb-2">
                {personal_info.name}
              </h3>
              <p className="text-cyan-400 font-medium">
                {personal_info.title}
              </p>
            </div>

            {/* Footer Links */}
            <div className="flex justify-center space-x-8 mb-8">
              <button
                onClick={() => document.getElementById('home')?.scrollIntoView({ behavior: 'smooth' })}
                className="text-gray-400 hover:text-green-400 transition-all duration-300 hover:scale-105"
              >
                Home
              </button>
              <button
                onClick={() => document.getElementById('projects')?.scrollIntoView({ behavior: 'smooth' })}
                className="text-gray-400 hover:text-green-400 transition-all duration-300 hover:scale-105"
              >
                Projects
              </button>
              <button
                onClick={() => document.getElementById('experience')?.scrollIntoView({ behavior: 'smooth' })}
                className="text-gray-400 hover:text-green-400 transition-all duration-300 hover:scale-105"
              >
                Experience
              </button>
              <button
                onClick={() => document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' })}
                className="text-gray-400 hover:text-green-400 transition-all duration-300 hover:scale-105"
              >
                Contact
              </button>
            </div>

            {/* Copyright */}
            <div className="pt-8 border-t border-slate-800">
              <div className="flex items-center justify-center space-x-2 text-gray-400 text-sm">
                <span>© {currentYear}</span>
                <span>{personal_info.name}</span>
                <span>•</span>
                <span>Built with</span>
                <Heart className="w-4 h-4 text-red-400" fill="currentColor" />
                <span>and</span>
                <Code className="w-4 h-4 text-cyan-400" />
                <Code className="w-4 h-4 text-green-400" />
              </div>
              <p className="text-gray-500 text-xs mt-2">
                Designed for innovation and engineered with passion
              </p>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;