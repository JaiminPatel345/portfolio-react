import { FlipWords } from '../components/';
import { ReactTerminal } from 'react-terminal';
import { commands, themes, welcomeMessage } from '../utils/commands.jsx';
import {
  IconBrandGithub,
  IconBrandLinkedin,
  IconMail,
  IconMapPin,
  IconSchool,
  IconCode,
  IconBrandReact,
  IconBrain,
} from '@tabler/icons-react';
import { motion } from 'framer-motion';
import { useTheme } from '../lib/ThemeProvider';

const Home = () => {
  const { theme } = useTheme();

  const hireMeFor = [
    {
      text: 'Backend Development',
      icon: <div className='rounded-full bg-[#ffffff] overflow-hidden'>
        <img src="/assets/logos/code.gif" alt="Backend Icon" className="w-10 h-10 " />
      </div>
    },
    {
      text: 'Complex Problem Solving',
      icon: 
      <div className='rounded-full bg-[#ffffff]'>
        <img src="/assets/logos/brain.gif" alt="Brain Icon" className="w-10 h-10 " />
      </div>
    },
    {
      text: 'Microservices & Algorithms',
      icon: 
      <div className='rounded-full bg-[#ffffff]'>
        <img src="/assets/logos/algorithm.gif" alt="Microservices & Algorithms Icon" className="w-10 h-10" />
      </div>
    }
  ];

  return (
    <div
      className="h-[100dvh] relative w-full overflow-hidden flex flex-col lg:flex-row items-center justify-center gap-4 px-4 md:px-8 lg:px-12 pt-16 md:pt-12 lg:pt-0 pb-4 lg:pb-0"
      id="home">
      <div
        className="absolute inset-0 w-full h-full bg-gradient-to-b from-transparent z-10 pointer-events-none"
      />

      {/* Main Content */}
      <div
        className="flex flex-col lg:flex-row items-center lg:items-center justify-between w-full max-w-7xl h-full lg:h-auto gap-4 md:gap-8 lg:gap-20 z-20">

        {/* Left Column - Text Introduction - Fixed Height / Flex Initial */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="flex flex-col items-center lg:items-start gap-4 text-center lg:text-left w-full lg:w-[45%] flex-shrink-0 lg:sticky lg:top-16 justify-center lg:justify-start pt-4 lg:pt-0"
        >
          <div className="relative w-full flex flex-col items-center lg:items-start">
            <h1 className="text-4xl md:text-7xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-neutral-900 to-neutral-600 dark:from-white dark:to-neutral-400 whitespace-nowrap relative z-20">
              Jaimin <span className="relative inline-block text-blue-500 dark:text-blue-400">
                Detroja

                {/* Responsive Badge - Anchored to Detroja */}
                <span className="absolute -top-6 -right-6 md:-top-7 md:-right-8 text-emerald-600 dark:text-emerald-400 text-[10px] md:text-sm font-semibold flex items-center gap-1.5 transform hover:scale-105 transition-transform cursor-default whitespace-nowrap">
                  <span className="relative flex h-2 w-2">
                    <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75"></span>
                    <span className="relative inline-flex rounded-full h-2 w-2 bg-emerald-500"></span>
                  </span>
                  Open to Work
                </span>
              </span>
            </h1>

            {/* Student Info - Responsive */}
            <div className="flex items-center gap-2 mt-2 md:mt-4 text-neutral-700 dark:text-neutral-300">
              <IconSchool className="w-5 h-5 md:w-6 md:h-6 text-purple-500 dark:text-purple-400" />
              <p className="text-base md:text-xl font-medium">
                B.Tech CSE | 2026 Graduate
              </p>
            </div>
          </div>

          <div className="flex flex-col gap-2 md:gap-4 mt-1 w-full items-center lg:items-start">
            <h2 className="text-lg md:text-2xl font-semibold text-neutral-800 dark:text-neutral-200">
              Ask Me About
            </h2>
            <div className="flex flex-col gap-1 md:gap-3">
              {hireMeFor.map((item, index) => (
                <div key={index} className="flex items-center gap-2 md:gap-3 justify-center lg:justify-start">
                  {item.icon}
                  <FlipWords
                    currentWord={item.text}
                    className="text-base md:text-xl font-medium text-neutral-700 dark:text-neutral-300"
                  />
                </div>
              ))}
            </div>
          </div>

          {/* Social Links */}
          <div className="flex gap-4 mt-2 md:mt-4">
            <a
              href="https://github.com/jaiminpatel345"
              target="_blank"
              rel="noopener noreferrer"
              className="bg-white dark:bg-neutral-800 text-neutral-900 dark:text-white hover:text-blue-500 dark:hover:text-blue-400 p-2 md:p-3 rounded-full border border-neutral-200 dark:border-neutral-700 hover:border-blue-300 dark:hover:border-blue-500 shadow-sm hover:shadow-md transition-all group scale-100 hover:scale-110 active:scale-95"
            >
              <IconBrandGithub size={20} />
            </a>
            <a
              href="https://www.linkedin.com/in/jaimindetroja345"
              target="_blank"
              rel="noopener noreferrer"
              className="bg-white dark:bg-neutral-800 text-neutral-900 dark:text-white hover:text-blue-500 dark:hover:text-blue-400 p-2 md:p-3 rounded-full border border-neutral-200 dark:border-neutral-700 hover:border-blue-300 dark:hover:border-blue-500 shadow-sm hover:shadow-md transition-all group scale-100 hover:scale-110 active:scale-95"
            >
              <IconBrandLinkedin size={20} />
            </a>
            <a
              href="mailto:officialjaimin345@gmail.com"
              target="_blank"
              rel="noopener noreferrer"
              className="bg-white dark:bg-neutral-800 text-neutral-900 dark:text-white hover:text-blue-500 dark:hover:text-blue-400 p-2 md:p-3 rounded-full border border-neutral-200 dark:border-neutral-700 hover:border-blue-300 dark:hover:border-blue-500 shadow-sm hover:shadow-md transition-all group scale-100 hover:scale-110 active:scale-95"
            >
              <IconMail size={20} />
            </a>
          </div>
        </motion.div>

        {/* Right Column - Terminal - Flex Grow to take remaining space */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.2 }}
          className="w-full lg:w-[50%] flex-1 min-h-[300px] lg:h-[580px] lg:flex-none overflow-hidden rounded-xl shadow-2xl border-2 border-neutral-200 dark:border-neutral-700 bg-white dark:bg-[#1a1b26] mb-12 sm:mb-8 lg:mb-0"
        >
          <ReactTerminal
            welcomeMessage={welcomeMessage}
            themes={themes}
            theme={theme === 'dark' ? 'my-custom-theme' : 'light'}
            commands={commands}
            showControlBar={true}
            showControlButtons={true}
            errorMessage={'Command not found. Type \'help\' for available commands.'}
          />
        </motion.div>
      </div>

      {/* Location - Floating Badge */}
      <div className="flex absolute bottom-8 right-8 xl:bottom-12 xl:right-12 items-center gap-3 z-30 animate-fade-in-up pointer-events-none lg:pointer-events-auto">
        <IconMapPin className="w-6 h-6 text-emerald-500 dark:text-emerald-400 drop-shadow-md" />
        <p className="text-lg font-medium text-neutral-800 dark:text-neutral-200 bg-white/80 dark:bg-neutral-900/80 px-4 py-2 rounded-full backdrop-blur-md border border-white/20 dark:border-neutral-700/50 shadow-lg">
          Vadodara, India
        </p>
      </div>
    </div>
  );
};

export default Home;
