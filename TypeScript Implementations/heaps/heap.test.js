const { Heap } = require('./heap');

test('Instantiation of Heap class results in object of type Heap', () => {
    const heap = new Heap();

    expect(heap instanceof Heap).toBe(true);
});

test('Insertion of 1, 2, 3, 4, 5, 6 should result in [6,4,5,1,3,2]', () => {
    const heap = new Heap();
    heap.insert(1);
    heap.insert(2);
    heap.insert(3);
    heap.insert(4);
    heap.insert(5);
    heap.insert(6);

    expect(heap.values).toEqual([Number.POSITIVE_INFINITY, 6, 4, 5, 1, 3, 2]);
});

test('getMax called on heap of [Infinity, 5, 4, 1] should result in 5', () => {
    const heap = new Heap();
    heap.insert(1);
    heap.insert(4);
    heap.insert(5);

    expect(heap.getMax()).toBe(5);
});
