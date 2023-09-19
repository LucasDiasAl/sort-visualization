function merge(array, left, middle, right, visualization) {
    const helper = [...array];

    let indexSubArray1 = left;
    let indexSubArray2 = middle + 1;
    let positioningIndex = left;

    while (indexSubArray1 <= middle && indexSubArray2 <= right) {
        if (helper[indexSubArray1].height <= helper[indexSubArray2].height) {
            visualization.push({
                indexToPutIn: positioningIndex,
                swapWith: helper[indexSubArray1],
            });
            array[positioningIndex] = helper[indexSubArray1];
            indexSubArray1++;
        } else {
            visualization.push({
                indexToPutIn: positioningIndex,
                swapWith: helper[indexSubArray2],
            });
            array[positioningIndex] = helper[indexSubArray2];
            indexSubArray2++;
        }
        positioningIndex++;
    }

    while (indexSubArray1 <= middle) {
        array[positioningIndex] = helper[indexSubArray1];
        visualization.push({
            indexToPutIn: positioningIndex,
            swapWith: helper[indexSubArray1],
        });
        indexSubArray1++;
        positioningIndex++;
    }

    while (indexSubArray2 <= right) {
        array[positioningIndex] = helper[indexSubArray2];
        visualization.push({
            indexToPutIn: positioningIndex,
            swapWith: helper[indexSubArray2],
        });
        indexSubArray2++;
        positioningIndex++;
    }
}

export default function mergeSort(
    arrayToSort,
    initialIndex = 0,
    finalIndex = arrayToSort.length - 1,
    visualization = []
) {
    if (initialIndex >= finalIndex) {
        return;
    } else {
        const middle = Math.floor((initialIndex + finalIndex) / 2);
        mergeSort(arrayToSort, initialIndex, middle, visualization);
        mergeSort(arrayToSort, middle + 1, finalIndex, visualization);

        merge(arrayToSort, initialIndex, middle, finalIndex, visualization);
    }
    return {sorted: arrayToSort, visualization};
}
