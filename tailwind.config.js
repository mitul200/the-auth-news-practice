/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  daisyui: {
    themes: [
      {
        mytheme: {
        
"primary": "#0000ff",
        
"secondary": "#009dff",
        
"accent": "#a73100",
        
"neutral": "#19141d",
        
"base-100": "#fbfbff",
        
"info": "#008afe",
        
"success": "#00cc51",
        
"warning": "#c42f00",
        
"error": "#d9004e",
        },
      },
    ],
  },
  plugins: [require("daisyui")],
}

