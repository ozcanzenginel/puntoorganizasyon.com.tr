/** @type {import('tailwindcss').Config} */
export default {
    content: [
        "./index.html",
        "./src/**/*.{js,ts,jsx,tsx}",
    ],
    theme: {
        extend: {
            colors: {
                brutal: {
                    cement: '#EBEBEB',
                    black: '#111111',
                    red: '#E53E3E',
                }
            },
            fontFamily: {
                sans: ['Inter', 'sans-serif'],
                mono: ['JetBrains Mono', 'monospace'],
            },
            letterSpacing: {
                tighter: '-0.05em',
                widest: '0.1em',
            }
        },
    },
    plugins: [],
}
