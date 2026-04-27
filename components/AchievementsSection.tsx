
import React from 'react';
import { ACHIEVEMENTS_LIST } from '../constants';
import { Trophy, Calendar, MapPin } from 'lucide-react';

const AchievementsSection: React.FC<{ id: string }> = ({ id }) => {
  return (
    <section id={id} className="section-padding bg-slate-50 dark:bg-transparent transition-colors duration-300">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl font-bold text-slate-900 dark:text-white sm:text-4xl">Achievements & Extra-Curricular</h2>
          <div className="mt-2 w-16 h-1 bg-indigo-600 mx-auto rounded-full"></div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-5xl mx-auto">
          {ACHIEVEMENTS_LIST.map((achievement, index) => (
            <div key={index} className="bg-white dark:bg-slate-800/50 p-8 rounded-3xl shadow-xl hover:shadow-2xl transition-all border border-slate-100 dark:border-slate-700 group hover:-translate-y-2">
              <div className="flex items-start gap-4">
                <div className="p-3 bg-indigo-50 dark:bg-indigo-900/30 rounded-2xl group-hover:bg-indigo-600 group-hover:text-white transition-colors">
                  <Trophy className="w-6 h-6" />
                </div>
                <div className="flex-1">
                  <div className="flex flex-col sm:flex-row sm:justify-between sm:items-start gap-2 mb-4">
                    <div>
                      <h3 className="text-xl font-bold text-slate-900 dark:text-white mb-1">{achievement.organization}</h3>
                      <p className="text-indigo-600 dark:text-indigo-400 font-bold text-lg">{achievement.title}</p>
                    </div>
                  </div>
                  
                  <div className="flex flex-wrap gap-4 mb-4 text-sm text-slate-500 dark:text-slate-400">
                    <div className="flex items-center gap-1">
                      <Calendar className="w-4 h-4" />
                      <span>{achievement.date}</span>
                    </div>
                    {achievement.location && (
                      <div className="flex items-center gap-1">
                        <MapPin className="w-4 h-4" />
                        <span>{achievement.location}</span>
                      </div>
                    )}
                  </div>

                  <p className="text-slate-600 dark:text-slate-300 leading-relaxed">
                    {achievement.description}
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default AchievementsSection;
