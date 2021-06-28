const { Stack } = require('./stack');

test('isEmpty() returns false when not empty', () => {
    const stack = new Stack();
    stack.push(1);
    expect(stack.isEmpty()).toBe(false);
});

test('isEmpty() returns true when empty', () => {
    const stack = new Stack();
    expect(stack.isEmpty()).toBe(true);
});

test('.push() adds val to top of stack', () => {
    const stack = new Stack();
    stack.push(1);
    stack.push(2);
    stack.push(3);
    expect(stack.top()).toBe(3);
});

test('.pop() removes val from top of stack', () => {
    const stack = new Stack();
    stack.push(1);
    stack.push(2);
    stack.push(3);
    stack.pop();
    expect(stack.top()).toBe(2);
});

test('.top() returns top val from stack', () => {
    const stack = new Stack();
    stack.push(1);
    stack.push(2);
    stack.push(3);
    expect(stack.top()).toBe(3);
});

test('.size returns size of stack', () => {
    const stack = new Stack();
    stack.push(2);
    stack.push(3);
    stack.push(4);
    expect(stack.size).toBe(3);
});
