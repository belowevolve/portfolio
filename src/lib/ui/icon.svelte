<script lang="ts">
	import type { SvelteHTMLElements } from 'svelte/elements';
	import type { ClassValue } from 'svelte/elements';
	let {
		icon,
		type = 'default',
		class: className,
		...rest
	}: {
		icon: ClassValue;
		type?: 'default' | 'color';
		class?: ClassValue;
	} & SvelteHTMLElements['svg'] = $props();
</script>

<svg class={[type === 'default' ? 'iconify' : 'iconify-color', icon, className]} {...rest}></svg>
