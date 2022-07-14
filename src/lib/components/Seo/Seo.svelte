<script lang="ts">
	export let title: string | undefined = 'Title';
	export let ogTitle: string | undefined = 'Title';
	export let twitterTitle: string | undefined = 'Title';
	export let description: string | undefined = 'Description';
	export let ogDescription: string | undefined = 'Description';
	export let twitterDescription: string | undefined = 'Description';
	export let image: string | undefined = '';
	export let ogImageWidth: string | undefined = '1200';
	export let ogImageHeight: string | undefined = '630';
	export let alt: string | undefined = 'default image alt';
	export let ogImage: string | undefined = '';
	export let ogImageAlt: string | undefined = 'default alt';
	export let ogImageType: string | undefined = '';
	export let twitterImage: string | undefined = '';
	export let twitterImageAlt: string | undefined = '';
	export let robots: string | undefined = 'index';
	export let googlebot: string | undefined = 'index';
	export let url: string | undefined = 'https://example.com';
	export let ogType: string | undefined = 'website';
	export let slug: string | undefined = '/';
</script>

<svelte:head>
	<!-- General Tags -->
	<title>{title}</title>
	<meta name="description" content={description} />
	<meta name="robots" content={robots} />
	<meta name="googlebot" content={googlebot || robots} />

	<!-- Open Graph Tags -->
	<meta property="og:title" content={ogTitle || title} />
	<meta property="og:description" content={ogDescription || description} />
	<meta property="og:type" content={ogType} />
	<meta property="og:image" content={ogImage ? `${url}${ogImage}` : `${url}${image}`} />
	<meta property="og:image:alt" content={ogImageAlt ? ogImageAlt : alt} />
	{#if ogImageWidth}
		<meta property="og:image:width" content={ogImageWidth} />
		<meta property="og:image:height" content={ogImageHeight} />
	{/if}
	{#if ogImageType}
		<meta property="og:image:type" content={ogImageType} />
	{/if}

	<!-- Twitter Tags -->
	<meta property="twitter:title" content={twitterTitle || title} />
	<meta property="twitter:description" content={twitterDescription || description} />
	<meta
		property="twitter:image"
		content={twitterImage ? `${url}${twitterImage}` : `${url}${image}`}
	/>
	<meta property="twitter:image:alt" content={twitterImageAlt ? twitterImageAlt : alt} />
	<meta property="twitter:card" content="summary" />

	<!-- Url tags-->
	{#if url}
		<meta property="og:url" content={`${url}${slug}`} />
		<link rel="canonical" href={`${url}${slug}`} />
	{/if}
</svelte:head>
