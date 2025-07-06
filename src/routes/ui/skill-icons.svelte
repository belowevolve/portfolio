<script lang="ts">
	import Icon from '$lib/ui/icon.svelte';
	import * as Tooltip from '$lib/components/ui/tooltip/index';
	type Skill = {
		icon: string;
		tooltip: string;
		side: 'top' | 'bottom';
	};
	const SKILLS: Skill[] = [
		{
			icon: 'skill-icons--typescript',
			tooltip: 'TypeScript',
			side: 'top'
		},
		{
			icon: 'skill-icons--react-dark',
			tooltip: 'React',
			side: 'top'
		},
		{
			icon: 'skill-icons--tailwindcss-dark',
			tooltip: 'TailwindCSS',
			side: 'top'
		},
		{
			icon: 'logos--react-query-icon',
			tooltip: 'Tanstack Query',
			side: 'bottom'
		},
		{
			icon: 'devicon--zustand',
			tooltip: 'Zustand',
			side: 'bottom'
		},
		{
			icon: 'skill-icons--svelte',
			tooltip: 'Svelte',
			side: 'bottom'
		}
	];
</script>

<div class="grid grid-cols-3 items-start gap-1">
	<Tooltip.Provider>
		{#each SKILLS as skill}
			<Tooltip.Root delayDuration={200}>
				<Tooltip.Trigger>
					{#snippet child({ props })}
						<Icon {...props} type="color" icon={skill.icon} />
					{/snippet}
				</Tooltip.Trigger>
				<Tooltip.Content side={skill.side}>{skill.tooltip}</Tooltip.Content>
			</Tooltip.Root>
		{/each}
	</Tooltip.Provider>
</div>
