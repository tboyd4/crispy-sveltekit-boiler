import preprocess from 'svelte-preprocess';
import node from '@sveltejs/adapter-vercel';

/** @type {import('@sveltejs/kit').Config} */
const config = {
	preprocess: preprocess(),

	kit: {
		target: '#svelte',
		lib: 'src',
		adapter: node()
	}
};

export default config;
