import { useTheme } from '../../lib/ThemeProvider';
import { IconMoon, IconSun } from '@tabler/icons-react';
import { motion } from 'framer-motion';

export function ThemeToggle() {
  const { theme, toggleTheme } = useTheme();

  return (
    <motion.button
      onClick={toggleTheme}
      className="relative h-10 w-10 rounded-full flex items-center justify-center bg-neutral-200 dark:bg-neutral-800 
                 border border-neutral-300 dark:border-neutral-700 shadow-sm transition-all duration-300"
      whileTap={{ scale: 0.9 }}
      whileHover={{ scale: 1.1 }}
      aria-label="Toggle theme"
    >
      {theme === 'dark' ? (
        <IconSun className="h-5 w-5 text-yellow-400" />
      ) : (
        <IconMoon className="h-5 w-5 text-blue-500" />
      )}
    </motion.button>
  );
} 