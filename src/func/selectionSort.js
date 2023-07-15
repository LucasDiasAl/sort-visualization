const selectionSort = (data) => {
  const dataToSort = [...data];
  const size = dataToSort.length - 1;
  const visualization = [];
  for (let i = 0; i <= size; i++) {
    let smallest = i
    for (let j = i + 1; j <= size; j++) {
      visualization.push({smallestBar: dataToSort[smallest], comparingBar: dataToSort[j], swap: -1})
      if (dataToSort[j].height < dataToSort[smallest].height) smallest = j;
    }
    if (dataToSort[i] !== dataToSort[smallest]) {
      visualization.push({smallestBar: dataToSort[i], comparingBar: dataToSort[smallest], swap: 1})
      const tmp = dataToSort[i];
      dataToSort[i] = dataToSort[smallest];
      dataToSort[smallest] = tmp;
    }
  }
  return {sorting: dataToSort, visualization};
}

export default selectionSort
console.log(selectionSort([2,6,8,3,5,7,2,3,5,3,4543,45,233,43,2,1,3,5,66,5,234,753,57,2,56,753,4567,34,6]));