/* eslint-disable react/prop-types */
'use client';
import {AnimatePresence, motion} from 'framer-motion';
import {cn} from '../lib/utils';

export const FlipWords = ({currentWord, className}) => {
    
  return (
      <AnimatePresence>
        <motion.div
            initial={{
              opacity: 0,
              y: 10,
            }}
            animate={{
              opacity: 1,
              y: 0,
            }}
            transition={{
              type: 'spring',
              stiffness: 100,
              damping: 10,
            }}
            exit={{
              opacity: 0,
              y: -40,
              x: 40,
              filter: 'blur(8px)',
              scale: 2,
              position: 'absolute',
            }}
            className={cn(
                'z-10 inline-block relative text-left text-black dark:text-white/80 font-medium text-lg md:text-xl',
                className,
            )}
            key={currentWord}
        >
          {currentWord.split(' ').map((word, wordIndex) => (
              <motion.span
                  key={word + wordIndex}
                  initial={{opacity: 0, y: 10, filter: 'blur(8px)'}}
                  animate={{opacity: 1, y: 0, filter: 'blur(0px)'}}
                  transition={{
                    delay: wordIndex * 0.3,
                    duration: 0.3,
                  }}
                  className="inline-block whitespace-nowrap"
              >
                {word.split('').map((letter, letterIndex) => (
                    <motion.span
                        key={word + letterIndex}
                        initial={{
                          opacity: 0,
                          y: 10,
                          filter: 'blur(8px)',
                        }}
                        animate={{
                          opacity: 1,
                          y: 0,
                          filter: 'blur(0px)',
                        }}
                        transition={{
                          delay: wordIndex * 0.3 + letterIndex * 0.05,
                          duration: 0.2,
                        }}
                        className="inline-block"
                    >
                      {letter}
                    </motion.span>
                ))}
                <span className="inline-block">&nbsp;</span>
              </motion.span>
          ))}
        </motion.div>
      </AnimatePresence>
  );
};
