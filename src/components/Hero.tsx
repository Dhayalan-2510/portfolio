import React from 'react';
import { ChevronDown, Github, Linkedin, Mail } from 'lucide-react';
import { portfolioData } from '../data/portfolio';
import AnimatedBackground from './AnimatedBackground';

const Hero: React.FC = () => {
  const { personal_info, links } = portfolioData;

  const scrollToAbout = () => {
    const aboutSection = document.getElementById('about');
    if (aboutSection) {
      aboutSection.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section id="home" className="min-h-screen flex items-center justify-center relative overflow-hidden pt-20">
      {/* Animated Background */}
      <AnimatedBackground />
      
      {/* Additional Background Effects */}
      <div className="absolute inset-0 z-2">
        <div className="absolute inset-0 opacity-30">
          <div className="absolute top-32 left-10 w-96 h-96 bg-green-500 rounded-full mix-blend-multiply filter blur-3xl animate-pulse wave-animation"></div>
          <div className="absolute top-52 right-10 w-80 h-80 bg-emerald-400 rounded-full mix-blend-multiply filter blur-3xl animate-pulse delay-1000 float-animation"></div>
          <div className="absolute bottom-8 left-20 w-72 h-72 bg-lime-500 rounded-full mix-blend-multiply filter blur-3xl animate-pulse delay-2000 rotate-slow"></div>
        </div>
      </div>

      <div className="container mx-auto px-6 text-center relative z-10 mt-16">
        <div className="max-w-5xl mx-auto">
          {/* Profile Image */}
          <div className="mb-12 animate-fade-in">
            <div className="relative inline-block">
              <div className="w-56 h-56 mx-auto mb-8 relative group">
                <div className="absolute inset-0 bg-gradient-to-r from-green-400 via-emerald-500 to-green-600 rounded-full animate-pulse glow-effect"></div>
                <img
                  src="/src/assets/profile.jpg"
                  alt="Dhayalan Rajkumar"
                  className="relative w-full h-full object-cover rounded-full border-4 border-green-400/50 shadow-2xl shadow-green-500/25 group-hover:scale-105 transition-all duration-300"
                />
                <div className="absolute inset-0 rounded-full bg-gradient-to-t from-green-500/20 to-transparent group-hover:from-green-500/30 transition-all duration-300"></div>
              </div>
            </div>
          </div>

          {/* Main Content */}
          <div className="mb-8 animate-fade-in delay-300">
            <h1 className="text-5xl md:text-7xl font-bold text-white mb-4 leading-tight">
              {personal_info.name}
            </h1>
            <div className="h-1 w-32 bg-gradient-to-r from-green-400 to-emerald-500 mx-auto mb-6 rounded-full glow-effect"></div>
            <p className="text-xl md:text-2xl text-green-400 mb-4 font-light">
              {personal_info.title}
            </p>
            <p className="text-lg text-gray-300 mb-8 italic">
              "{personal_info.tagline}"
            </p>
          </div>

          {/* Bio */}
          <div className="max-w-3xl mx-auto mb-12 animate-fade-in delay-500">
            <div className="bg-slate-800/30 backdrop-blur-lg border border-green-400/20 rounded-2xl p-8 hover:bg-slate-800/50 hover:border-green-400/40 transition-all duration-300 hover:scale-102 hover:shadow-xl hover:shadow-green-500/20">
              <p className="text-lg text-gray-300 leading-relaxed">
                {personal_info.bio}
              </p>
            </div>
          </div>

          {/* Social Links */}
          <div className="flex justify-center space-x-6 mb-12 animate-fade-in delay-700">
            <a
              href={links.linkedin}
              target="_blank"
              rel="noopener noreferrer"
              className="p-4 bg-slate-800/50 backdrop-blur-lg rounded-full text-gray-300 hover:text-green-400 hover:bg-slate-700/70 transition-all duration-300 hover:scale-110 hover:shadow-lg hover:shadow-green-500/25 border border-slate-600 hover:border-green-400/30"
            >
              <Linkedin size={28} />
            </a>
            <a
              href={links.github}
              target="_blank"
              rel="noopener noreferrer"
              className="p-4 bg-slate-800/50 backdrop-blur-lg rounded-full text-gray-300 hover:text-green-400 hover:bg-slate-700/70 transition-all duration-300 hover:scale-110 hover:shadow-lg hover:shadow-green-500/25 border border-slate-600 hover:border-green-400/30"
            >
              <Github size={28} />
            </a>
            <a
              href={`mailto:${links.email}`}
              className="p-4 bg-slate-800/50 backdrop-blur-lg rounded-full text-gray-300 hover:text-green-400 hover:bg-slate-700/70 transition-all duration-300 hover:scale-110 hover:shadow-lg hover:shadow-green-500/25 border border-slate-600 hover:border-green-400/30"
            >
              <Mail size={28} />
            </a>
          </div>

          {/* CTA Button */}
          <div className="mb-12 animate-fade-in delay-700">
            <button
              onClick={() => document.getElementById('projects')?.scrollIntoView({ behavior: 'smooth' })}
              className="inline-flex items-center space-x-3 px-8 py-4 bg-gradient-to-r from-green-500 to-emerald-600 text-white font-semibold rounded-xl hover:from-green-600 hover:to-emerald-700 transition-all duration-300 hover:scale-105 hover:shadow-xl hover:shadow-green-500/30 border border-green-400/20"
            >
              <span>View My Work</span>
              <ChevronDown size={20} />
            </button>
          </div>

          {/* Scroll Indicator */}
          <button
            onClick={scrollToAbout}
            className="animate-bounce text-gray-400 hover:text-green-400 transition-colors animate-fade-in delay-700 hover:scale-110 duration-300"
          >
            <ChevronDown size={32} />
          </button>
        </div>
      </div>
    </section>
  );
};

export default Hero;