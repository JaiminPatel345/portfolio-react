import flattenColorPalette from "tailwindcss/lib/util/flattenColorPalette";
import daisyui from "daisyui";

/** @type {import('tailwindcss').Config} */
export default {
    content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
    darkMode: "class",
    theme: {
        extend: {
            colors: {
                primary: {
                    50: "#eff6ff",
                    100: "#dbeafe",
                    200: "#bfdbfe",
                    300: "#93c5fd",
                    400: "#60a5fa",
                    500: "#3b82f6",
                    600: "#2563eb",
                    700: "#1d4ed8",
                    800: "#1e40af",
                    900: "#1e3a8a",
                    950: "#172554",
                },
                secondary: {
                    50: "#faf5ff",
                    100: "#f3e8ff",
                    200: "#e9d5ff",
                    300: "#d8b4fe",
                    400: "#c084fc",
                    500: "#a855f7",
                    600: "#9333ea",
                    700: "#7e22ce",
                    800: "#6b21a8",
                    900: "#581c87",
                    950: "#3b0764",
                },
            },
            animation: {
                "text-gradient": "text-gradient 1.5s linear infinite",
                "background-shine": "background-shine 2s linear infinite",
            },
            keyframes: {
                "text-gradient": {
                    "0%, 100%": {
                        "background-size": "200% 200%",
                        "background-position": "left center",
                    },
                    "50%": {
                        "background-size": "200% 200%",
                        "background-position": "right center",
                    },
                },
                "background-shine": {
                    "from": { backgroundPosition: "0 0" },
                    "to": { backgroundPosition: "-200% 0" }
                }
            },
        },
    },
    plugins: [
        daisyui,
        addVariablesForColors,
        function({ addUtilities }) {
            addUtilities({
                '.text-gradient': {
                    '@apply text-3xl md:text-4xl font-bold text-center bg-gradient-to-r from-blue-500 to-purple-500 dark:from-blue-400 dark:to-purple-400 bg-clip-text text-transparent animate-text-gradient': {}
                },
                '.card-shine': {
                    '@apply relative overflow-hidden before:absolute before:inset-0 before:-translate-x-full before:animate-background-shine before:bg-gradient-to-r before:from-transparent before:via-white/20 before:to-transparent': {}
                }
            });
        }
    ],
    daisyui: {
        themes: [
            {
                light: {
                    ...require("daisyui/src/theming/themes")["light"],
                    "primary": "#3b82f6",
                    "primary-focus": "#2563eb",
                    "secondary": "#a855f7",
                    "secondary-focus": "#9333ea",
                },
                dark: {
                    ...require("daisyui/src/theming/themes")["dark"],
                    "primary": "#60a5fa",
                    "primary-focus": "#3b82f6",
                    "secondary": "#c084fc",
                    "secondary-focus": "#a855f7",
                }
            }
        ],
    }
};

function addVariablesForColors({ addBase, theme }) {
    let allColors = flattenColorPalette(theme("colors"));
    let newVars = Object.fromEntries(
        Object.entries(allColors).map(([key, val]) => [`--${key}`, val])
    );

    addBase({
                ":root": newVars,
            });
}