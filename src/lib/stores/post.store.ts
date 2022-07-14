import { writable } from 'svelte/store';
import type { Post } from '$lib/interfaces/post.interface';

const makePostStore = () => {
	const { subscribe, set } = writable([]);

	return {
		subscribe,
		setPosts: (posts: Post[]) => set([...posts])
	};
};

export const postStore = makePostStore();
