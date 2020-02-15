export default class SortedStack {
    constructor(sort) {
        this.sort = sort; // sorting function
        this.elements = [];
    }

    push(element) {
        this.elements.push(element);
        this.elements.sort(this.sort);
    }

    pop() {
        return this.elements.shift();
    }

    empty() {
        return this.elements.length === 0;
    }
}