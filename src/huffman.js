import frequencies from './frequencies';
import Node from './node';
import SortedStack from './sorted_stack';

const nodeComparator = (n1, n2) => n1.frequency - n2.frequency;

export function getHuffmanTree() {
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
                frequency: f1.frequency + f2.frequency,
                children: [f1, f2]
            });
        } else {
            return f1;
        }
    }
}