<script>
	export let node;

	import { round } from '../js/utils.js';
</script>

<text x={node.x} y={node.y}>
	<tspan class="value" x={node.x} dy={0} dx={2}>
		{round(node.data.value)}
	</tspan>
	{#if node.height === 0}
		<tspan 	class="letter" x={node.x} dy={8}>
			{node.data.letter}
		</tspan>
	{/if}
</text>

<style>
	text {
		text-anchor: middle;
	}

	.value {
		font-size: 7px;
		font-weight: 400;
		fill: black;
	}

	.letter {
		font-size: 6px;
		font-weight: 600;
		fill: black;
	}
</style>