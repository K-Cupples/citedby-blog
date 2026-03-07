/** @type {import('tailwindcss').Config} */
export default {
  content: ['./src/**/*.{astro,html,js,jsx,md,mdx,ts,tsx}'],
  theme: {
    extend: {
      colors: {
        brand: {
          green: 'hsl(120, 82%, 66%)',
          'green-dark': 'hsl(121, 59%, 50%)',
          blue: 'hsl(216, 100%, 50%)',
        },
        page: {
          bg: 'hsl(36, 60%, 97%)',
          fg: 'hsl(222, 47%, 11%)',
          muted: 'hsl(220, 10%, 46%)',
          border: 'hsl(30, 10%, 85%)',
        },
      },
      fontFamily: {
        sans: [
          'Inter',
          '-apple-system',
          'BlinkMacSystemFont',
          'Segoe UI',
          'Roboto',
          'sans-serif',
        ],
        mono: ['Roboto Mono', 'SF Mono', 'Consolas', 'monospace'],
      },
      typography: {
        DEFAULT: {
          css: {
            maxWidth: '72ch',
            color: 'hsl(222, 47%, 11%)',
            a: {
              color: 'hsl(216, 100%, 50%)',
              '&:hover': { color: 'hsl(121, 59%, 50%)' },
            },
            h1: { color: 'hsl(222, 47%, 11%)' },
            h2: { color: 'hsl(222, 47%, 11%)' },
            h3: { color: 'hsl(222, 47%, 11%)' },
            strong: { color: 'hsl(222, 47%, 11%)' },
            code: {
              color: 'hsl(222, 47%, 11%)',
              backgroundColor: 'hsl(36, 30%, 95%)',
              borderRadius: '0.25rem',
              padding: '0.125rem 0.25rem',
            },
          },
        },
      },
    },
  },
  plugins: [require('@tailwindcss/typography')],
};
