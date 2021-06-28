class Stack {
    constructor() {
        this.values = [];
    }

    isEmpty() {
        return this.values.length === 0;
    }

    top() {
        if (!this.isEmpty()) return this.values[this.values.length - 1];
    }

    pop() {
        if (!this.isEmpty()) return this.values.pop();
    }

    push(val) {
        this.values.push(val);
    }

    get size() {
        return this.values.length;
    }
}

exports.Stack = Stack;
