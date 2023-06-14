const defaultTheme = require('tailwindcss/defaultTheme');

const withMT = require("@material-tailwind/react/utils/withMT");

/** @type {import('tailwindcss').Config} */
module.exports = withMT({
    content: [
        './vendor/laravel/framework/src/Illuminate/Pagination/resources/views/*.blade.php',
        './storage/framework/views/*.php',
        './resources/views/**/*.blade.php',
        './resources/js/**/*.jsx',
        "./node_modules/@babel@material-tailwind/react/components/**/*.{js,ts,jsx,tsx}",
        "./node_modules//@material-tailwind/react/theme/components/**/*.{js,ts,jsx,tsx}"
    ],

    theme: {
        extend: {
            fontFamily: {
                sans: ['Nunito', ...defaultTheme.fontFamily.sans],
                serif: ['Caladea', ...defaultTheme.fontFamily.serif]
            },
        },
    },

    plugins: [require('@tailwindcss/forms')],
});
