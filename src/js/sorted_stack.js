export default class SortedStack {
    constructor(sort) {
        this.sort = sort; // sorting function
        this.elements = [];
    }

    push(element) {
        this.elements.push(element);
        this.elements.sort(this.sort);

        console.log(JSON.stringify(this.elements.map(e => e.value), null, 2))
    }

    pop() {
        return this.elements.shift();
    }

    empty() {
        return this.elements.length === 0;
    }
}