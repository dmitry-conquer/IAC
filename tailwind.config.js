module.exports = {
  content: ["./src/scss/**/*.scss", "./src/**/*.html"],
  theme: {
    container: {
      center: true,
      padding: "1rem",
    },
    screens: {
      sm: "640px",
      md: "768px",
      lg: "1024px",
      xl: "1280px",
      "2xl": "1352px",
    },
    extend: {
      fontSize: {
        sm: "0.875rem",
        base: "1rem",
        md: "1.125rem",
        lg: "1.25rem",
        xl: "1.5rem",
        "2xl": "1.75rem",
        "3xl": "1.875rem",
        "4xl": "2rem",
        "5xl": "2.5rem",
        "6xl": "3.25rem",
        "7xl": "5rem",
        "8xl": "5.875rem",
      },
      colors: {
        primary: {
          DEFAULT: "#19417B",
          "light": "#EDEFF4",
          "dark": "#0C1A3B"
        },
        light: {
          DEFAULT: "#F5F5F5"
        }
      },
    },
    fontFamily: {
      grotesque: ["Grotesque", "sans-serif"],
    },
  },
  future: {
    // hoverOnlyWhenSupported: true,
  },
  // plugins: [require("@tailwindcss/typography")],
};
