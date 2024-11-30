import flattenColorPalette from "tailwindcss/lib/util/flattenColorPalette";
import daisyui from "daisyui";

/** @type {import('tailwindcss').Config} */
export default {
    content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
    darkMode: "class",
    theme: {
        extend: {},
    },
    plugins: [
        daisyui,
        addVariablesForColors,
        function({ addUtilities }) {
            addUtilities({
                             '.text-mytext': {
                                 '@apply text-3xl md:text-4xl font-bold mb-12 text-center bg-gradient-to-r from-blue-400 to-purple-500 bg-clip-text text-transparent': {}
                             }
                         });
        }
    ]
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