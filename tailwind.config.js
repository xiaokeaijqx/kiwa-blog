/** @type {import('tailwindcss').Config} */
import daisyui from 'daisyui';

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

    ,
    daisyui: {
        themes: ["light", "dark", "cupcake"], // 按需选择主题
        darkTheme: "dark" // 默认暗黑主题名称
    },
    plugins: [daisyui]

    // ... existing code ...
}