/** @type {import('tailwindcss').Config} */
const colors = require("tailwindcss/colors");

const themeColors = {
  primary: {
    1: "rgba(0, 18, 164, 0.1)",
    2: "rgba(0, 168, 164, 0.2)",
    3: "rgba(0, 168, 164, 0.4)",
    4: "rgba(0, 168, 164, 0.6)",
    5: "rgba(0, 168, 164, 1)",
    6: "#008790",
    7: "#006678",
  },
  gray: {
    1: "#f4f4f6",
    2: "#e9e9ed",
    3: "#dddde3",
    4: "#d2d2da",
    5: "#c7c7d1",
    6: "#bcbcc8",
    8: "#a5a5b6",
    12: "#71738b",
    22: "#0d0f35",
  },
};

const theme = {
  bgColors: {
    primary: colors.white,
    secondary: themeColors.gray[1],
    tertiary: themeColors.gray[22],
  },

  textColors: {
    primary: themeColors.gray[22],
    secondary: themeColors.gray[12],
    tertiary: themeColors.gray[6],
    disable: themeColors.gray[6],
  },
  colors: {
    main: themeColors.primary[5],
    light: themeColors.gray[1],
    dark: themeColors.gray[7],
    white: colors.white,
  },
};

module.exports = {
  content: ["./src/**/*.{html,js}"],
  theme: {
    extend: {
      colors: {
        ...theme.colors,
      },
      textColor: {
        ...theme.textColors,
      },
      backgroundColor: {
        ...theme.bgColors,
      },
      fontFamily: {
        centra: ["CentraNo2", "sans-serif"],
      },
      height: {
        header: "5rem",
      },
      keyframes: {
        slideDown: {
          "0%": { transform: "translateY(-100%)", opacity: 0 },
          "100%": { transform: "translateY(0)", opacity: 1 },
        },

        slideUp: {
          "0%": { transform: "translateY(0)", opacity: 1 },
          "100%": { transform: "translateY(-100%)", opacity: 0 },
        },
        fadeIn_to_right: {
          "0%": { transform: "translateX(-100%)", opacity: 0 },
          "100%": { transform: "translateX(0)", opacity: 1 },
        },
        fadeIn_to_left: {
          "0%": { transform: "translateX(100%)", opacity: 0 },
          "100%": { transform: "translateX(0)", opacity: 1 },
        },
        zoomOut: {
          "0%": { transform: "scale(0)", opacity: 0.8 },
          "50%": { transform: "scale(1.3)", opacity: 1 },
          "100%": { transform: "scale(1)", opacity: 1 },
        },
      },
      animation: {
        slideDown: "slideDown 400ms ease-in-out",
        slideUp: "slideUp 400ms ease-in-out",
        fadeIn_to_right: "fadeIn_to_right 800ms ease-in-out",
        fadeIn_to_left: "fadeIn_to_left 600ms ease-in-out",
        zoomOut: "zoomOut 600ms ease-in-out",
      },
      transitionProperty: {
        max_height: "max-height",
        spacing: "margin, padding",
      },
      spacing: {
        "padding-page": "13rem",
        "padding-page-mobile": "1.25rem",
        "padding-page-tablet": "3.75rem",
        "gutter-section-sm": "6.5rem",
        "gutter-section-md": "10rem",
      },
    },
  },
  plugins: [],
};
