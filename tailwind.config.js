module.exports = {
  content: [
    "./pages/**/*.{html,js,jsx,ts,tsx}",
    "./components/**/*.{js,jsx,ts,tsx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        dark: {
          100: "#202022",
          200: "#2d2e32",
          300: "#25262a",
          400: "#0c0c0c8c",
        },
        green: {
          100: "#64f4ac",
          200: "#64f4acea",
          300: "rgb(100, 244, 172, .7)",
          400: "#05ff82",
          500: "#15eb80",
          600: "rgb(3, 252, 128, .4)",
        },
        red: {
          100: "#rgb(255, 0, 0, .4)",
          200: "#ff0000",
        },
        white: {
          100: "#fff",
          200: "#ccc",
          300: "#777",
        },
        blue: {
          200: "#4898f0",
          400: "#60a5fa",
          600: "#513cef",
          800: "#140e32",
          900: "#60A5FA",
        },
        crimson: {
          100: "#F56991",
          200: "#E73E6C",
          300: "#DC143C",
          400: "#A70F2C",
        },
        orange: {
          100: "#FFA500",
        },
        grey: {
          100: "#71797E",
        },
        pink: {
          100: "rgb(246 165 192)",
          300: "rgb(239 98 145 )",
        },
      },
    },
  },
  plugins: [],
};
