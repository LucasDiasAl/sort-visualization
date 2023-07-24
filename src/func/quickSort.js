export default function quickSort(data) {
  if (data.sorting.length <= 1) {
    return data;
  }

  const pivot = data.sorting[0];
  const left = [];
  const right = [];
  const vis = [];
  for (let i = 1; i < data.sorting.length; i++) {
    if (data.sorting[i].height < pivot.height) {
      left.push(data.sorting[i]);
      vis.push({pivot: pivot, bar: data.sorting[i], direction: -1 });
    } else {
      right.push(data.sorting[i]);
      vis.push({pivot: pivot, bar: data.sorting[i], direction: 1 });
    }
  }
  const leftOrder = quickSort({sorting: left, visualization: []});
  const rightOrder = quickSort({sorting: right, visualization: []});
  return {
    sorting: [...leftOrder.sorting, pivot, ...rightOrder.sorting],
    visualization: [...vis, ...leftOrder.visualization,...rightOrder.visualization ]
  };
}

// transformar em array de objetos para conseguir guardar o tamanho e a posiçao original para referencia.