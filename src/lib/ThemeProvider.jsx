import { createContext, useContext, useEffect, useState, useCallback, useRef } from 'react';

const ThemeContext = createContext({
  theme: 'dark',
  toggleTheme: () => { },
  toggleThemeWithTransition: () => { },
});

export function ThemeProvider({ children }) {
  const [theme, setTheme] = useState('light');
  const isTransitioning = useRef(false);

  // Simple toggle without animation
  const toggleTheme = useCallback(() => {
    setTheme(prevTheme => prevTheme === 'dark' ? 'light' : 'dark');
  }, []);

  // Animated toggle with circular reveal effect
  const toggleThemeWithTransition = useCallback((x, y, duration = 500) => {
    // Prevent multiple transitions at once
    if (isTransitioning.current) return;

    const newTheme = theme === 'dark' ? 'light' : 'dark';

    // Check if View Transition API is supported
    if (!document.startViewTransition) {
      // Fallback: just toggle without animation
      setTheme(newTheme);
      return;
    }

    isTransitioning.current = true;

    // Calculate the maximum radius needed to cover the entire screen
    const maxRadius = Math.hypot(
      Math.max(x, window.innerWidth - x),
      Math.max(y, window.innerHeight - y)
    );

    // Set CSS custom properties for the animation
    document.documentElement.style.setProperty('--theme-transition-x', `${x}px`);
    document.documentElement.style.setProperty('--theme-transition-y', `${y}px`);
    document.documentElement.style.setProperty('--theme-transition-radius', `${maxRadius}px`);
    document.documentElement.style.setProperty('--theme-transition-duration', `${duration}ms`);

    // Start the view transition
    const transition = document.startViewTransition(() => {
      setTheme(newTheme);
    });

    transition.finished.finally(() => {
      isTransitioning.current = false;
    });
  }, [theme]);

  useEffect(() => {
    const savedTheme = localStorage.getItem('theme') || 'dark';
    setTheme(savedTheme);
  }, []);

  useEffect(() => {
    localStorage.setItem('theme', theme);

    if (theme === 'dark') {
      document.documentElement.classList.add('dark');
      document.documentElement.classList.remove('light');
    } else {
      document.documentElement.classList.add('light');
      document.documentElement.classList.remove('dark');
    }
  }, [theme]);

  return (
    <ThemeContext.Provider value={{ theme, toggleTheme, toggleThemeWithTransition }}>
      {children}
    </ThemeContext.Provider>
  );
}

export const useTheme = () => useContext(ThemeContext); 