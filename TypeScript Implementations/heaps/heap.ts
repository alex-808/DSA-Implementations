interface Heap {
    values: Array<number>;
    root: number;
    size: number;
}

// * Notes
// I forgot heaps are base-1 indexed
// I had to get to the extractMax/remove part until I realized that I should be keeping track of size
// I liked learning about an interface's relationship to a class from this
// I also enjoyed organizing the code in terms of abstraction from highest to lowest which also vaguely echoes different functions' dependencies

class Heap {
    constructor(values?: Array<number>) {
        this.values = values || [Number.POSITIVE_INFINITY];
        this.root = 1;

        this.size = this.values.length - 1;
    }

    insert(value: number): void {
        this.values.push(value);
        this._siftUp(this.values.length - 1);
        this.size++;
    }

    remove(i: number): void {
        this._swap(i, this.size);

        this.size--;
        this._siftDown(i);
    }

    getMax(): number {
        return this.values[this.root];
    }

    extractMax(): number {
        const max = this.getMax();

        this._swap(this.root, this.size);

        this.size--;
        this._siftDown(this.root);

        return max;
    }

    _siftUp(i: number): void {
        const p = this._parent(i);

        if (this.values[i] > this.values[p]) {
            this._swap(i, p);

            this._siftUp(p);
        }
    }
    _siftDown(i: number): void {
        const l = this._leftChild(i);
        const r = this._rightChild(i);

        let max = i;

        if (this.values[max] < this.values[l] && l < this.size) {
            max = l;
        }

        if (this.values[max] < this.values[r] && r < this.size) {
            max = r;
        }

        if (max !== i) {
            this._swap(i, max);
            this._siftDown(max);
        }
    }

    _swap(i: number, j: number): void {
        const tmp = this.values[i];
        this.values[i] = this.values[j];
        this.values[j] = tmp;
    }

    _parent(i: number): number {
        return Math.floor(i / 2);
    }

    _leftChild(i: number): number {
        return i * 2;
    }
    _rightChild(i: number): number {
        return i * 2 + 1;
    }
}

const heap = new Heap([Number.POSITIVE_INFINITY, 5, 1]);

heap.insert(6);
console.log(heap.values);
console.log(heap.size);

heap.remove(2);

console.log(heap.size);

console.log(heap.values);
exports.Heap = Heap;
