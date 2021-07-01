class Heap {
    constructor() {
        this.values = ['_'];
        this.size = 0;
    }

    leftChild(i) {
        return 2 * i;
    }

    rightChild(i) {
        return 2 * i + 1;
    }

    parent(i) {
        return Math.floor(i / 2);
    }

    siftDown(i) {
        let maxIndex = i;
        let l = this.leftChild(i);
        if (l < this.size) {
            if (this.values[l] > this.values[maxIndex]) {
                maxIndex = l;
            }
        }

        let r = this.rightChild(i);
        if (r < this.size) {
            if (this.values[r] > this.values[maxIndex]) {
                maxIndex = r;
            }
        }

        if (i !== maxIndex) {
            this._swap(i, maxIndex);
            this.siftDown(maxIndex);
        }
    }

    siftUp(i) {
        const parent = this.parent(i);
        if (this.values[i] > this.values[parent]) {
            this._swap(i, parent);
            this.siftUp(parent);
        }
    }

    insert(val) {
        this.values.push(val);
        this.size++;
        this.siftUp(this.size - 1);
    }

    extractMax() {
        const max = this.values[1];
        this.values[1] = this.values[this.size - 1];
        this.size--;
        this.siftDown(1);
        return max;
    }

    _swap(i, j) {
        const tmp = this.values[i];
        this.values[i] = this.values[j];
        this.values[j] = tmp;
    }
}

// Testing Area

const myHeap = new Heap();

const genRandomInt = function (max) {
    return Math.floor(Math.random() * max + 1);
};

for (let i = 0; i < 100; i++) {
    const rand = genRandomInt(10);
    myHeap.insert(rand);
}

console.log(myHeap.size);

for (let i = 0; i < 10; i++) {
    myHeap.extractMax();
}

console.log(myHeap.size);

for (let i = 2; i < myHeap.size; i++) {
    const parent = myHeap.parent(i);
    if (myHeap.values[parent] < myHeap.values[i]) {
        console.error('⬇️ Misplaced node found @', i);
    }
}

console.log(myHeap.values);
