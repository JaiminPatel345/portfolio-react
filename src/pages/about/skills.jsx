import {CardBody, CardContainer, CardItem} from '../../components/ui/3d-card.jsx';
import getSkillIcon from '../../utils/getSkillIcon.jsx';
import { motion } from 'framer-motion';

const skills = {
  advanced: [
    {name: 'JavaScript'},
    {name: 'TypeScript'},
    {name: 'Java'},
    {name: 'Node.js'},
    {name: 'React.js'},
    {name: 'React Native'},
    {name: 'Express.js'},
    {name: 'MongoDB'},
    {name: 'Redis'},
    {name: 'Git'},
    {name: 'Redux'},
    {name: 'Tailwind'},
    {name: 'CSS'},
    {name: 'HTML'},
  ],
  intermediate: [
    {name: 'Python'},
    {name: 'TensorFlow'},
    {name: 'PostgreSQL'},
    {name: 'Docker'},
    {name: 'Azure'},
    {name: 'Linux'},
    {name: 'Socket.io'},
  ],
  familiar: [
    {name: 'Firebase'},
    {name: 'GCP'},
    {name: 'ONDC'},
    {name: 'Peer js'},
    {name: 'C++'},
    {name: 'C'},
  ],
};

const SkillCard = ({name, index}) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.3, delay: index * 0.05 }}
      viewport={{ once: true }}
    >
      <CardContainer className="inter-var">
        <CardBody
          className="relative group/card h-12 w-full rounded-lg bg-white dark:bg-neutral-800 backdrop-blur-sm border border-neutral-200 dark:border-neutral-700 hover:border-blue-300 dark:hover:border-blue-500 transition-all duration-200"
        >
          <CardItem
            translateZ="20"
            className="w-full h-full flex items-center gap-3 px-4"
          >
            <div className="w-6 h-6 flex items-center justify-center text-blue-500 dark:text-blue-400">
              {getSkillIcon(name)}
            </div>
            <span className="text-sm font-medium text-neutral-800 dark:text-neutral-200">
              {name}
            </span>
          </CardItem>
        </CardBody>
      </CardContainer>
    </motion.div>
  );
};

const SkillCategory = ({title, skills, borderColor}) => {
  return (
    <motion.div 
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
      viewport={{ once: true }}
      className={`p-6 md:p-8 rounded-lg bg-white dark:bg-neutral-800 border-l-4 ${borderColor} shadow-md`}
    >
      <h2 className="text-xl font-semibold text-neutral-800 dark:text-white mb-4">{title}</h2>
      <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-3">
        {skills.map((skill, index) => (
          <SkillCard
            key={`${title}-${index}`}
            name={skill.name}
            index={index}
          />
        ))}
      </div>
    </motion.div>
  );
};

const SkillSet = () => {
  return (
    <div className="w-full font-sans px-3 md:px-10 bg-white dark:bg-neutral-900 transition-colors duration-300" id="skills">
      <div className="max-w-7xl mx-auto py-16 px-4 md:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
        >
          <h2 className="text-3xl md:text-5xl font-bold mb-3 text-neutral-900 dark:text-white">
            Skill Set
          </h2>
          <p className="text-neutral-700 dark:text-neutral-300 text-base md:text-lg mb-12">
            Technologies I work with, categorized by proficiency level
          </p>
        </motion.div>
        
        <div className="space-y-6">
          <SkillCategory
            title="Advanced"
            skills={skills.advanced}
            borderColor="border-blue-500"
          />
          <SkillCategory
            title="Intermediate"
            skills={skills.intermediate}
            borderColor="border-purple-500"
          />
          <SkillCategory
            title="Familiar"
            skills={skills.familiar}
            borderColor="border-teal-500"
          />
        </div>
      </div>
    </div>
  );
};

export default SkillSet;