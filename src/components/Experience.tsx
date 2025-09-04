import React from 'react';
import { Briefcase, Calendar } from 'lucide-react';
import { portfolioData } from '../data/portfolio';

const Experience: React.FC = () => {
  const { experience } = portfolioData;

  return (
    <section id="experience" className="py-20 bg-slate-800">
      <div className="container mx-auto px-6">
        <div className="max-w-4xl mx-auto">
          {/* Section Header */}
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-white mb-4">
              Experience
            </h2>
            <div className="h-1 w-24 bg-gradient-to-r from-green-400 to-emerald-500 mx-auto rounded-full mb-6"></div>
            <p className="text-gray-300 text-lg">
              My journey in innovation and technology development
            </p>
          </div>

          {/* Experience Timeline */}
          <div className="relative">
            {/* Timeline Line */}
            <div className="absolute left-1/2 transform -translate-x-px h-full w-0.5 bg-gradient-to-b from-green-400 to-emerald-500"></div>

            {experience.map((exp, index) => (
              <div
                key={index}
                className={`relative flex items-center mb-12 ${
                  index % 2 === 0 ? 'md:flex-row' : 'md:flex-row-reverse'
                } flex-col`}
                style={{ animationDelay: `${index * 200}ms` }}
              >
                {/* Timeline Dot */}
                <div className="absolute left-1/2 transform -translate-x-1/2 w-4 h-4 bg-green-400 rounded-full border-4 border-slate-900 z-10 shadow-lg shadow-green-500/50"></div>

                {/* Content Card */}
                <div className={`w-full md:w-5/12 ${index % 2 === 0 ? 'md:mr-8' : 'md:ml-8'} mt-8 md:mt-0`}>
                  <div className="group">
                    <div className="bg-slate-700/50 backdrop-blur-sm border border-slate-600 rounded-2xl p-8 hover:bg-slate-700/70 transition-all duration-300 hover:scale-105 hover:shadow-xl hover:shadow-green-500/10">
                      <div className="flex items-center mb-4">
                        <div className="p-2 bg-green-500/20 rounded-lg mr-4 group-hover:bg-green-500/30 transition-colors">
                          <Briefcase className="w-5 h-5 text-green-400" />
                        </div>
                        <div>
                          <h3 className="text-xl font-bold text-white group-hover:text-green-300 transition-colors">
                            {exp.role}
                          </h3>
                          <p className="text-green-400 font-medium">
                            {exp.organization}
                          </p>
                        </div>
                      </div>

                      <div className="flex items-center text-gray-400 mb-4">
                        <Calendar size={16} className="mr-2" />
                        <span>{exp.duration}</span>
                      </div>

                      <p className="text-gray-300 leading-relaxed">
                        {exp.description}
                      </p>
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

export default Experience;