import React from 'react';
import { User, Target } from 'lucide-react';
import { portfolioData } from '../data/portfolio';

const About: React.FC = () => {
  const { personal_info, future_goals } = portfolioData;

  return (
    <section id="about" className="py-20 bg-slate-800">
      <div className="container mx-auto px-6">
        <div className="max-w-4xl mx-auto">
          {/* Section Header */}
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-white mb-4">
              About Me
            </h2>
            <div className="h-1 w-24 bg-gradient-to-r from-green-400 to-emerald-500 mx-auto rounded-full"></div>
          </div>

          <div className="grid md:grid-cols-2 gap-12 items-center">
            {/* Bio Card */}
            <div className="group">
              <div className="bg-slate-700/50 backdrop-blur-sm border border-slate-600 rounded-2xl p-8 hover:bg-slate-700/70 hover:border-green-400/30 transition-all duration-300 hover:scale-105 hover:shadow-xl hover:shadow-green-500/20">
                <div className="flex items-center mb-6">
                  <div className="p-3 bg-green-500/20 rounded-full mr-4 group-hover:bg-green-500/30 transition-colors">
                    <User className="w-6 h-6 text-green-400" />
                  </div>
                  <h3 className="text-2xl font-bold text-white">Who I Am</h3>
                </div>
                <p className="text-gray-300 leading-relaxed text-lg">
                  {personal_info.bio}
                </p>
              </div>
            </div>

            {/* Future Goals Card */}
            <div className="group">
              <div className="bg-slate-700/50 backdrop-blur-sm border border-slate-600 rounded-2xl p-8 hover:bg-slate-700/70 hover:border-green-400/30 transition-all duration-300 hover:scale-105 hover:shadow-xl hover:shadow-green-500/20">
                <div className="flex items-center mb-6">
                  <div className="p-3 bg-green-500/20 rounded-full mr-4 group-hover:bg-green-500/30 transition-colors">
                    <Target className="w-6 h-6 text-green-400" />
                  </div>
                  <h3 className="text-2xl font-bold text-white">My Vision</h3>
                </div>
                <p className="text-gray-300 leading-relaxed text-lg">
                  {future_goals}
                </p>
              </div>
            </div>
          </div>

          {/* Stats */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 mt-16">
            <div className="text-center group cursor-default">
              <div className="text-3xl md:text-4xl font-bold text-green-400 mb-2 group-hover:scale-110 transition-transform duration-300">
                2+
              </div>
              <div className="text-gray-400 text-sm uppercase tracking-wide">
                Years Experience
              </div>
            </div>
            <div className="text-center group cursor-default">
              <div className="text-3xl md:text-4xl font-bold text-green-400 mb-2 group-hover:scale-110 transition-transform duration-300">
                3+
              </div>
              <div className="text-gray-400 text-sm uppercase tracking-wide">
                Projects Completed
              </div>
            </div>
            <div className="text-center group cursor-default">
              <div className="text-3xl md:text-4xl font-bold text-green-400 mb-2 group-hover:scale-110 transition-transform duration-300">
                7+
              </div>
              <div className="text-gray-400 text-sm uppercase tracking-wide">
                Technical Skills
              </div>
            </div>
            <div className="text-center group cursor-default">
              <div className="text-3xl md:text-4xl font-bold text-green-400 mb-2 group-hover:scale-110 transition-transform duration-300">
                3+
              </div>
              <div className="text-gray-400 text-sm uppercase tracking-wide">
                Achievements
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;