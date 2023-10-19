import type { Config } from 'tailwindcss'

const config: Config = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
    './app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      backgroundImage: {
        'gradient-radial': 'radial-gradient(var(--tw-gradient-stops))',
        'gradient-conic':
          'conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))',
      },
      colors: {
        pbrown: {
          DEFAULT: "hsl(var(--themeContrast1) / <alpha-value>)",
        },
        pyellow: {
          DEFAULT: 'hsl(var(--theme1) / <alpha-value>)',
        },
        pgold: {
          DEFAULT: 'hsl(var(--theme2) / <alpha-value>)',
        },
        pred: {
          DEFAULT: 'hsl(var(--theme3) / <alpha-value>)',
        },
        
      },
    },
  },
  plugins: [],
}
export default config
