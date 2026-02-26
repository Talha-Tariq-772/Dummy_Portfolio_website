/** @type {import('tailwindcss').Config} */
module.exports = {
  darkMode: "class", // ⭐ REQUIRED FOR DARK MODE ⭐
  
  content: [
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
  ],

  theme: {
    extend: {
      backgroundImage: {
        'gradient-radial': 'radial-gradient(var(--tw-gradient-stops))',
        'gradient-conic':
          'conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))',
      },

      colors: {
        testred: '#ff0000',
      },
    },

    screens: {
      xl: { max: '1400px' },
      lg: { max: '1150px' },
      md: { max: '767px' },
      sm: { max: '639px' },
    },
  },

  plugins: [],
};
