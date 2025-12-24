import EducationCard from '../../components/educationCard';
import { motion, AnimatePresence } from 'framer-motion';
import { useState } from 'react';
import { ChevronDown, School } from 'lucide-react';

export const Education = () => {
  const [isSchoolExpanded, setIsSchoolExpanded] = useState(false);

  const collegeData = {
    institution: 'Birla Vishvakarma Mahavidyalaya',
    location: 'Anand, Gujarat',
    degree: 'B.Tech, Computer Science',
    duration: '2022 – 2026',
    achievements: ['SPI: 7.20'],
    color: '#3b82f6', // blue-500
  };

  const schoolData = [
    {
      institution: 'Baroda High School Danteshwar',
      location: 'Vadodara, Gujarat',
      degree: 'Science, Gujarat Board (12th)',
      duration: '2020 – 2022',
      achievements: [
        'HSC: 88%',
        'GUJCATE: 88/120',
        'JEE Advanced 2022: AIR 28k'
      ],
      color: '#8b5cf6', // purple-500
    },
    {
      institution: 'Nutan Vidyalaya',
      location: 'Vadodara, Gujarat',
      degree: 'Gujarat Board (10th)',
      duration: 'till 2020',
      achievements: ['SSC: 86.83%'],
      color: '#10b981', // emerald-500
    }
  ];

  return (
    <div className="w-full font-sans px-3 md:px-10 bg-white dark:bg-neutral-900 transition-colors duration-300" id="education">
      <div className="max-w-7xl mx-auto py-16 px-4 md:px-8">
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
          className="text-3xl md:text-5xl font-bold mb-3 text-neutral-900 dark:text-white"
        >
          Education
        </motion.h2>
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.1 }}
          viewport={{ once: true }}
          className="text-neutral-700 dark:text-neutral-300 text-base md:text-lg mb-12"
        >
          My शैक्षनिक Journey
        </motion.p>

        {/* College - Always Visible */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.2 }}
          viewport={{ once: true }}
        >
          <EducationCard
            institution={collegeData.institution}
            location={collegeData.location}
            degree={collegeData.degree}
            duration={collegeData.duration}
            achievements={collegeData.achievements}
            color={collegeData.color}
          />
        </motion.div>

        {/* School Section - Collapsible */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.4 }}
          viewport={{ once: true }}
          className="mt-4"
        >
          <button
            onClick={() => setIsSchoolExpanded(!isSchoolExpanded)}
            className={`w-full flex items-center justify-between p-4 rounded-lg border transition-all duration-300 group cursor-pointer
              ${isSchoolExpanded
                ? 'bg-blue-50 dark:bg-neutral-800 border-blue-200 dark:border-[#64ffda]/30'
                : 'bg-white dark:bg-neutral-800 border-neutral-200 dark:border-neutral-700 hover:border-blue-300 dark:hover:border-[#64ffda]/50'
              }`}
          >
            <div className="flex items-center gap-3">
              <div className={`w-10 h-10 rounded-full flex items-center justify-center shadow-sm transition-colors duration-300
                ${isSchoolExpanded
                  ? 'bg-blue-500 dark:bg-[#64ffda]/20'
                  : 'bg-neutral-100 dark:bg-neutral-700 group-hover:bg-blue-100 dark:group-hover:bg-[#64ffda]/10'
                }`}>
                <School size={20} className={`transition-colors duration-300
                  ${isSchoolExpanded
                    ? 'text-white dark:text-[#64ffda]'
                    : 'text-neutral-600 dark:text-neutral-300 group-hover:text-blue-500 dark:group-hover:text-[#64ffda]'
                  }`} />
              </div>
              <div className="text-left">
                <p className={`font-semibold transition-colors duration-300
                  ${isSchoolExpanded
                    ? 'text-blue-600 dark:text-[#64ffda]'
                    : 'text-neutral-900 dark:text-white group-hover:text-blue-600 dark:group-hover:text-[#64ffda]'
                  }`}>School Education</p>
                <p className="text-sm text-neutral-600 dark:text-neutral-400">12th & 10th Grade Details</p>
              </div>
            </div>
            <motion.div
              animate={{ rotate: isSchoolExpanded ? 180 : 0 }}
              transition={{ duration: 0.3 }}
              className={`p-2 rounded-full shadow-sm transition-colors duration-300
                ${isSchoolExpanded
                  ? 'bg-blue-500 dark:bg-[#64ffda]/20'
                  : 'bg-neutral-100 dark:bg-neutral-700 group-hover:bg-blue-100 dark:group-hover:bg-[#64ffda]/10'
                }`}
            >
              <ChevronDown size={20} className={`transition-colors duration-300
                ${isSchoolExpanded
                  ? 'text-white dark:text-[#64ffda]'
                  : 'text-neutral-600 dark:text-neutral-300 group-hover:text-blue-500 dark:group-hover:text-[#64ffda]'
                }`} />
            </motion.div>
          </button>

          <AnimatePresence>
            {isSchoolExpanded && (
              <motion.div
                initial={{ height: 0, opacity: 0 }}
                animate={{ height: 'auto', opacity: 1 }}
                exit={{ height: 0, opacity: 0 }}
                transition={{ duration: 0.3, ease: 'easeInOut' }}
                className="overflow-hidden"
              >
                <div className="pt-4 space-y-4">
                  {schoolData.map((school, index) => (
                    <motion.div
                      key={index}
                      initial={{ opacity: 0, x: -20 }}
                      animate={{ opacity: 1, x: 0 }}
                      transition={{ duration: 0.3, delay: index * 0.1 }}
                    >
                      <EducationCard
                        institution={school.institution}
                        location={school.location}
                        degree={school.degree}
                        duration={school.duration}
                        achievements={school.achievements}
                        color={school.color}
                      />
                    </motion.div>
                  ))}
                </div>
              </motion.div>
            )}
          </AnimatePresence>
        </motion.div>
      </div>
    </div>
  );
};