const config = {
	content: [
		'./src/**/*.{html,js,svelte,ts}',
		'.node_modeules/svelde-ui/dist/**/*.{html,js,svelte,ts}'
	],

	theme: {
		extend: {}
	},

	plugins: [require('daisyui')]
};

module.exports = config;
