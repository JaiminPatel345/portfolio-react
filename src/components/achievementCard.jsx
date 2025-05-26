import React from 'react';
import {Award, Brain, Code, Crown, Star, Trophy} from 'lucide-react';
import { motion } from 'framer-motion';

const AchievementCard = ({
  title,
  date,
  icon,
  iconColor,
  link,
  btnText,
  description,
  index
}) => {
  const IconComponent = {
    Code: Code,
    Trophy: Trophy,
    Star: Star,
    Brain: Brain,
    Award: Award,
    Crown: Crown,
  }[icon];

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.3, delay: index * 0.1 }}
      viewport={{ once: true, margin: "-100px" }}
      className="group relative w-full md:w-[calc(50%-1rem)] lg:w-[calc(33.33%-1rem)] p-4"
    >
      <div
        className="relative overflow-hidden rounded-xl bg-white dark:bg-neutral-800 p-6 md:p-8 shadow-md min-h-[360px] md:min-h-[420px] 
                transition-all duration-300 border border-neutral-200 dark:border-neutral-700 pb-16"
      >
        {/* Date badge */}
        <div className="absolute top-4 right-4 bg-neutral-100 dark:bg-neutral-700 px-3 py-1 rounded-full">
          <span className="text-xs font-medium text-neutral-700 dark:text-neutral-300">{date}</span>
        </div>

        {/* Icon Section */}
        <div className="flex justify-center mb-6 mt-4">
          <div className={`p-4 rounded-full bg-neutral-100 dark:bg-neutral-700/50`}>
            {IconComponent && (
              <IconComponent
                size={24}
                color={iconColor}
              />
            )}
          </div>
        </div>

        {/* Content */}
        <div className="space-y-4">
          <h3 className="text-xl font-bold text-neutral-900 dark:text-white text-center">{title}</h3>

          <ul className="space-y-2 pl-5">
            {description.map((desc, index) => (
              <li
                key={index}
                className="text-neutral-700 dark:text-neutral-300 text-sm list-disc"
              >
                {desc}
              </li>
            ))}
          </ul>

          {link && (
            <div className="absolute bottom-6 left-0 right-0 flex justify-center">
              <a
                href={link}
                target="_blank"
                rel="noopener noreferrer"
                className="px-5 py-2 text-sm font-medium text-blue-600 dark:text-blue-400 bg-blue-50 dark:bg-blue-900/30 
                       hover:bg-blue-100 dark:hover:bg-blue-800/30 transition-colors border border-blue-100 dark:border-blue-800"
              >
                {btnText || 'View Details'}
              </a>
            </div>
          )}
        </div>
      </div>
    </motion.div>
  );
};

export default AchievementCard;