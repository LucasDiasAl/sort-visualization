const heapify = (arr, length, parentIndex, visualization) => {
    let largest = parentIndex;
    let left = parentIndex * 2 + 1;
    let right = left + 1;
    if (left < length && arr[left].height > arr[largest].height) {
        largest = left;
    }
    if (right < length && arr[right].height > arr[largest].height) {
        largest = right;
    }

    if (largest !== parentIndex) {
        visualization.push({pivot: arr[parentIndex], comparingBar: arr[largest]});
        [arr[parentIndex], arr[largest]] = [arr[largest], arr[parentIndex]];
        heapify(arr, length, largest, visualization);
    }
    return arr;
}

const heapSort = (arrayData) => {
    const arr = [...arrayData]
    let length = arr.length;
    let lastParentNode = Math.floor(length / 2 - 1);
    let lastChild = length - 1;
    let visualization = [];

    while (lastParentNode >= 0) {
        heapify(arr, length, lastParentNode, visualization);
        lastParentNode--;
    }
    while (lastChild >= 0) {
        visualization.push({pivot: arr[0], comparingBar: arr[lastChild]});
        [arr[0], arr[lastChild]] = [arr[lastChild], arr[0]];
        heapify(arr, lastChild, 0, visualization);
        lastChild--;
    }
    return {sorted: arr, visualization};
}
export default heapSort;