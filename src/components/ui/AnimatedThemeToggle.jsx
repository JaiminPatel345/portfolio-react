import { useRef, useCallback } from 'react';
import { useTheme } from '../../lib/ThemeProvider';
import { IconMoon, IconSun } from '@tabler/icons-react';
import { motion } from 'framer-motion';

/**
 * AnimatedThemeToggle - A theme toggle button with circular reveal animation
 * 
 * When clicked, it creates an expanding circle from the button position that
 * reveals the new theme, similar to magic UI's animated theme toggler.
 * Uses View Transition API when available, with CSS fallback.
 */
export function AnimatedThemeToggle({ duration = 500 }) {
    const { theme, toggleThemeWithTransition } = useTheme();
    const buttonRef = useRef(null);

    const handleClick = useCallback((event) => {
        // Get the button's position for the circular reveal origin
        const button = buttonRef.current;
        if (!button) return;

        const rect = button.getBoundingClientRect();
        const x = rect.left + rect.width / 2;
        const y = rect.top + rect.height / 2;

        toggleThemeWithTransition(x, y, duration);
    }, [toggleThemeWithTransition, duration]);

    return (
        <motion.button
            ref={buttonRef}
            onClick={handleClick}
            className="relative h-10 w-10 rounded-full flex items-center justify-center bg-neutral-200 dark:bg-neutral-800 
                 border border-neutral-300 dark:border-neutral-700 shadow-sm transition-all duration-300
                 hover:shadow-lg hover:scale-105 active:scale-95 z-[9999]"
            whileTap={{ scale: 0.9 }}
            whileHover={{ scale: 1.1 }}
            aria-label="Toggle theme"
        >
            <motion.div
                key={theme}
                initial={{ rotate: -180, opacity: 0 }}
                animate={{ rotate: 0, opacity: 1 }}
                exit={{ rotate: 180, opacity: 0 }}
                transition={{ duration: 0.3, ease: "easeInOut" }}
            >
                {theme === 'dark' ? (
                    <IconSun className="h-5 w-5 text-yellow-400" />
                ) : (
                    <IconMoon className="h-5 w-5 text-blue-500" />
                )}
            </motion.div>
        </motion.button>
    );
}

export default AnimatedThemeToggle;
