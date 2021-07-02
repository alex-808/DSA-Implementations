"use strict";
var mergeSort = function (arr) {
    if (arr.length === 1)
        return arr;
    var m = Math.floor(arr.length / 2);
    var A = mergeSort(arr.slice(0, m));
    var B = mergeSort(arr.slice(m));
    var merged = merge(A, B);
    return merged;
};
var merge = function (arr1, arr2) {
    var merged = [];
    while (arr1.length > 0 && arr2.length > 0) {
        if (arr1[0] < arr2[0])
            merged.push(arr1.shift());
        else
            merged.push(arr2.shift());
    }
    var remainder = arr1.length ? arr1 : arr2;
    while (remainder.length) {
        merged.push(remainder.shift());
    }
    return merged;
};
exports.mergeSort = mergeSort;
