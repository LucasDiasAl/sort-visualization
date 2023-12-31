/* eslint-disable no-sparse-arrays */
export default function bubbleSort(data) {
    const dataToSort = [...data]
    const length = data.length;
    const visualization = [];
    for (let i = 0; i < length; i++) {
        for (let j = 0; j < length - i - 1; j++) {
            if (dataToSort[j].height > dataToSort[j + 1].height) {
                visualization.push({bar1: dataToSort[j], bar2: dataToSort[j + 1], swap: 1})
                const tmp = dataToSort[j];
                dataToSort[j] = dataToSort[j + 1];
                dataToSort[j + 1] = tmp;
            } else {
                visualization.push({bar1: dataToSort[j], bar2: dataToSort[j + 1], swap: -1})
            }
        }
    }
    return {sorted: dataToSort, visualization};
}

//mudar para sorted