import type { Attachment } from 'svelte/attachments';

export const onClickOutside = (action: () => void): Attachment => {
	return (node) => {
		const handleClick = (event: MouseEvent) => {
			if (
				node &&
				event.target &&
				event.target instanceof Node &&
				!node.contains(event.target) &&
				!event.defaultPrevented
			) {
				action();
			}
		};

		document.addEventListener('click', handleClick, true);

		return () => {
			document.removeEventListener('click', handleClick, true);
		};
	};
};
