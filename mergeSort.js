const mergeSort = function (arr) {
    if (arr.length === 1) return arr;

    const m = Math.floor(arr.length / 2);

    const part1 = mergeSort(arr.slice(0, m));
    const part2 = mergeSort(arr.slice(m));

    const merged = merge(part1, part2);

    return merged;
};

const merge = function (arr1, arr2) {
    const merged = [];

    while (arr1.length > 0 && arr2.length > 0) {
        if (arr1[0] <= arr2[0]) merged.push(arr1.shift());
        else merged.push(arr2.shift());
    }

    const remainder = arr1.length ? arr1 : arr2;

    while (remainder.length > 0) {
        merged.push(remainder.shift());
    }

    return merged;
};

exports.mergeSort = mergeSort;
