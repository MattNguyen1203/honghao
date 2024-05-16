/** @type {import('tailwindcss').Config} */
module.exports = {
  darkMode: ['class'],
  content: [
    './pages/**/*.{js,jsx}',
    './components/**/*.{js,jsx}',
    './app/**/*.{js,jsx}',
    './src/**/*.{js,jsx}',
    './sections/**/*.{js,jsx}',
    './layouts/**/*.{js,jsx}',
  ],
  prefix: '',
  theme: {
    extend: {
      screens: {
        '2xl': '1800px',
        xl: '1600px',
        lg: '1024px',
        md: '768px',
        x2xl: {max: '1799px'},
        xxl: {max: '1599px'},
        xlg: {max: '1023px'},
        xmd: {max: '767px'},
        tablet: {min: '768px', max: '1023px'},
      },
      fontFamily: {
        londrina: ['var(--font-londrina-solid)'],
        tripsans: ['var(--font-trip-sans)'],
      },
      colors: {
        border: 'hsl(var(--border))',
        input: 'hsl(var(--input))',
        ring: 'hsl(var(--ring))',
        background: 'hsl(var(--background))',
        foreground: 'hsl(var(--foreground))',
        primary: {
          DEFAULT: 'hsl(var(--primary))',
          foreground: 'hsl(var(--primary-foreground))',
        },
        secondary: {
          DEFAULT: 'hsl(var(--secondary))',
          foreground: 'hsl(var(--secondary-foreground))',
        },
        destructive: {
          DEFAULT: 'hsl(var(--destructive))',
          foreground: 'hsl(var(--destructive-foreground))',
        },
        muted: {
          DEFAULT: 'hsl(var(--muted))',
          foreground: 'hsl(var(--muted-foreground))',
        },
        accent: {
          DEFAULT: 'hsl(var(--accent))',
          foreground: 'hsl(var(--accent-foreground))',
        },
        popover: {
          DEFAULT: 'hsl(var(--popover))',
          foreground: 'hsl(var(--popover-foreground))',
        },
        card: {
          DEFAULT: 'hsl(var(--card))',
          foreground: 'hsl(var(--card-foreground))',
        },
        'orange-normal-hover': '#DA4B19',

        'grey-grey-100': '#C3C3C3',
        'greyscale-0': '#fff',
        'greyscale-5': '#F1F1F1',
        'greyscale-10': '#C5C5C5',
        'greyscale-20': '#A9A9A9',
        'greyscale-40': '#6A6A6A',
        'greyscale-50': '#454545',
        'greyscale-60': '#3F3F3F',
        'greyscale-70': '#313131',
        'greyscale-80': '#262626',
        'orange-normal': '#E64827',
        'orange-hover': '#DA4B19',
        'orange-dark': '#B63E15',
        'orange-darker': '#551D0A',
        'green-light': '#E9F1ED',
        'green-normal': '#122718',
        'green-hover': '#206545',
      },
      borderRadius: {
        lg: 'var(--radius)',
        md: 'calc(var(--radius) - 2px)',
        sm: 'calc(var(--radius) - 4px)',
      },
      keyframes: {
        'accordion-down': {
          from: {height: '0'},
          to: {height: 'var(--radix-accordion-content-height)'},
        },
        'accordion-up': {
          from: {height: 'var(--radix-accordion-content-height)'},
          to: {height: '0'},
        },
      },
      animation: {
        'accordion-down': 'accordion-down 0.2s ease-out',
        'accordion-up': 'accordion-up 0.2s ease-out',
      },
    },
  },
  plugins: [require('tailwindcss-animate')],
}
