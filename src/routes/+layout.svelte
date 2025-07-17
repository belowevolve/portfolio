<script lang="ts">
	import '../app.css';
	let { children } = $props();
</script>

<svelte:head>
	<title>Belowevolve</title>
	<meta name="description" content="This is belowevolve portfolio" />
	<meta property="og:title" content="Belowevolve portfolio" />
	<meta property="og:site_name" content="Belowevolve" />
	<meta property="og:url" content="https://belowevolve.vercel.app" />
	<meta property="og:description" content="This is belowevolve portfolio (wip)" />
	<meta property="og:type" content="article" />
	<meta property="og:image" content="https://belowevolve.vercel.app/og-image.png" />
	<meta name="twitter:card" content="summary_large_image" />
</svelte:head>

{@render children()}
