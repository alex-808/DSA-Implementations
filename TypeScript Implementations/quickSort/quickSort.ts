const quickSort = function (arr: NumberArray, l: number, r: number): void {
    if (l >= r) return;

    const pivot = partition(arr, l, r);
    quickSort(arr, l, pivot - 1);
    quickSort(arr, pivot + 1, r);
};

const partition = function (arr: NumberArray, l: number, r: number): number {
    let pivot = arr[l];

    let j = l;

    for (let i = j + 1; i <= r; i++) {
        if (arr[i] < pivot) {
            j++;
            const tmp = arr[j];
            arr[j] = arr[i];
            arr[i] = tmp;
        }
    }

    const tmp = arr[j];
    arr[j] = pivot;
    arr[l] = tmp;

    return j;
};

exports.quickSort = quickSort;
