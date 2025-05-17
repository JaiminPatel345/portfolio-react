import React from 'react';
import { motion } from 'framer-motion';
import { GraduationCap, CalendarDays, Award } from 'lucide-react';

const EducationCard = ({ 
  institution, 
  location, 
  degree, 
  duration, 
  achievements,
  color = '#FFFFFF'
}) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 50 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
      className="relative w-full mb-6"
    >
      <motion.div 
        className="rounded-lg bg-neutral-900 p-6 border-l-4 shadow-lg hover:shadow-xl transition-all duration-300"
        style={{ borderLeftColor: color }}
        whileHover={{ 
          x: 5,
          boxShadow: "0 20px 25px -5px rgba(0, 0, 0, 0.1), 0 10px 10px -5px rgba(0, 0, 0, 0.04)",
          transition: { duration: 0.3 }
        }}
      >
        <div className="flex flex-col md:flex-row md:items-start gap-4">
          <div className="flex-shrink-0">
            <div className="w-12 h-12 rounded-full bg-neutral-800 flex items-center justify-center">
              <GraduationCap size={24} style={{ color }} />
            </div>
          </div>
          
          <div className="space-y-3 flex-grow">
            <div>
              <h3 className="text-xl font-bold" style={{ color }}>
                {institution}
              </h3>
              <p className="text-neutral-400">{location}</p>
            </div>
            
            <div className="flex items-center gap-2">
              <CalendarDays size={16} className="text-neutral-500" />
              <span className="text-neutral-300">{degree} | {duration}</span>
            </div>
            
            <div className="space-y-1">
              {achievements && achievements.map((achievement, index) => (
                <div key={index} className="flex items-start gap-2">
                  <Award size={16} className="text-neutral-500 mt-1" />
                  <p className="text-neutral-300">{achievement}</p>
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