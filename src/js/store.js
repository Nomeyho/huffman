import { writable, derived } from 'svelte/store';
import defaultFrequencies from './frequencies';
import {
    buildHuffmanTree,
    computeHuffmanEncoding,
    computeHuffmanCodeLength,
    computeEntropy,
} from './huffman';
import { WIDTH, HEIGHT, MARGIN } from './utils';

function createFrequencies() {
    const { subscribe, set, update } = writable(defaultFrequencies);

    return {
        subscribe,
        set: () => update((f) => f),
        reset: () => set(defaultFrequencies)
    };
}

export const frequencies = createFrequencies();

export const tree = derived(frequencies, $frequencies => {
    const tree = buildHuffmanTree($frequencies);
    computeHuffmanEncoding(tree);
    return tree;
});

export const root = derived(tree, $tree => {
    const root = d3.hierarchy($tree);
    const layout = d3.cluster()
        .separation(() => 2)
        .size([
            HEIGHT - MARGIN.top - MARGIN.bottom,
            WIDTH - MARGIN.left - MARGIN.right
        ]);
    layout(root);
    return root;
});

export const codeLength = derived(tree, $tree => {
    return computeHuffmanCodeLength($tree).toFixed(3);
});

export const entropy = derived(tree, $tree => {
    return computeEntropy($tree).toFixed(3);
});