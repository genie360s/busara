import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      backgroundImage: {
        'hero-pattern': "url('/./public/images/image-a.jpg')",
      },
      animation: {
        'button-bounce' : 'button-bounce 1s ease-in-out infinite',
      },
      keyframes :{
        'button-bounce' : {
          '0%, 100%': {transform: 'translateY(0)'},
          '50%': {transform: 'translateY(-5px)'},
        },
      },
    },
  },
  plugins: [],
};
export default config;
