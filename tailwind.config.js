/** @type {import('tailwindcss').Config} */
module.exports = {
    // ... existing code ...
    theme: {
        extend: {
            animation: {
                'gradientBG': 'gradientBG 15s ease infinite',
            },
            keyframes: {
                gradientBG: {
                    '0%, 100%': {
                        'transform': 'translateX(0%)'
                    },
                    '50%': {
                        'transform': 'translateX(-50%)'
                    }
                }
            }
        }
    }
    // ... existing code ...
}