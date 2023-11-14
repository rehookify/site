import type { Config } from 'tailwindcss';

const config: Config = {
  content: ['./src/**/*.{js,ts,jsx,tsx,mdx}', './app/**/*.{js,ts,jsx,tsx,mdx}'],
  theme: {
    extend: {
      gridTemplateColumns: {
        header: '2.5rem 1fr 2.5rem',
      },
      fontSize: {
        2: '2rem',
        2.5: '2.5rem',
        3: '3rem',
        4: '4rem',
        5: '5rem',
        6: '6rem',
      },
      maxHeight: {
        106: '30rem',
      },
      maxWidth: {
        content: '1158px',
      },
    },
  },
  plugins: [],
};
export default config;
