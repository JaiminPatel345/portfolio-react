import {FlipWords} from '../components/';
import {ReactTerminal} from 'react-terminal';
import {commands, themes, welcomeMessage} from '../utils/commands.jsx';
import {
  IconBrandGithub,
  IconBrandLinkedin,
  IconMail,
} from '@tabler/icons-react';
import {motion} from 'framer-motion';
import {useTheme} from '../lib/ThemeProvider';

const Home = () => {
  const {theme} = useTheme();
  const words = [
    'Creative Problem Solver',
    'DSA Runs in My Veins',
    'Passionate ML Explorer',
    'Innovative Mindset',
    'Open-Source Contributor',
    'Lifelong Knowledge Seeker',
    'Strategic Chess Enthusiast',
  ];

  return (
    <div className="min-h-screen relative w-full overflow-hidden flex items-center justify-center flex-col gap-10 py-16" id="home">
      <div className="absolute inset-0 w-full h-full bg-gradient-to-b from-transparent z-10 pointer-events-none" />

      {/* Main Content */}
      <div className="flex flex-col md:flex-row items-center md:items-center justify-center md:justify-between w-full max-w-6xl px-4 md:px-8 z-20">
        {/* Left Column - Text Introduction */}
        <motion.div
          initial={{opacity: 0, y: 20}}
          animate={{opacity: 1, y: 0}}
          transition={{duration: 0.5}}
          className="flex flex-col items-center md:items-start gap-4 mb-10 md:mb-0 text-center md:text-left w-full md:w-1/2"
        >
          <h1 className="text-4xl md:text-6xl font-bold text-neutral-900 dark:text-white">
            Jaimin <span className="text-blue-500 dark:text-blue-400">Detroja</span>
          </h1>
          <h2 className="text-xl md:text-2xl font-medium text-neutral-700 dark:text-neutral-300">
            Full Stack Developer
          </h2>
          <div className="mt-2">
            <FlipWords words={words}/>
          </div>

          {/* Social Links */}
          <div className="flex gap-4 mt-4">
            <a
              href="https://github.com/jaiminpatel345"
              target="_blank"
              rel="noopener noreferrer"
              className="bg-white dark:bg-neutral-800 text-neutral-900 dark:text-white hover:text-blue-500 dark:hover:text-blue-400 p-3 rounded-full border border-neutral-200 dark:border-neutral-700 hover:border-blue-300 dark:hover:border-blue-500 shadow-sm hover:shadow-md transition-all"
            >
              <IconBrandGithub size={20}/>
            </a>
            <a
              href="https://www.linkedin.com/in/jaimindetroja345"
              target="_blank"
              rel="noopener noreferrer"
              className="bg-white dark:bg-neutral-800 text-neutral-900 dark:text-white hover:text-blue-500 dark:hover:text-blue-400 p-3 rounded-full border border-neutral-200 dark:border-neutral-700 hover:border-blue-300 dark:hover:border-blue-500 shadow-sm hover:shadow-md transition-all"
            >
              <IconBrandLinkedin size={20}/>
            </a>
            <a
              href="mailto:officialjaimin345@gmail.com"
              target="_blank"
              rel="noopener noreferrer"
              className="bg-white dark:bg-neutral-800 text-neutral-900 dark:text-white hover:text-blue-500 dark:hover:text-blue-400 p-3 rounded-full border border-neutral-200 dark:border-neutral-700 hover:border-blue-300 dark:hover:border-blue-500 shadow-sm hover:shadow-md transition-all"
            >
              <IconMail size={20}/>
            </a>
          </div>
        </motion.div>

        {/* Right Column - Terminal */}
        <motion.div
          initial={{opacity: 0, y: 20}}
          animate={{opacity: 1, y: 0}}
          transition={{duration: 0.5, delay: 0.2}}
          className="w-full md:w-3/5"
        >
          <div className="w-full h-[400px] md:h-[530px] overflow-hidden rounded-lg shadow-xl border-2 border-neutral-200 dark:border-neutral-700">
            <ReactTerminal
              welcomeMessage={welcomeMessage}
              themes={themes}
              theme={theme === 'dark' ? 'my-custom-theme' : 'light'}
              commands={commands}
              showControlBar={true}
              showControlButtons={true}
              errorMessage={'Command not found. Type \'help\' for available commands.'}
            />
          </div>
        </motion.div>
      </div>
    </div>
  );
};

export default Home;
