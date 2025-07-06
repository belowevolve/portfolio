<script lang="ts">
	import { onClickOutside } from '$lib/click-outside';
	import { TG_LINK } from '$lib/links';
	import SkillIcons from './ui/skill-icons.svelte';
	let cardState = $state<'init' | 'focus'>('init');
</script>

<main class="grid h-svh place-items-center overflow-x-hidden">
	<button
		data-state={cardState}
		class=" card flex size-full flex-col justify-between sm:scale-200"
		onclick={() => {
			switch (cardState) {
				case 'init':
					cardState = 'focus';
					break;
				default:
					cardState = 'init';
			}
		}}>
		<div class="flex items-start justify-between">
			<a
				target="_blank"
				rel="nofollow noopener noreferrer"
				href={TG_LINK}
				onclick={(e) => {
					e.stopImmediatePropagation();
				}}
				class="group relative text-sm italic opacity-80 transition-opacity hover:opacity-100">
				@belowevolve
				<svg class="pointer-events-none absolute -top-0.5 -left-2.5 w-25" viewBox="0 0 170 45">
					<ellipse
						class="transition-all duration-300 ease-in-out [stroke-dasharray:345] [stroke-dashoffset:345] group-hover:[stroke-dashoffset:0]"
						cx="50%"
						cy="50%"
						rx="75"
						ry="20"
						fill="none"
						stroke="#0284c7"
						stroke-width="2"
						stroke-linecap="round"
						stroke-linejoin="round"
						transform="rotate(-2 90 17)" />
				</svg>
			</a>
			<SkillIcons />
		</div>
		<div class="flex flex-col gap-1">
			<p class="leading-none font-semibold">Elisey</p>
			<p class="leading-none">Web Dev</p>
		</div>
		<div>
			<div>Saint Petersburg / Remote - 2500$</div>
		</div>
	</button>
</main>

<style>
	.card {
		background-color: #f9f6f1;
		background-image: url('https://www.transparenttextures.com/patterns/paper-fibers.png');
		height: 200px;
		width: 340px;
		padding: 12px;
		transform: rotateX(60deg) rotateY(0deg) rotateZ(45deg);
		transition: all 0.4s ease;
	}
	.card:hover {
		cursor: pointer;
		transform: rotateX(60deg) rotateY(0deg) rotateZ(45deg) translateZ(10px);
		box-shadow: 20px 20px 20px rgba(0, 0, 0, 0.4);
	}

	.card[data-state='focus'] {
		transform: rotateX(0deg) rotateY(0deg) rotateZ(0deg) translateZ(10px);
		box-shadow: 0px 10px 10px rgba(0, 0, 0, 0.4);
	}

	.card[data-state='focus']::before {
		transform: skewX(0deg) translateX(0px) translateY(0px);
		height: 0px;
	}

	.card[data-state='focus']::after {
		transform: skewY(0deg) translateX(0px) translateY(0px);
		width: 0px;
	}

	.card::before,
	.card::after {
		content: '';
		position: absolute;
		display: block;
		background-color: grey;
		transition:
			transform 0.35s ease,
			height 0.35s ease,
			width 0.35s ease;
	}

	.card::before {
		width: 100%;
		height: 6px;
		bottom: 0;
		left: 0;
		transform: skewX(45deg) translateX(-3px) translateY(6px);
	}

	.card::after {
		height: 100%;
		width: 6px;
		top: 0;
		right: 0;
		transform: skewY(45deg) translateX(6px) translateY(-3px);
	}
</style>
