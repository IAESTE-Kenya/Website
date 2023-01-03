/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    screens: {
      sm: '480px',
      md: '768px',
      lg: '976px',
      xl: '1440px',
    },
    extend: {
      lineHeight: {
        "1": "4vw"
      },
      fontSize: {
        sz: '4vw',
        szsm: '2vw',
        szmd: '3vw'
      },
      colors: {
        navColor: '#0b3d59',
        stickyNav: '#0b3d59',
        borderColor: '#686a10',
        whiteBg: "rgba(255, 255, 255, 0.7)",
        textColor: "#343d48",
        headerColor: "#0F2137",
        spanColor: "#244886",
        imgColor: 'rgba(13,110,253,0.1)',
        hoverColor: 'rgba(36,72,134,0.2)',
        imgColor: 'rgba(36,72,134,0.8)',
        footerColor: '#eeee',
        buttonColor: '#1a84d7',
      },
    },
  },
  plugins: [],
}