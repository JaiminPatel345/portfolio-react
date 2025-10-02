/* eslint-disable react/prop-types */
import {cn} from '../lib/utils';
import {IconMenu2, IconX} from '@tabler/icons-react';
import {useState, useEffect} from 'react';
import {ThemeToggle} from './ui/ThemeToggle';
import {AnimatePresence, motion} from 'framer-motion';
import {useTheme} from '../lib/ThemeProvider.jsx';

export const FloatingDock = ({items, desktopClassName, mobileClassName}) => {
  return (
      <>
        <FloatingDockDesktop items={items} className={desktopClassName}/>
        <FloatingDockMobile items={items} className={mobileClassName}/>
      </>
  );
};

const FloatingDockMobile = ({items, className}) => {
  const [open, setOpen] = useState(false);
  const [activeSection, setActiveSection] = useState('');
  const {toggleTheme} = useTheme();

  useEffect(() => {
    const handleScroll = () => {
      const sections = items.map(item => item.href?.replace('#', '')).filter(Boolean);
      const currentSection = sections.find(section => {
        const element = document.getElementById(section);
        if (element) {
          const rect = element.getBoundingClientRect();
          return rect.top <= 100 && rect.bottom >= 100;
        }
        return false;
      });
      setActiveSection(currentSection ? '#' + currentSection : '');
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, [items]);

  return (
      <div
          className={cn('fixed top-4 right-4 block md:hidden z-50', className)}>
        {open && (
            <div className="fixed inset-0 z-40 bg-black bg-opacity-50"
                 onClick={() => setOpen(false)}/>
        )}
        <AnimatePresence>
          {open && (
              <motion.div
                  initial={{opacity: 0, x: 300, y: 0}}
                  animate={{opacity: 1, x: 0, y: 0}}
                  exit={{opacity: 0, x: 300}}
                  transition={{type: 'spring', bounce: 0.2, duration: 0.6}}
                  className="fixed top-0 right-0 h-screen w-64 py-16 px-4 flex flex-col gap-2 bg-white/95 dark:bg-neutral-800/95 shadow-lg z-50 backdrop-blur-md border-l border-neutral-200 dark:border-neutral-700"
              >
                {items.map((item) => {
                  const isActive = activeSection === item.href;
                  const activeColor = 'text-blue-600 dark:text-blue-400';

                  return (
                      <motion.div
                          initial={{opacity: 0, x: 20}}
                          animate={{opacity: 1, x: 0}}
                          transition={{delay: 0.1 * items.indexOf(item)}}
                          key={item.title}
                      >
                        <a
                            href={item.href}
                            target={item.target ? '_blank' : '_self'}
                            className={cn(
                                'flex items-center gap-3 px-4 py-3 hover:bg-gray-100 dark:hover:bg-neutral-700 rounded-md transition-colors',
                                isActive &&
                                'bg-gray-100 dark:bg-neutral-700 font-medium',
                            )}
                            onClick={() => {
                              if (!item.target) {
                                const element = document.getElementById(item.href.replace('#', ''));
                                if (element) {
                                  element.scrollIntoView({ behavior: 'smooth' });
                                }
                                setOpen(false);
                              }
                            }}
                        >
                          <div className={cn('h-6 w-6',
                              isActive && activeColor,
                          )}>{item.icon}</div>
                          <span className={cn(
                              'text-base font-medium text-gray-800 dark:text-gray-200',
                              isActive && activeColor,
                          )}>
                            {item.title}
                          </span>
                        </a>
                      </motion.div>
                  );
                })}
                <div
                    className="mt-6 pt-4 border-t border-gray-200 dark:border-neutral-700">
                  <div className="px-4 flex items-center gap-3"
                       onClick={toggleTheme}>
                    <ThemeToggle/>
                    <span
                        className="text-base font-medium text-gray-800 dark:text-gray-200">
                      Toggle Theme
                    </span>
                  </div>
                </div>
              </motion.div>
          )}
        </AnimatePresence>
        <button
            onClick={() => setOpen(!open)}
            className="h-10 w-10 rounded-md bg-white/90 dark:bg-neutral-800/90 backdrop-blur-md flex items-center justify-center border border-gray-300 dark:border-neutral-700 shadow-md z-50"
        >
          {open ? (
              <IconX
                  className="h-5 w-5 text-neutral-600 dark:text-neutral-400"/>
          ) : (
              <IconMenu2
                  className="h-5 w-5 text-neutral-600 dark:text-neutral-400"/>
          )}
        </button>
      </div>
  );
};

const FloatingDockDesktop = ({items, className}) => {
  const [activeSection, setActiveSection] = useState('');

  useEffect(() => {
    const handleScroll = () => {
      const sections = items.map(item => item.href?.replace('#', '')).filter(Boolean);
      const currentSection = sections.find(section => {
        const element = document.getElementById(section);
        if (element) {
          const rect = element.getBoundingClientRect();
          return rect.top <= 100 && rect.bottom >= 100;
        }
        return false;
      });
      setActiveSection(currentSection ? '#' + currentSection : '');
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, [items]);

  return (
      <div className={cn(
          'mx-auto hidden md:flex h-12 items-center border border-gray-300 dark:border-neutral-700 rounded-md bg-white/90 dark:bg-neutral-800/90 backdrop-blur-md px-4 shadow-sm z-50',
          className,
      )}>
        {items.map((item) => {
          const isActive = activeSection === item.href;
          const activeColor = 'text-blue-600 dark:text-blue-400';

          return (
              <a
                  href={item.href}
                  key={item.title}
                  target={item.target ? '_blank' : '_self'}
                  className={cn(
                      'flex items-center gap-2 px-4 py-2 h-full hover:bg-gray-100 dark:hover:bg-neutral-700 transition-colors border-b-2 border-transparent',
                      isActive &&
                      'border-b-2 border-blue-500 bg-gray-50 dark:bg-neutral-700',
                  )}
                  onClick={(e) => {
                    if (!item.target) {
                      e.preventDefault();
                      const element = document.getElementById(item.href.replace('#', ''));
                      if (element) {
                        element.scrollIntoView({ behavior: 'smooth' });
                      }
                    }
                  }}
              >
                <div className={cn('h-5 w-5',
                    isActive && activeColor,
                )}>{item.icon}</div>
                <span className={cn(
                    'text-sm font-medium text-gray-800 dark:text-gray-200',
                    isActive && activeColor,
                )}>
                  {item.title}
                </span>
              </a>
          );
        })}
      </div>
  );
};
