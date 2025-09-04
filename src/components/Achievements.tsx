import React from 'react';
import { Award, Star } from 'lucide-react';
import { portfolioData } from '../data/portfolio';

const Achievements: React.FC = () => {
  const { achievements } = portfolioData;

  return (
    <section id="achievements" className="py-20 bg-slate-800">
      <div className="container mx-auto px-6">
        <div className="max-w-4xl mx-auto">
          {/* Section Header */}
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-white mb-4">
              Achievements
            </h2>
            <div className="h-1 w-24 bg-gradient-to-r from-green-400 to-emerald-500 mx-auto rounded-full mb-6"></div>
            <p className="text-gray-300 text-lg">
              Milestones in my engineering and innovation journey
            </p>
          </div>

          {/* Achievements Grid */}
          <div className="space-y-6">
            {achievements.map((achievement, index) => (
              <div
                key={index}
                className="group"
              >
                <div className="bg-slate-700/50 backdrop-blur-sm border border-slate-600 rounded-2xl p-8 hover:bg-slate-700/70 hover:border-green-400/30 transition-all duration-300 hover:scale-102 hover:shadow-xl hover:shadow-green-500/20">
                  <div className="flex items-start space-x-6">
                    {/* Achievement Icon */}
                    <div className="flex-shrink-0 p-4 bg-gradient-to-br from-green-500/20 to-emerald-500/20 rounded-2xl group-hover:from-green-500/30 group-hover:to-emerald-500/30 transition-all duration-300">
                      <Award className="w-8 h-8 text-green-400" />
                    </div>

                    {/* Achievement Content */}
                    <div className="flex-grow">
                      <div className="flex items-center space-x-2 mb-3">
                        <Star className="w-5 h-5 text-yellow-400" />
                        <span className="text-sm font-medium text-yellow-400 uppercase tracking-wide">
                          Achievement
                        </span>
                      </div>
                      <p className="text-white text-lg leading-relaxed group-hover:text-green-100 transition-colors">
                        {achievement}
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

export default Achievements;