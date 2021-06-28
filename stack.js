class Stack {
    constructor() {
        this.values = []
    }

    isEmpty() {
        return this.values.length === 0;
    }

    top() {
        if(!this.isEmpty()) return this.values[this.values.length - 1]
    }

    pop() {
        if(!this.isEmpty()) return this.values.pop();
    }

    push(val) {
        this.values.push(val)
    }
}



const myStack = new Stack();

myStack.push(1)
myStack.push(2)
myStack.push(3)
console.log(myStack.values);
myStack.pop()
console.log(myStack.values);
console.log(myStack.top());