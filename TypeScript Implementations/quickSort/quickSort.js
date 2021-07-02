"use strict";
var quickSort = function (arr, l, r) {
    if (l >= r)
        return;
    var pivot = partition(arr, l, r);
    quickSort(arr, l, pivot - 1);
    quickSort(arr, pivot + 1, r);
};
var partition = function (arr, l, r) {
    var pivot = arr[l];
    var j = l;
    for (var i = j + 1; i <= r; i++) {
        if (arr[i] < pivot) {
            j++;
            var tmp_1 = arr[j];
            arr[j] = arr[i];
            arr[i] = tmp_1;
        }
    }
    var tmp = arr[j];
    arr[j] = pivot;
    arr[l] = tmp;
    return j;
};
exports.quickSort = quickSort;
