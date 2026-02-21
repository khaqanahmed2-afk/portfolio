/** @type {import('tailwindcss').Config} */
export default {
    content: [
        "./index.html",
        "./src/**/*.{js,ts,jsx,tsx}",
    ],
    theme: {
        extend: {
            colors: {
                background: '#222222',
                foreground: '#FFFFFF',
                secondary: '#A0A0A0',
                accent: {
                    blue: '#3498db',
                    light: '#5dade2',
                }
            },
            fontFamily: {
                sans: ['Inter', 'sans-serif'],
                headings: ['Space Grotesk', 'sans-serif'],
            },
            backgroundImage: {
                'accent-gradient': 'linear-gradient(to right, #3498db, #5dade2)',
            }
        },
    },
    plugins: [],
}
