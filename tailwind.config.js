/** @type {import('tailwindcss').Config} */
module.exports = {
  purge: ['./src/**/*.{js,jsx,ts,tsx}', './public/index.html'],
  theme: {
    screens: {
      sm: '480px',
      md: '768px',
      lg: '976px',
      xl: '1440px',
    },
    // Define any color names that will be referenced here
    colors: {
      'blue': '#1fb6ff',
      'purple': '#7e5bef',
      'pink': '#ff49db',
      'orange': '#ff7849',
      'green': '#13ce66',
      'yellow': '#ffc82c',
      'gray-dark': '#273444',
      'gray': '#8492a6',
      'gray-light': '#d3dce6',
      'darkside': '#0f172a',
      'slate' : '#f8fafc',
      'skyblue': '#3498db',
      'lightgray' : "#cccccc",
      'middarkside3' : "#1b294b",
      'black': '#030712',

      // teal variations
      'teal' : "#00cccc",
      'teal2' : "#00b3b3",
      'teal3' : "#009999",
      'teal4' : "#008080",
      
      // dark blue from tailwinds website
      'tailwinds' : '#102653',
      
      // colors from ig gradient posts
      'ig-1' : '#00EAFF',
      'ig-2' : '#4D3589',
      'ig-3' : '#BADAFF',
      'ig-4' : '#0025CE',
      'ig-5' : '#07D2FB',
      'ig-6' : '#0819B5',
      'ig-7' : '#21FCC7',
      
      // background dark sides
      'middarkside2': "#0e1525",
      
      // background mid color
      'teal5' : "#006666",
      
    },
    fontFamily: {
      sans: ['Graphik', 'sans-serif'],
      serif: ['Merriweather', 'serif'],
    },
    extend: {
      spacing: {
        '128': '32rem',
        '144': '36rem',
      },
      borderRadius: {
        '4xl': '2rem',
      },
      // Not being used currently
      backgroundImage: {
        'pattern': '/public/trianglify.jpeg',
      }
    }
  },
  plugins: [],
}