import preprocess from 'svelte-preprocess';
import vercel from '@sveltejs/adapter-vercel';

const config = {
	preprocess: preprocess(),
	kit: {
		adapter: vercel(),
		target: '#svelte',
		files: {
			lib: 'src'
		}
	}
};

export default config;
