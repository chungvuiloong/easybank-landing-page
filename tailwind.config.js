/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
 
    // Or if using `src` directory:
    "./src/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    container: {
      padding: {
        DEFAULT: '1.5rem',
        sm: '1.5rem',
        lg: '4rem',
        xl: '5rem',
        '2xl': '6rem',
      },
    },
    extend: {
      colors: {
        'Dark-Blue': 'hsl(233, 26%, 24%)',
        'Lime-Green': 'hsl(136, 65%, 51%)',
        'Bright-Cyan': 'hsl(192, 70%, 51%)',

        //  Neutral
        'Grayish-Blue': 'hsl(233, 8%, 62%)',
        'Light-Grayish-Blue': 'hsl(220, 16%, 96%)',
        'Very-Light-Gray': 'hsl(0, 0%, 98%)',
        'White': 'hsl(0, 0%, 100%)'
      }
    },
  },
  plugins: [require("daisyui")],
}