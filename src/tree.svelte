<script>
	export let width;
	export let height;
	export let data;

	import { onMount } from 'svelte';
	import { round } from './utils.js';

	onMount(() => {
		// SVG
		const margin = { top: 40, right: 120, bottom: 20, left: 120 }; // TODO scale
		const w = width - margin.right - margin.left;
		const h = height - margin.top - margin.bottom;

		d3.select('svg')
			.attr('w', w + margin.right + margin.left)
			.attr('h', h + margin.top + margin.bottom)
			.select('g')
			.attr('transform',`translate(${margin.left}, ${margin.top})`);

		// Tree
		const root = d3.hierarchy(data);
		const layout = d3.tree()
			.separation((a, b) => 2)
			.size([w, h]);
		layout(root);

		// Nodes
		d3.select('svg g.nodes')
			.selectAll('text')
			.data(root.descendants())
			.enter()
			.append('text')
			.attr('x', d => d.x)
			.attr('y', d => d.y)
			.style('text-anchor', 'middle')
			.append('tspan')
			.style('font-size', '10px') // TODO scale
			.style('font-weight', '600')
			.style('fill', 'black')
			.attr('x', d => d.x)
			.attr('dy', 0)
			.text(d => round(d.data.frequency))
			.append('tspan')
			.style('font-size', '9px') // TODO scale
			.style('font-weight', '400')
			.style('fill', 'gray')
			.attr('x', d => d.x)
			.attr('dy', 12)
			.text(d => d.data.letter)

		// Links
		d3.select('svg g.links')
			.selectAll('line')
			.data(root.links())
			.enter()
			.append('line')
			.style('stroke', 'steelblue')
			.style('stroke-w', '1px')
			.attr('x1', d => d.source.x)
			.attr('y1', d => d.source.y + 16) // TODO scale
			.attr('x2', d => d.target.x)
			.attr('y2', d => d.target.y - 10); // TODO scale
	});

	/*
	window.onresize = () => {
		d3.select('svg g.nodes')
			.selectAll('text')
			.remove();

		d3.select('svg g.links')
			.selectAll('line')
			.remove();
		
		draw();
	};
	*/
</script>

<svg>
		<g>
      <g class='links'></g>
      <g class='nodes'></g>
    </g>
	</svg>

<style>
	svg {
		border: 1px solid black;
	}
</style>