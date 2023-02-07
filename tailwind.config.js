/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./*.{html,js}"],
  theme: {
    fontSize: {
      '10xl': '6rem',
      '9xl': '5rem',
      '8xl': '4rem',
      '7xl': '3.5rem',
      '5xl': '3.052rem',
      '4xl': '2.441rem',
      '3xl': '1.953rem',
      '2xl': '1.563rem',      
    },
    lineHeight: {
      "11": "3.5rem",
    },
    screens: {
      sm: "540px",
      // => @media (min-width: 576px) { ... }

      md: "720px",
      // => @media (min-width: 768px) { ... }

      lg: "960px",
      // => @media (min-width: 992px) { ... }

      xl: "1140px",
      // => @media (min-width: 1200px) { ... }

      "2xl": "1320px",
      // => @media (min-width: 1400px) { ... }
    },
    container: {
      center: true,
      padding: "16px",
    },
    extend: {
      colors: {
        black: "#212b36",
        dark: "#090E34",
        "dark-700": "#090e34b3",
        primary: "#2933B3",
        secondary: "#BAD4FF",
        "red-secondary": "#EA3C43",
        "red-tertiary": "#FF7B78",

        secondaryhover: "#A7C8FE",
        "body-color": "#637381",
        warning: "#FBBF24",
        navbar: "#19228F",
        "title-primary": "#0a2540",
        "title-secondary": "#635bff",
        "title-tertiary": "#425466",
      },
      lineHeight: {
        
        '11': '3rem',
      },

      boxShadow: {
        input: "0px 7px 20px rgba(0, 0, 0, 0.03)",
        pricing: "0px 39px 23px -27px rgba(0, 0, 0, 0.04)",
        "switch-1": "0px 0px 5px rgba(0, 0, 0, 0.15)",
        testimonial: "0px 60px 120px -20px #EBEFFD",
      },
      lineHeight: {
        'extra-loose': '2.5',
        '12': '4.6rem',
      },
      margin: {
        '80': '20rem',
        '128': '32rem',

      },

    },
  },
  plugins: [],
}