module.exports = {
  content: [
  	"./index.html",
    "./src/**/*.{vue,tsx}",
  ],
  theme: {
    extend: {
	    colors: {
        'primary': {
          100: '#026aa7',
          200: '#e4f0f6',
          300: '#172b4d',
          400: '#5e6c84'
        }
	    },
    },
  },
  mode: 'jit',
  corePlugins: {
    preflight: false
  },
  plugins: [
  	require('@tailwindcss/forms'),
  	require('@tailwindcss/typography')
  ],
}