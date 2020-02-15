<script>
	export let link;

	let y1 = link.source.x;
	let x1 = link.source.y + 4;
	let y2 = link.target.x;
	let x2 = link.target.y - 10;

	const linkGenerator = d3.linkHorizontal()
		.source((d) => [d.parent.y + 10, d.parent.x])
		.target((d) => [d.y - 10, d.x]);
</script>

<path
	class="link"
	d={link ? linkGenerator(link.target) : ''}
/>

<style>
	.link {
		stroke: steelblue;
		fill: none;
		stroke-width: 1px;
	}
</style>