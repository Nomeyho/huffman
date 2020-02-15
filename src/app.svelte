<script>
	import { onMount } from 'svelte';
	import Tree from './components/tree.svelte';
	import Menu from './components/menu.svelte';
</script>

<main class="container">
	<Menu />
	<div>
		<h1>Huffman Tree</h1>
		<Tree />
	</div>
</main>

<style>
.container {
	display: flex;
}

h1 {
	text-align: center;
}
</style>