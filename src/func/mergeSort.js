function merge(array, left, middle, right) {
    const helper = [...array];

    let indexSubArray1 = left;
    let indexSubArray2 =  middle + 1;
    let positioningIndex = left;

    while ( indexSubArray1 <= middle && indexSubArray2 <= right) {
        if (helper[indexSubArray1] <= helper[indexSubArray2]) {
            array[positioningIndex] = helper[indexSubArray1];
            indexSubArray1++;
        } else {
            array[positioningIndex] = helper[indexSubArray2];
            indexSubArray2++;
        }
        positioningIndex++;
    }

    while (indexSubArray1 <= middle) {
        array[positioningIndex] = helper[indexSubArray1];
        indexSubArray1++;
        positioningIndex++;
    }

    while (indexSubArray2 <= right) {
        array[positioningIndex] = helper[indexSubArray2];
        indexSubArray2++;
        positioningIndex++;
    }
}

export default function mergeSort(arrayToSort, initialIndex = 0, finalIndex = arrayToSort.length - 1) {
    if (initialIndex >= finalIndex) {
        return;
    } else {
        const middle = Math.floor((initialIndex + finalIndex) / 2);
        mergeSort(arrayToSort, initialIndex, middle);
        mergeSort(arrayToSort, middle + 1, finalIndex);

        merge(arrayToSort, initialIndex, middle, finalIndex);
    }
    return arrayToSort;
}

console.log(mergeSort([2,3,6,23,6,77,4,5,3,2,9,0,456,45,23,4,5,6,64,54,23,1,6,66,4,56,7,54,2,34,5,67,8,2,346,20]))