<script>
	export let node;

	import { round } from '../js/utils.js';
</script>

<text class="value" x={node.y} y={node.x + 2}>
	{round(node.data.value)}
</text>

{#if node.height === 0}
<text class="letter" x={node.y + 15} y={node.x + 2}>
	{node.data.letter}
</text>
<text class="encoding" x={node.y + 30} y={node.x + 2}>
	{node.data.encoding}
</text>
{/if}

<style>
	text {
		text-anchor: middle;
		fill: black;
		font-size: 7px;
	}

	.value {
	}

	.letter {
		font-weight: 600;
	}

	.encoding {
		fill: darkred;
	}
</style>