import quickSort from "../func/quickSort";

function quickSortAnimation(dataArray, SPEED, setDataArray) {
  const { sorting, visualization } = quickSort({
    sorting: dataArray,
    visualization: [],
  });
  const timeOuts = [];
  for (let i = 0; i < visualization.length; i++) {
    const { pivot, bar, direction } = visualization[i];

    const pivotDiv = document.querySelector(`.bar-index-${pivot.originIndex}`);

    const comparisonBar = document.querySelector(
      `.bar-index-${bar.originIndex}`
    );

    const timeOut = setTimeout(() => {
      // timeout para a animaçao da comparacao
      if (i === 0 || visualization[i - 1].pivot !== pivot) {
        pivotDiv.style.background = "red";
      }

      comparisonBar.style.background = "blue";

      setTimeout(() => {
        // timeout para movimentaçao
        const currPivotIndex = dataArray.indexOf(pivot);

        const barToCompIndex = dataArray.indexOf(bar);

        if (direction === -1) {
          dataArray.splice(barToCompIndex, 1);
          dataArray.splice(currPivotIndex, 0, bar);
          setDataArray([...dataArray]);
        }
      }, SPEED / 3);
      setTimeout(() => {
        // timeout para a finalizar o processo
        if (
          visualization.length - 1 === i ||
          visualization[i + 1].pivot !== pivot
        ) {
          pivotDiv.style.background = "grey";
        }

        comparisonBar.style.background = "grey";

        if (visualization.length - 1 === i) {
          for (let e in sorting) {
            const bar = document.querySelector(
              `.bar-index-${dataArray[e].originIndex}`
            );

            bar.style.background = "green";
            // console.log(sorting[e] === dataArray[e]) ---> PARA TESTES APENAS
          }
          const sortBtn = document.querySelector("#sort-btn");
          const newDataBtn = document.querySelector("#create-new-data-btn");
          sortBtn.disabled = false;
          newDataBtn.disabled = false;
          // console.log(sorting.length === dataArray.length) --> PARA TESTES APENAS
        }
      }, SPEED / 1.5);
    }, i * SPEED);
    timeOuts.push(timeOut);
  }
  console.log(timeOuts);
  return timeOuts;
}

export default quickSortAnimation;
