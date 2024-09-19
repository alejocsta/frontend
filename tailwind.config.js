module.exports = {
  darkMode: 'selector',
  content: [
    './src/**/*.{astro,html,js,jsx,ts,tsx,vue,svelte}', 
  ],
  theme: {
    extend: {
      fontFamily: {
        LemonMedium: ['LEMONMILK-Medium', 'sans-serif'] // Agregué sans-serif como fallback
      }
    },
  },
  plugins: [],
}
