/** @type {import('tailwindcss').Config} */
module.exports = {
    theme: {
        extend: {
            keyframes: {
                gradientBG: {
                    '0%': { backgroundPosition: '0% 50%' },
                    '50%': { backgroundPosition: '100% 50%' },
                    '100%': { backgroundPosition: '0% 50%' },
                },
            },
            animation: {
                gradientBG: 'gradientBG 5s infinite linear',
            },
            backgroundSize: {
                '200%': '200% 200%',
            },
        },
    },
    plugins: [],
};



