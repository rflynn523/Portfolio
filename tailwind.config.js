/** @type {import('tailwindcss').Config} */
module.exports = {
  purge: ["./src/**/*.{js,jsx,ts,tsx}", "./public/index.html"],
  theme: {
    screens: {
      sm: "480px",
      md: "768px",
      lg: "976px",
      xl: "1440px",
    },
    // Define any color names that will be referenced here
    colors: {
      blue: "#1fb6ff",
      purple: "#7e5bef",
      pink: "#ff49db",
      orange: "#ff7849",
      green: "#13ce66",
      yellow: "#ffc82c",
      "gray-dark": "#273444",
      gray: "#8492a6",
      "gray-light": "#d3dce6",
      darkside: "#0f172a",
      slate: "#f8fafc",
      skyblue: "#3498db",
      lightgray: "#cccccc",
      middarkside3: "#1b294b",
      black: "#030712",
      transparent: "#00000000",

      "app-text-color": "#030712",
      "app-text-color-slate": "#f8fafc",
      // teal variations
      teal: "#00cccc",
      teal2: "#00b3b3",
      teal3: "#009999",
      teal4: "#008080",

      // dark blue from tailwinds website
      tailwinds: "#102653",

      // colors from ig gradient posts
      "ig-1": "#00EAFF",
      "ig-2": "#4D3589",
      "ig-3": "#BADAFF",
      "ig-4": "#0025CE",
      "ig-5": "#07D2FB",
      "ig-6": "#0819B5",
      "ig-7": "#21FCC7",

      // background dark sides
      middarkside2: "#0e1525",

      // background mid color
      teal5: "#006666",

      // Tooltip
      "tooltip-bg-color": "#008080", // Teal4
      "tooltip-text-color": "#d3dce6", // Light Gray

      // Nav Bar
      "nav-bar-color1": "#0b6477",
      "nav-bar-color2": "#14919b",
      "nav-bar-color3": "#0ad1c8", // 70 opacity
      "nav-bar-color4": "#45dfb1",
      "nav-bar-color5": "#80ed99", // 50 opacity

      "nav-bar-font-color": "#f0fdfa",
      "name-color": "#0e1525",

      // Logo Colors
      "linked-in-blue": "#0077B5",
      "github-green": "#2dba4e",
      "adobe-red": "#FF0000",
    },
    fontFamily: {
      sans: ["Graphik", "sans-serif"],
      serif: ["Merriweather", "serif"],
    },
    extend: {
      spacing: {
        128: "32rem",
        144: "36rem",
      },
      borderRadius: {
        "4xl": "2rem",
      },
      // Not being used currently
      backgroundImage: {
        pattern: "/public/trianglify.jpeg",
      },
      fontFamily: {
        poppins: ["Poppins", "sans-serif"],
      },
    },
  },
  plugins: [],
};
