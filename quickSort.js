const quickSort = function (arr, l, r) {
    if (l >= r) return;
    const pivot = partition(arr, l, r);
    quickSort(arr, pivot + 1, r);
    quickSort(arr, l, pivot - 1);
};

const partition = function (arr, l, r) {
    let pivot = arr[l];

    let j = l;
    for (let i = l + 1; i <= r; i++) {
        if (arr[i] < pivot) {
            j++;
            let tmp = arr[j];
            arr[j] = arr[i];
            arr[i] = tmp;
        }
    }

    // Swap pivot with j
    let tmp = pivot;
    arr[l] = arr[j];
    arr[j] = tmp;
    return j;
};

const myArr = [5, 4, 6, 4, 6];
quickSort(myArr, 0, myArr.length - 1);

exports.quickSort = quickSort;
