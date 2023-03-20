/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./src/**/*.{html,js,svelte,ts}'],
  theme: {
    extend: {
    	colors: {
    			"primary-800":"#030527",
				"primary-700":"#19195C",
				"primary-600":"#2F2F7D",
				"primary-500":"#4848BC",
				"primary-400":"#6363F1",
				"primary-300":"#7373FF",
				"primary-200":"#A3AEFD",
				"primary-100":"#C2C9FD",
				"primary-50":"#EEEDFF",
				"primary-light":"#F6F5FF",
     		 },
    	boxShadow: {
				'2xl': '4px 5px 1px rgba(194, 201, 253, 0.47)',
				'3xl': '6px 7px 1px rgba(194, 201, 253, 0.47)',
				'4xl': '15px 16px 1px rgba(194, 201, 253, 0.47)',
			},
	  screens:{
				'tall': { 'raw': '(min-height: 800px)'}
	  		},	
    },
  },
  plugins: [
	require('@tailwindcss/typography'),
  ],
}
