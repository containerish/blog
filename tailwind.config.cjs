module.exports = {
  content: ['./src/**/*.{html,js,svelte,ts}'],
  theme: {
    fontFamily: {
      'sans': ['ui-sans-serif', 'system-ui'],
      'serif': ['ui-serif', 'Georgia'],
      'mono': ['ui-monospace', 'SFMono-Regular'],
      'poppins': ['Poppins'],
      'jetbrains-mono': ['Jetbrains Mono'],
      'lato': ['Lato'],
      'body': ['"Open Sans"'],
    },
    extend: {
      colors:{
        "cream-50": "#e5e2e0",
        "brown-50": "#ddd3cd",
        "brown-100": "#baa89d",
        "brown-200": "#8c6f5f",
        "brown-300": "#55443A",
        "brown-400": "#241D19",
      },
    },
  },
  plugins: [
      require("@tailwindcss/typography")
  ],
}
