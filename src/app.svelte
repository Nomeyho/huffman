<script>
	export let name;

	import { onMount } from 'svelte';
	import { getHuffmanTree } from './huffman.js';
	import { round } from './utils.js';

	let svg;
	let data;
	let root;
	let layout;

	function draw() {
		// SVG
		const margin = { top: 40, right: 120, bottom: 20, left: 120 };
		const width = (0.8 * document.getElementById('main').clientWidth) - margin.right - margin.left;
		const height = (width * 0.6) - margin.top - margin.bottom;

		svg = d3.select('svg')
			.attr('width', width + margin.right + margin.left)
			.attr('height', height + margin.top + margin.bottom)
			.select('g')
			.attr('transform',`translate(${margin.left}, ${margin.top})`);

		// Tree
		data = getHuffmanTree();
		root = d3.hierarchy(data);
		layout = d3.tree()
			.separation((a, b) => 2)
			.size([width, height]);
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
			.style('font-size', '10px')
			.style('font-weight', '600')
			.style('fill', 'black')
			.attr('x', d => d.x)
			.attr('dy', 0)
			.text(d => round(d.data.frequency))
			.append('tspan')
			.style('font-size', '9px')
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
			.style('stroke-width', '1px')
			.attr('x1', d => d.source.x)
			.attr('y1', d => d.source.y + 16)
			.attr('x2', d => d.target.x)
			.attr('y2', d => d.target.y - 10);
	}

	window.onresize = () => {
		d3.select('svg g.nodes')
			.selectAll('text')
			.remove();

		d3.select('svg g.links')
			.selectAll('line')
			.remove();
		
		draw();
	};
	onMount(draw);

</script>

<main id='main'>
	<svg>
		<g>
      <g class='links'></g>
      <g class='nodes'></g>
    </g>
	</svg>
</main>

<style>
	svg {
		border: 1px solid black;
	}
</style>