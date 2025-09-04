import React from 'react';
import { ExternalLink, Code, Wrench } from 'lucide-react';
import { portfolioData } from '../data/portfolio';

const Projects: React.FC = () => {
  const { projects } = portfolioData;

  return (
    <section id="projects" className="py-20 bg-slate-900">
      <div className="container mx-auto px-6">
        <div className="max-w-6xl mx-auto">
          {/* Section Header */}
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-white mb-4">
              Featured Projects
            </h2>
            <div className="h-1 w-24 bg-gradient-to-r from-green-400 to-emerald-500 mx-auto rounded-full mb-6"></div>
            <p className="text-gray-300 text-lg max-w-2xl mx-auto">
              Showcasing innovative solutions in embedded systems, IoT, and rapid prototyping
            </p>
          </div>

          {/* Projects Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {projects.map((project, index) => (
              <div
                key={index}
                className="group"
                style={{ animationDelay: `${index * 150}ms` }}
              >
                <div className="bg-slate-800/50 backdrop-blur-sm border border-slate-700 rounded-2xl overflow-hidden hover:bg-slate-800/70 hover:border-green-400/30 transition-all duration-300 hover:scale-105 hover:shadow-xl hover:shadow-green-500/10">
                  <div className="p-6 border-b border-slate-600">
                    <div className="flex items-start justify-between mb-4">
                      <div className="p-3 bg-green-500/20 rounded-xl group-hover:bg-green-500/30 transition-colors">
                        <Code className="w-6 h-6 text-green-400" />
                      </div>
                      <a
                        href={project.link}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="p-2 text-gray-400 hover:text-green-400 hover:bg-slate-600 rounded-lg transition-all duration-300 hover:scale-110"
                      >
                        <ExternalLink size={20} />
                      </a>
                    </div>
                    <h3 className="text-xl font-bold text-white mb-3 group-hover:text-green-300 transition-colors">
                      {project.title}
                    </h3>
                    <p className="text-gray-300 leading-relaxed">
                      {project.description}
                    </p>
                  </div>

                  {/* Tools Used */}
                  <div className="p-6">
                    <div className="flex items-center mb-3">
                      <Wrench className="w-4 h-4 text-green-400 mr-2" />
                      <span className="text-sm font-medium text-gray-400 uppercase tracking-wide">
                        Technologies
                      </span>
                    </div>
                    <div className="flex flex-wrap gap-2">
                      {project.tools.map((tool, toolIndex) => (
                        <span
                          key={toolIndex}
                          className="px-3 py-1 bg-green-500/20 text-green-300 rounded-full text-sm font-medium hover:bg-green-500/30 transition-all duration-300 hover:scale-105 cursor-default"
                        >
                          {tool}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Projects;