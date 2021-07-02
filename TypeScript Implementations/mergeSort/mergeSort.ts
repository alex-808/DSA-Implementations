type NumberArray = Array<number>;

const mergeSort = function (arr: NumberArray): NumberArray {
    if (arr.length === 1) return arr;

    const m = Math.floor(arr.length / 2);
    const A: NumberArray = mergeSort(arr.slice(0, m));
    const B: NumberArray = mergeSort(arr.slice(m));

    const merged: NumberArray = merge(A, B);

    return merged;
};

const merge = function (arr1: NumberArray, arr2: NumberArray): NumberArray {
    const merged: NumberArray = [];
    while (arr1.length > 0 && arr2.length > 0) {
        if (arr1[0] < arr2[0]) merged.push(arr1.shift()!);
        else merged.push(arr2.shift()!);
    }
    const remainder: NumberArray = arr1.length ? arr1 : arr2;

    while (remainder.length) {
        merged.push(remainder.shift()!);
    }

    return merged;
};

exports.mergeSort = mergeSort;
