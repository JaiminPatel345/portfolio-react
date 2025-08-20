import { motion } from 'framer-motion';

export const Intro = () => {
  return (
    <div className="w-full font-sans px-3 md:px-10 bg-white dark:bg-neutral-900 transition-colors duration-300" id="about-me">
      <div className="max-w-7xl mx-auto py-16 px-4 md:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
        >
          <h2 className="text-3xl md:text-5xl font-bold mb-3 text-neutral-900 dark:text-white">
            About Me
          </h2>
          <p className="text-neutral-700 dark:text-neutral-300 text-base md:text-lg mb-12">
            A short introduction about myself
          </p>
        </motion.div>
        
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.2 }}
          viewport={{ once: true }}
          className="space-y-6 pl-5 md:pl-10"
        >
          <ul className="list-disc text-neutral-700 dark:text-neutral-200 text-lg md:text-xl space-y-4">
            <li>
              Full Stack <strong className="text-blue-600 dark:text-blue-400">JavaScript Developer</strong>
            </li>
            <li>
              <strong className="text-blue-600 dark:text-blue-400">Machine Learning</strong> Enthusiast
            </li>
            <li>
              Knight in LeetCode
            </li>
            <li>
              Open Source Contributor (beginner)
            </li>
            <li>
              2026 Passout of <strong className="text-blue-600 dark:text-blue-400">Computer Science Student</strong> from BVM, Anand, Gujarat
            </li>
            <li>
              Wanna Chess Match? <a href={'https://www.chess.com/member/jaimindetroja'} target={'_blank'} className="text-blue-600 dark:text-blue-400 hover:underline">Chess.com</a>
            </li>
          </ul>
        </motion.div>
      </div>
    </div>
  );
};