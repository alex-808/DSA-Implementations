// I forgot heaps are base-1 indexed
var Heap = /** @class */ (function () {
    function Heap(values) {
        this.values = values || [Number.POSITIVE_INFINITY];
        this.root = 1;
        this.size = this.values.length - 1;
    }
    // Public methods
    Heap.prototype.insert = function (value) {
        this.values.push(value);
        this._siftUp(this.values.length - 1);
        this.size++;
    };
    // Remove
    Heap.prototype.remove = function (i) {
        this._swap(i, this.size);
        this.size--;
        this._siftDown(i);
    };
    Heap.prototype.getMax = function () {
        return this.values[this.root];
    };
    Heap.prototype.extractMax = function () {
        var max = this.getMax();
        this._swap(this.root, this.size);
        this.size--;
        this._siftDown(this.root);
        return max;
    };
    Heap.prototype._parent = function (i) {
        return Math.floor(i / 2);
    };
    Heap.prototype._leftChild = function (i) {
        return i * 2;
    };
    Heap.prototype._rightChild = function (i) {
        return i * 2 + 1;
    };
    Heap.prototype._swap = function (i, j) {
        var tmp = this.values[i];
        this.values[i] = this.values[j];
        this.values[j] = tmp;
    };
    Heap.prototype._siftUp = function (i) {
        var p = this._parent(i);
        if (this.values[i] > this.values[p]) {
            this._swap(i, p);
            this._siftUp(p);
        }
    };
    Heap.prototype._siftDown = function (i) {
        var l = this._leftChild(i);
        var r = this._rightChild(i);
        var max = i;
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
    };
    return Heap;
}());
var heap = new Heap([Number.POSITIVE_INFINITY, 5, 1]);
heap.insert(6);
console.log(heap.values);
console.log(heap.size);
heap.remove(2);
console.log(heap.size);
console.log(heap.values);
exports.Heap = Heap;
