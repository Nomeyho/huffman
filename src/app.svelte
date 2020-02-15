<script>
	import { onMount } from 'svelte';
	import Tree from './components/tree.svelte';
	import Menu from './components/menu.svelte';
	import { codeLength, entropy } from './js/store.js';
</script>

<main class="container">
	<Menu />
	<div>
		<h1>
			Huffman Encoding Tree
		</h1>
		<ul>
			<li>
				Code length:
				<code>L(C) = {$codeLength}</code>
			</li>
			<li>
				Entropy:
				<code>H(C) = {$entropy}</code>
			</li>
		</ul>
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

h1 a {
	display: block;
	font-size: 1rem;
}

ul li {
	margin-bottom: 5px;
}
</style>