const { mergeSort } = require('./mergeSort');

test('mergeSort sorts reversed array', () => {
    const arr = [9, 8, 7, 6, 5, 4, 3, 2, 1];

    expect(mergeSort(arr)).toEqual([1, 2, 3, 4, 5, 6, 7, 8, 9]);
});
