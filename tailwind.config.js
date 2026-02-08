/** @type {import('tailwindcss').Config} */
export default {
    content: [
        "./index.html",
        "./src/**/*.{js,ts,jsx,tsx}",
    ],
    theme: {
        extend: {
            colors: {
                nike: {
                    black: '#111111',
                    blackacc: '#1A1A1A',
                    white: '#FFFFFF',
                    volt: 'rgb(var(--nike-accent) / <alpha-value>)',
                    orange: 'rgb(var(--nike-secondary) / <alpha-value>)',
                    grey: '#B2B2B2',
                    darkgrey: '#303030',
                    green: '#00D166'
                }
            },
            fontFamily: {
                heading: ['Anton', 'sans-serif'],
                sans: ['Inter', 'sans-serif'],
            }
        },
    },
    plugins: [],
}
