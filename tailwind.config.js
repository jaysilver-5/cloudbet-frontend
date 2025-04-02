/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    fontFamily: {
      'sans': ['ui-sans-serif', 'system-ui'],
      'serif': ['ui-serif', 'Georgia'],
      'mono': ['ui-monospace', 'SFMono-Regular'],
      'display': ['Oswald'],
      'body': ['"Open Sans"'],
      'banner-font': ['"Bebas Neue"'],
    },
    backgroundColor: theme => ({
      ...theme('colors'),
      'card': '#1f1f1f',
      'link': '#434343',
      'body': '#171717',
      'white': 'white',
      'progress': '#3A3A3A',
      'choose': '#d9e8ff',
      'choose-dark': '#162235',
      'edit': '#808080',
      'search': '#262626',
      'main': '#1F2630',
      'primary': '#dffd51',
      'primary-lighter': '#d1e4ff',
      'secondary': '#8346d4',
      'background': '#141114',
      'on-surface': '#e0e0e0',
      'on-surface-1': '#e0e0e0',
      'on-tertiary-1': '#cca6ff',
      'on-tertiary-2': '#cca6ff',
      'tertiary-2': '#2c2532',
      'surface': '#211c25',
      'surface-1': '#211c25',
      'surface-2': '#26202b',
      'surface-3': '#2c2532',
      'surface-5': '#382e40',
      'outline-2': '#26202b',
      'transparent': 'transparent',
      'brand-purple': '#8d52da',
      'brand-blue': '#2d4be6',
      'brand-orange': '#ff6b2f',
      'warning': '#b28809',
    }),
    borderColor: theme => ({
      ...theme('colors'),
      'main': '#d3d3d3',
      'create': '#515151',
      'body': '#171717',
      'yellow': '#f8dc8e',
      'blue': '#0095C8',
      'primary': '#dffd51',
      'secondary': '#8346d4',
      'surface-1': '#211c25',
      'surface-2': '#26202b',
      'surface-disabled': '#e0e0e0',
      'tertiary-2': '#2c2532',
      'outline-1': '#211c25',
    }),
    maxHeight: {
      '0': '0',
      '1/4': '25vh',
      '1/2': '50vh',
      '3/4': '75vh',
      '4/5': '80vh',
      'full': '100vh',
    },
    extend: {
      screens: {
        '500': '500px',
        '3xl': '1920px',
      },
      minHeight: {
        '0': '0',
        '1/4': '25vh',
        '1/2': '50vh',
        '3/4': '75vh',
        '4/5': '80vh',
        'full': '100vh',
      },
      spacing: {
        '128': '32rem',
        '320': '80rem'
      },
      colors: {
        app: {
          yellow: {
            light: '#f8dc8e',
            dark: '#916500'
          },
          cyan: {
            DEFAULT: '#0d91a9'
          },
          blue: {
            DEFAULT: '#89E1FF',
            500: '#0095C8',
          },
          green: {
            DEFAULT: '#2EBD85',
          }
        }
      },
      lineHeight: {
        '11': '3rem',
        '12': '3.2rem',
      },
      maxWidth: {
        1920: '1920px',
        1720: '1700px',
        1690: "1690px",
        1660: "1660px"
      },
      borderWidth: {
        1: '1px',
        2: '2px',
      },
      padding: {
        '1px': '1px',
        '2px': '2px',
      },
      width: {
        1660: '1660px',
        1720: '1720px',
        1920: '1920px',
        'lg': '32rem',
      },
      animation: {
        expand: 'expand 1.5s ease-out forwards',
        livePulse: 'livePulse 4s ease-in-out infinite',
        blink: 'blink 3.5s ease-out infinite',
        spring: 'springEffect .8s cubic-bezier(.175,.885,.32,1.275) forwards',
        slideFromRight: 'slideFromRight .15s ease-out',
        slideFromLeft: 'slideFromLeft .15s ease-out',
      },
      keyframes: {
        livePulse: {
          '0%': { transform: 'scale(0)' },
          '100%': { transform: 'scale(1)', opacity: 0 },
        },
        blink: {
          '0%': { opacity: 1 },
          '60%': { opacity: 0.4 },
          '70%': { opacity: 0.4 },
          '100%': { opacity: 1 },
        },
        springEffect: {
          '0%': { transform: 'scale(.8)' },
          '70%': { transform: 'scale(1)' },
          '100%': { transform: 'scale(1)' },
        },
        slideFromRight: {
          '30%': { transform: 'translateX(30px)', opacity: 0 },
          '100%': { transform: 'translateX(0)', opacity: 1 },
        },
        slideFromLeft: {
          '30%': { transform: 'translateX(-30px)', opacity: 0 },
          '100%': { transform: 'translateX(0)', opacity: 1 },
        }
      },
      animationDelay: {
        0: '0s'
      },
      size: {
        'icon-xs': '1rem',
        'icon-s': '1.25rem',
        'icon-m': '1.5rem',
        'icon-l': '1.75rem',
        'icon-xl': '2rem',
      },
      borderRadius: {
        '3xl': '1.5rem',
        '3xl-0.5': '1.375rem',
        '3xl-1': '1.25rem',
        '4xl': '2rem',
        '4xl-0.5': '1.875rem',
        '4xl-1': '1.75rem',
      },
      colors: {
        'on-tertiary': '#cca6ff',
        'on-tertiary-1': '#cca6ff',
        'on-tertiary-3': '#a6a6a6',
        'on-surface': '#e0e0e0',
        'on-surface-1': '#e0e0e0',
        'on-surface-2': '#c4c4c4',
        'on-surface-3': '#8f8f8f',
        'on-surface-disabled': '#696969',
        'surface-disabled': '#696969',
        'surface-1': '#211c25',
        'surface-2': '#26202b',
        'surface-3': '#2c2532',
        'surface-5': '#382e40',
        'transparent': 'transparent',
        'primary': '#dffd51',
        'primary-lighter': '#d1e4ff',
        'on-primary': '#000000',
        'on-warning': '#292210',
        'secondary': '#8346d4',
        'success': '#55a370',
        'background': '#141114',
        'on-background': '#e0e0e0',
        'outline': '#26202b',
        'brand-purple': '#8d52da',
        'brand-purple-light': '#cca6ff',
        'brand-blue': '#2d4be6',
        'brand-blue-light': '#99aaff',
        'brand-blue-pale': '#ccd0e5',
        'brand-orange': '#ff6b2f',
        'blackish': '#1a1c1e',
      },
      aspectRatio: {
        '1': '1'
      },
      fontSize: {
        'xl': ['1.125rem'],
        '2xl': ['1.266rem']
      },
      zIndex: {
        'sideSheet': '1001',
        'bottomRailSheet': '1005',
        'navbarMobile': '60',
      },
      blur: {
        '5xl': '150px',
      }
    },
  },
  variants: {
    extend: {
      background: ['card', 'link', 'body', 'progress', 'search'],
      color: ['white', 'edit']
    },
  }
}
