import EducationCard from '../../components/educationCard';
import { motion } from 'framer-motion';

export const Education = () => {
  const educationData = [
    {
      institution: 'Birla Vishvakarma Mahavidyalaya',
      location: 'Anand, Gujarat',
      degree: 'B.Tech, Computer Science',
      duration: '2022 – 2026',
      achievements: ['SPI: 7.35']
    },
    {
      institution: 'Baroda High School Danteshwar',
      location: 'Vadodara, Gujarat',
      degree: 'Science, Gujarat Board',
      duration: '2020 – 2022',
      achievements: [
        'HSC: 88%',
        'GUJCATE: 88/120',
        'JEE Advanced 2022: AIR 28k'
      ]
    },
    {
      institution: 'Nutan Vidyalaya',
      location: 'Vadodara, Gujarat',
      degree: 'Gujarat Board',
      duration: 'till 2020',
      achievements: ['SSC: 86.83%']
    }
  ];

  const container = {
    hidden: { opacity: 0 },
    show: { 
      opacity: 1,
      transition: {
        staggerChildren: 0.2
      }
    }
  };

  return (
    <div className="w-full font-sans px-3 md:px-10" id="skills">
      <div className="max-w-7xl mx-auto py-16 px-4 md:px-8">
        <motion.h2 
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="text-2xl md:text-3xl font-bold mb-3 text-white"
        >
          Education
        </motion.h2>
        <motion.p 
          initial={{ opacity: 0, y: -10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.1 }}
          className="text-neutral-300 text-md mb-12"
        >
          My शैक्षनिक Journey 
        </motion.p>
        
        <motion.div 
          variants={container}
          initial="hidden"
          animate="show"
          className="space-y-4"
        >
          {educationData.map((education, index) => (
            <EducationCard 
              key={index}
              institution={education.institution}
              location={education.location}
              degree={education.degree}
              duration={education.duration}
              achievements={education.achievements}
            />
          ))}
          
          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 1.5, duration: 0.5 }}
            className="mt-8 pl-4 text-neutral-300"
          >
          </motion.p>
        </motion.div>
      </div>
    </div>
  );
};