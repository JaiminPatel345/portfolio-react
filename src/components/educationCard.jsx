import React from 'react';
import { motion } from 'framer-motion';
import { GraduationCap, CalendarDays, Award } from 'lucide-react';

const EducationCard = ({ 
  institution, 
  location, 
  degree, 
  duration, 
  achievements,
  color = '#3b82f6'
}) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 50 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
      viewport={{once: true }}
      className="relative w-full mb-6"
    >
      <motion.div 
        className="rounded-lg bg-white dark:bg-neutral-800 p-6 border-l-4 shadow-md hover:shadow-lg transition-all duration-300 border border-neutral-200 dark:border-neutral-700 "
        style={{ borderLeftColor: color }}
      >
        <div className="flex flex-col md:flex-row md:items-start gap-4">
          <div className="flex-shrink-0">
            <div className="w-12 h-12 rounded-full bg-neutral-100 dark:bg-neutral-700 flex items-center justify-center">
              <GraduationCap size={24} style={{ color }} />
            </div>
          </div>
          
          <div className="space-y-3 flex-grow">
            <div>
              <h3 className="text-xl font-bold text-neutral-900 dark:text-white">
                {institution}
              </h3>
              <p className="text-neutral-600 dark:text-neutral-400">{location}</p>
            </div>
            
            <div className="flex items-center gap-2">
              <CalendarDays size={16} className="text-neutral-500 dark:text-neutral-500" />
              <span className="text-neutral-700 dark:text-neutral-300">{degree} | {duration}</span>
            </div>
            
            <div className="space-y-2">
              {achievements && achievements.map((achievement, index) => (
                <div key={index} className="flex items-start gap-2">
                  <Award size={16} className="text-neutral-500 dark:text-neutral-500 mt-1" />
                  <p className="text-neutral-700 dark:text-neutral-300">{achievement}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </motion.div>
    </motion.div>
  );
};

export default EducationCard; 