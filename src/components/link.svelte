<script>
	export let link;

	let x1 = link.source.x;
	let y1 = link.source.y + 4;
	let x2 = link.target.x;
	let y2 = link.target.y - 10;
</script>

<line {x1} {y1} {x2} {y2} />

<style>
	line {
		stroke: steelblue;
		stroke-width: 1px;
	}
</style>