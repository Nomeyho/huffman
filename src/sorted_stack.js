export default class SortedStack {
    constructor(sort) {
        this.sort = sort; // sorting function
        this.elements = [];
    }

    push(element) {
        const index = this.elements.find(this.sort);

        if (index === undefined) {
            this.elements.push(element);
        } else {
            // insert at the specified index & remove 0 element
            this.elements.splice(index, 0, element);
        }
    }

    pop() {
        return this.elements.shift();
    }

    empty() {
        return this.elements.length === 0;
    }
}