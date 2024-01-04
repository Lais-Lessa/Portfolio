import type { Config } from 'tailwindcss'

const config: Config = {
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    fontFamily: {
      sans: ['var(--font-inter)', 'sans-serif'],
    },
    extend: {
      backgroundImage: {
        'background-image': "url('/images/background.png')",
      },
      fontFamily: {
        mono: ['var(--font-plex-mono)', 'monospace'],
      },
      boxShadow: {
        'button': '0px 0px 68px 7px rgba(0,191,255,0.4)',
      },
      colors: {
        white:{
          'white': '#ffffff',
          'silver': '#fbf9ec',
        },
        gray:{
          'gray-primary': '#a6a1a1',
          'gray-secundary': '#efe7e5',
          'logo': '#11111f'
        },
        blue: {
          'blue-bg': '#0e2549',
        }
      },
    },
  },
  plugins: [
    require('tailwindcss-gradients'),
  ],
}
export default config
