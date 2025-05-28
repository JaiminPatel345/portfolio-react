import {FlipWords} from '../components/';
import {ReactTerminal} from 'react-terminal';
import {commands, themes, welcomeMessage} from '../utils/commands.jsx';
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
import {motion} from 'framer-motion';
import {useTheme} from '../lib/ThemeProvider';

const Home = () => {
  const {theme} = useTheme();

  const hireMeFor = [
    {
      text: 'Backend Development',
      icon: IconCode
    },
    {
      text: 'Frontend Development',
      icon: IconBrandReact
    },
    {
      text: 'Machine Learning',
      icon: IconBrain
    }
  ];

  return (
      <div
          className="min-h-screen relative w-full overflow-hidden flex items-center justify-center flex-col gap-10 py-16 px-4 md:px-8"
          id="home">
        <div
            className="absolute inset-0 w-full h-full bg-gradient-to-b from-transparent z-10 pointer-events-none"/>

        {/* Location for md+ screens - Absolute positioned */}
        <div className="hidden md:flex items-center gap-3 fixed md:absolute bottom-8 md:bottom-12 right-8 md:right-12 z-50">
          <IconMapPin className="w-6 h-6 text-emerald-500 dark:text-emerald-400" />
          <p className="text-lg md:text-xl font-medium text-neutral-800 dark:text-neutral-200 bg-white/90 dark:bg-neutral-900/90 px-4 py-2 rounded-full backdrop-blur-sm shadow-sm">
            Vadodara, India
          </p>
        </div>

        {/* Main Content */}
        <div
            className="flex flex-col lg:flex-row items-center lg:items-start justify-center lg:justify-between w-full max-w-7xl gap-6 md:gap-12 lg:gap-20 z-20">
          {/* Left Column - Text Introduction */}
          <motion.div
              initial={{opacity: 0, y: 20}}
              animate={{opacity: 1, y: 0}}
              transition={{duration: 0.5}}
              className="flex flex-col items-center lg:items-start gap-3 md:gap-6 text-center lg:text-left w-full lg:w-[45%] lg:sticky lg:top-16"
          >
            <div className="relative w-full">
              <h1 className="text-5xl md:text-7xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-neutral-900 to-neutral-600 dark:from-white dark:to-neutral-400 whitespace-nowrap">
                Jaimin <span className="text-blue-500 dark:text-blue-400">Detroja</span>
              </h1>
              
              {/* Student Info with Location - Mobile Only */}
              <div className="md:hidden flex flex-col gap-1 mt-3">
                <div className="flex items-center gap-3">
                  <IconSchool className="w-5 h-5 text-purple-500 dark:text-purple-400" />
                  <p className="text-lg font-medium text-neutral-700 dark:text-neutral-300">
                    21 years old Student
                  </p>
                </div>
                <div className="flex items-center gap-3">
                  <IconMapPin className="w-5 h-5 text-emerald-500 dark:text-emerald-400" />
                  <p className="text-lg font-medium text-neutral-700 dark:text-neutral-300">
                    Vadodara, India
                  </p>
                </div>
              </div>

              {/* Student Info - Desktop Only */}
              <div className="hidden md:flex items-center gap-3 mt-4">
                <IconSchool className="w-6 h-6 text-purple-500 dark:text-purple-400" />
                <p className="text-xl font-medium text-neutral-700 dark:text-neutral-300">
                  21 years old Student
                </p>
              </div>
            </div>

            <div className=" hidden md:flex flex-col gap-4 mt-2">
              <h2 className="text-xl md:text-2xl font-semibold text-neutral-800 dark:text-neutral-200">
                Ask Me About
              </h2>
              <div className="flex flex-col gap-1 md:gap-3 md:ml-10">
                {hireMeFor.map((item, index) => (
                  <div key={index} className="flex items-center gap-3">
                    <item.icon 
                      className={`w-5 h-5 ${
                        index === 0 
                          ? "text-amber-500 dark:text-amber-400"
                          : index === 1 
                            ? "text-sky-500 dark:text-sky-400" 
                            : "text-rose-500 dark:text-rose-400"
                      }`} 
                    />
                    <FlipWords 
                      currentWord={item.text}
                      className="text-lg md:text-xl font-medium text-neutral-700 dark:text-neutral-300"
                    />
                  </div>
                ))}
              </div>
            </div>

            {/* Social Links */}
            <div className="flex gap-4 mt-2">
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
              className="w-full lg:w-[50%] h-[400px] md:h-[530px] overflow-hidden rounded-lg shadow-xl border-2 border-neutral-200 dark:border-neutral-700"
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
      </div>
  );
};

export default Home;
