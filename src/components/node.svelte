<script>
	export let node;

	import { round } from '../js/utils.js';
</script>

<text class="value" x={node.y} y={node.x + 2}>
	{round(node.data.value)}
</text>

{#if node.height === 0}
<text class="letter" x={node.y + 16} y={node.x + 2}>
	{node.data.letter}
</text>
<text class="encoding" x={node.y + 65} y={node.x + 2}>
	{node.data.encoding}
</text>
{/if}

<style>
	.value {
		text-anchor: middle;
		font-size: 7px;
	}

	.letter {
		font-size: 7px;
		font-weight: 600;
	}

	.encoding {
		font-size: 7px;
		text-anchor: end;
		fill: darkred;
	}
</style>