import SortedStack from './sorted_stack';

const nodeComparator = (n1, n2) => n1.value - n2.value;

export function buildHuffmanTree(frequencies) {
    const stack = new SortedStack(nodeComparator);

    for (let frequency of frequencies) {
        stack.push(frequency);
    }

    while (true) {
        const f1 = stack.pop();
        const f2 = stack.pop();

        if (f1 && f2) {
            stack.push({
                letter: f1.letter + f2.letter,
                value: f1.value + f2.value,
                children: [f1, f2]
            });
        } else {
            // Done
            computeHuffmanEncoding(f1);
            return f1;
        }
    }
}

export function computeHuffmanEncoding(root) {
    if (!root.children) {
        return;
    }

    if (!root.encoding) {
        root.encoding = ''
    }

    const left = root.children[0];
    const right = root.children[1];
    const rootEncoding = root.encoding || '';

    left.encoding = rootEncoding + '1';
    right.encoding = rootEncoding + '0';

    computeHuffmanEncoding(left);
    computeHuffmanEncoding(right);
}