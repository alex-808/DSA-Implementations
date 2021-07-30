const { Heap } = require('./heap');

const heapSort = function (arr) {
    const heap = new Heap();
    arr.forEach((el) => {
        heap.insert(el);
    });
    console.log(heap);
    for (let i = arr.length - 1; i > 0; i--) {
        arr[i] = heap.extractMax();
        console.log(arr[i]);
    }

    return arr;
};

const arr = [16, 8, 2, 7, 3];

const sorted = heapSort(arr);

console.log(sorted);
