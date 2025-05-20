import { clsx } from "clsx";
import { twMerge } from "tailwind-merge";

export function cn(...inputs) {
    return twMerge(clsx(inputs));
}

export const primaryColors = {
  blue: {
    base: 'text-blue-500 dark:text-blue-400',
    hover: 'hover:text-blue-600 dark:hover:text-blue-300',
    bg: 'bg-blue-500/10 dark:bg-blue-400/10',
    bgHover: 'hover:bg-blue-500/20 dark:hover:bg-blue-400/20',
    border: 'border-blue-500/20 dark:border-blue-400/20',
    borderHover: 'hover:border-blue-500/40 dark:hover:border-blue-400/40'
  },
  purple: {
    base: 'text-purple-500 dark:text-purple-400',
    hover: 'hover:text-purple-600 dark:hover:text-purple-300',
    bg: 'bg-purple-500/10 dark:bg-purple-400/10',
    bgHover: 'hover:bg-purple-500/20 dark:hover:bg-purple-400/20',
    border: 'border-purple-500/20 dark:border-purple-400/20',
    borderHover: 'hover:border-purple-500/40 dark:hover:border-purple-400/40'
  }
};
