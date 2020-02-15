import { writable, derived } from 'svelte/store';
import defaultFrequencies from './frequencies';
import { buildHuffmanTree } from './huffman';
import { WIDTH, HEIGHT, MARGIN } from './utils';

function createFrequencies() {
    const { subscribe, set, update } = writable(defaultFrequencies);

    return {
        subscribe,
        set: (letter, value) => {
            update(frequencies => {
                const frequency = frequencies.find(f => f.letter === letter);
                frequency.value = value;
                return frequencies;
            });
        },
        reset: () => set(defaultFrequencies)
    };
}

export const frequencies = createFrequencies();

export const root = derived(frequencies, $frequencies => {
    const tree = buildHuffmanTree($frequencies);
    const root = d3.hierarchy(tree);
    const layout = d3.cluster()
        .separation((a, b) => 2)
        .size([
            HEIGHT - MARGIN.top - MARGIN.bottom,
            WIDTH - MARGIN.left - MARGIN.right
        ]);
    layout(root);
    return root;
});