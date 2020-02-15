<script>
	import { onMount } from 'svelte';
	import { root } from '../js/store.js';
	import Link from './link.svelte';
	import Node from './node.svelte';
	import { WIDTH, HEIGHT, MARGIN } from '../js/utils.js';

	let windowWidth;
</script>

<svelte:window bind:innerWidth={windowWidth} />

<svg viewBox="0 0 {WIDTH} {HEIGHT}" width={windowWidth}>
	<g	transform="translate({MARGIN.left}, {MARGIN.top})">
		<g class='links'>
			{#each $root.links() as link}
				<Link {link} />
			{/each}
		</g>
		<g class='nodes'>
			{#each $root.descendants() as node}
				<Node {node} />
			{/each}
		</g>
	</g>
</svg>

<style>
	svg {
		width: 100%;
		max-width: 1000px;
	}
</style>