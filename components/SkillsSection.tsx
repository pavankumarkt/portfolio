import React from 'react';
import { SKILL_CATEGORIES, CERTIFICATES_LIST, LANGUAGES_LIST, INTERESTS_LIST } from '../constants';
import { Code2, Brain, BarChart3, User, Award, Globe, Heart } from 'lucide-react';

const SkillsSection: React.FC<{ id: string }> = ({ id }) => {
  const getIcon = (category: string) => {
    switch (category) {
      case "Programming": return <Code2 className="w-8 h-8 text-blue-500" />;
      case "AI & Machine Learning": return <Brain className="w-8 h-8 text-purple-500" />;
      case "Data Analytics & Visualization": return <BarChart3 className="w-8 h-8 text-emerald-500" />;
      case "Soft Skills": return <User className="w-8 h-8 text-amber-500" />;
      default: return <Code2 className="w-8 h-8 text-blue-500" />;
    }
  };

  return (
    <section id={id} className="py-20 px-4 transition-colors duration-300 relative">
      <div className="max-w-6xl mx-auto w-full relative z-10 space-y-16">
        <div className="text-center">
          <h2 className="text-4xl md:text-5xl font-bold text-slate-900 dark:text-white mb-6">
            Skills & Expertise
          </h2>
          <p className="text-lg text-slate-600 dark:text-slate-300 max-w-2xl mx-auto">
            The technical skills, tools, certifications, and core competencies I bring to projects.
          </p>
        </div>

        {/* Skill Categories Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {SKILL_CATEGORIES.map((cat, index) => (
            <div key={index} className="bg-white/80 dark:bg-slate-800/50 backdrop-blur-sm p-8 rounded-2xl border border-slate-200/50 dark:border-slate-700/50 hover:shadow-lg dark:hover:shadow-purple-500/20 transition-all duration-300 group hover:-translate-y-1">
              <div className="mb-6 bg-slate-100/80 dark:bg-slate-700/50 w-16 h-16 rounded-xl flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
                {getIcon(cat.category)}
              </div>
              <h3 className="text-xl font-bold text-slate-900 dark:text-white mb-6">
                {cat.category}
              </h3>
              <div className="flex flex-wrap gap-2.5">
                {cat.skills.map((skill, sIdx) => (
                  <span
                    key={sIdx}
                    className="px-3 py-1.5 bg-slate-100/80 dark:bg-slate-700/40 text-slate-700 dark:text-slate-300 rounded-lg text-sm font-medium border border-slate-200/50 dark:border-slate-600/50 hover:bg-indigo-50 dark:hover:bg-indigo-950/40 transition-colors cursor-default"
                  >
                    {skill}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>

        {/* Certificates, Languages & Interests Sub-grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 pt-4">
          {/* Certificates Card */}
          <div className="bg-white/80 dark:bg-slate-800/50 backdrop-blur-sm p-8 rounded-2xl border border-slate-200/50 dark:border-slate-700/50 shadow-sm hover:shadow-md transition-all">
            <div className="flex items-center gap-3 mb-6">
              <div className="p-3 bg-amber-50 dark:bg-amber-900/30 rounded-xl text-amber-600 dark:text-amber-400">
                <Award className="w-6 h-6" />
              </div>
              <h3 className="text-xl font-bold text-slate-900 dark:text-white">Certifications</h3>
            </div>
            <ul className="space-y-3">
              {CERTIFICATES_LIST.map((cert, index) => (
                <li key={index} className="flex items-center gap-2 text-slate-700 dark:text-slate-300 font-medium text-sm">
                  <span className="w-2 h-2 rounded-full bg-amber-500"></span>
                  {cert.name}
                </li>
              ))}
            </ul>
          </div>

          {/* Languages Card */}
          <div className="bg-white/80 dark:bg-slate-800/50 backdrop-blur-sm p-8 rounded-2xl border border-slate-200/50 dark:border-slate-700/50 shadow-sm hover:shadow-md transition-all">
            <div className="flex items-center gap-3 mb-6">
              <div className="p-3 bg-blue-50 dark:bg-blue-900/30 rounded-xl text-blue-600 dark:text-blue-400">
                <Globe className="w-6 h-6" />
              </div>
              <h3 className="text-xl font-bold text-slate-900 dark:text-white">Languages</h3>
            </div>
            <div className="flex flex-wrap gap-2">
              {LANGUAGES_LIST.map((lang, index) => (
                <span
                  key={index}
                  className="px-3 py-1.5 bg-blue-50 dark:bg-blue-900/20 text-blue-700 dark:text-blue-300 rounded-lg text-sm font-semibold border border-blue-100 dark:border-blue-800/50"
                >
                  {lang}
                </span>
              ))}
            </div>
          </div>

          {/* Interests Card */}
          <div className="bg-white/80 dark:bg-slate-800/50 backdrop-blur-sm p-8 rounded-2xl border border-slate-200/50 dark:border-slate-700/50 shadow-sm hover:shadow-md transition-all">
            <div className="flex items-center gap-3 mb-6">
              <div className="p-3 bg-rose-50 dark:bg-rose-900/30 rounded-xl text-rose-600 dark:text-rose-400">
                <Heart className="w-6 h-6" />
              </div>
              <h3 className="text-xl font-bold text-slate-900 dark:text-white">Interests</h3>
            </div>
            <div className="flex flex-wrap gap-2">
              {INTERESTS_LIST.map((interest, index) => (
                <span
                  key={index}
                  className="px-3 py-1.5 bg-rose-50 dark:bg-rose-900/20 text-rose-700 dark:text-rose-300 rounded-lg text-sm font-semibold border border-rose-100 dark:border-rose-800/50"
                >
                  {interest}
                </span>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default SkillsSection;
