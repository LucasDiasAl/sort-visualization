export default function quickSort(data) {
    if (data.sorted.length <= 1) {
        return data;
    }

    const pivot = data.sorted[0];
    const left = [];
    const right = [];
    const vis = [];
    for (let i = 1; i < data.sorted.length; i++) {
        if (data.sorted[i].height < pivot.height) {
            left.push(data.sorted[i]);
            vis.push({pivot: pivot, bar: data.sorted[i], direction: -1});
        } else {
            right.push(data.sorted[i]);
            vis.push({pivot: pivot, bar: data.sorted[i], direction: 1});
        }
    }
    const leftOrder = quickSort({sorted: left, visualization: []});
    const rightOrder = quickSort({sorted: right, visualization: []});
    return {
        sorted: [...leftOrder.sorted, pivot, ...rightOrder.sorted],
        visualization: [...vis, ...leftOrder.visualization, ...rightOrder.visualization]
    };
}

// transformar em array de objetos para conseguir guardar o tamanho e a posiçao original para referencia.