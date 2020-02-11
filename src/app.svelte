<script>
	import { onMount } from 'svelte';
	import Tree from './tree.svelte';
	import { getHuffmanTree } from './huffman.js';

	const data = getHuffmanTree();
	let width = 0;
	let height = 0;

	onMount(() => {
		width = 0.8 * document.getElementById('main').clientWidth;
		height = 0.6 * width;
	});

	window.onresize = () => {
		width = 0.8 * document.getElementById('main').clientWidth;
		height = 0.6 * width;
	};

</script>

<main id='main'>
	<Tree
		width="{width}"
		height="{height}"
		data="{data}"
	/>
</main>

<style>
</style>