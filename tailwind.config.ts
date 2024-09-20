import type { Config } from 'tailwindcss';

const TailwindCssConfig: Config = {
  content: ['./src/**/*.{html,js,ts,jsx,tsx}'],
  theme: {
    extend: {
      colors: {
        accent: {
          1: 'var(--accent1)',
        },
        baseOne: 'var(--baseOne)',
        baseTwo: 'var(--baseTwo)',
        baseThree: 'var(--baseThree)',
        baseFour: 'var(--baseFour)',
      },
    },
  },
  plugins: [],
};

export default TailwindCssConfig;
