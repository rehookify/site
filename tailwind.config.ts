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
      typography: ({ theme }: any) => ({
        DEFAULT: {
          css: {
            pre: {
              padding: '1rem 1.5rem',
              lineHeight: '2',

              border: '1px solid',

              '&[data-theme="light"]': {
                backgroundColor: theme('colors.white'),
                borderColor: theme('colors.zinc[300]'),
              },

              '&[data-theme="dark"]': {
                backgroundColor: theme('colors.zinc[800]'),
                borderColor: theme('colors.zinc[700]'),
              },

              '> code': {
                display: 'grid',
                fontSize: 'inherit',
                boxShadow: 'none',
              },
              '[data-line]': {
                margin: '0 -1.5rem',
                padding: '0 1.5rem',
              },
              'code[data-theme="light"] [data-highlighted-line]': {
                borderLeft: `1px solid ${theme('colors.zinc[900]')}`,
                backgroundColor: theme('colors.zinc[100]'),
              },
              'code[data-theme="dark"] [data-highlighted-line]': {
                borderLeft: `1px solid ${theme('colors.zinc[100]')}`,
                backgroundColor: theme('colors.zinc[600]/0.5'),
              },
            },
          },
        },
      }),
    },
  },
  plugins: [require('@tailwindcss/typography')],
};

export default config;
