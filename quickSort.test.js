const { quickSort } = require('./quickSort');

test('quickSort sorts reversed array', () => {
    const arr = [9, 8, 7, 6, 5, 4, 3, 2, 1];
    quickSort(arr, 0, arr.length - 1);
    expect(arr).toEqual([1, 2, 3, 4, 5, 6, 7, 8, 9]);
});

test('quickSort leaves array of length 1 unchanged', () => {
    const arr = [1];
    quickSort(arr, 0, arr.length - 1);
    expect(arr).toEqual([1]);
});
