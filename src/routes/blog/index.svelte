<script lang="ts">
	import Seo from '$lib/components/Seo/Seo.svelte';
	import { onMount } from 'svelte';
	import type { Post } from '$lib/interfaces/post.interface';
	import { Firework } from 'svelte-loading-spinners';
	import { postStore } from '$lib/stores/post.store';
	import { getPosts } from '$lib/services/hygraph.service';

	let posts: Post[] | undefined;

	onMount(async () => {
		if ($postStore.length > 0) {
			posts = $postStore;
		} else {
			try {
				posts = await getPosts();
				postStore.setPosts(posts);
			} catch (e) {
				posts = [];
				console.error('error fetching posts', e);
			}
		}
	});
</script>

<Seo title="Blog | For Me" description="A blog, by me." slug="/blog" />

<section id="BlogPage">
	{#if !posts}
		<Firework />
	{:else if posts && posts.length <= 0}
		<p>No Posts! Come Back Later</p>
	{:else}
		{#each posts as post}
			<p>{post.title}</p>
		{/each}
	{/if}
</section>
