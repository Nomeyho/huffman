<script>
	import { onMount } from 'svelte';
	import Tree from './components/tree.svelte';
</script>

<main class="container">

	<div class="left">
		LEFT
	</div>

	<div class="right">
		<Tree />
	</div>

</main>

<style>
.container {
	display: flex;
}

.left {
	background-color: gray;
	min-height: 100vh;
}

.right {
	margin: auto 0;
}
</style>