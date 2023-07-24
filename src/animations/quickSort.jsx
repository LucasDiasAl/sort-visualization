import quickSort from "../func/quickSort";

function quickSortAnimation(dataArray, SPEED, setDataArray) {
  const { sorting, visualization } = quickSort({
    sorting: [...dataArray],
    visualization: [],
  });
  const timeOuts = [];
  visualization.forEach(({ pivot, bar, direction }, i) => {
    const pivotDiv = document.querySelector(`.bar-index-${pivot.originIndex}`);
  
    const comparisonBar = document.querySelector(
      `.bar-index-${bar.originIndex}`
    );
  
    const timeOut = setTimeout(() => {
      // timeout para a animaçao da comparacao
      if (i === 0 || visualization[i - 1].pivot !== pivot) {
        pivotDiv.style.background = "yellow";
      }
  
      comparisonBar.style.background = "blue";
  
      setTimeout(() => {
        // timeout para movimentaçao
        const currPivotIndex = dataArray.indexOf(pivot);
  
        const barToCompareIndex = dataArray.indexOf(bar);
  
        if (direction === -1) {
          dataArray.splice(barToCompareIndex, 1);
          dataArray.splice(currPivotIndex, 0, bar);
          setDataArray([...dataArray]);
        }
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
            sorting.forEach((_, index2) => {
              const bar = document.querySelector(
                `.bar-index-${dataArray[index2].originIndex}`
              );
              bar.style.background = "green";
            });
            const newDataBtn = document.querySelector("#create-new-data-btn");
            newDataBtn.disabled = false;
            // console.log(sorting.length === dataArray.length) --> PARA TESTES APENAS
          }
        }, SPEED / 1.5);
      }, SPEED / 3);
    }, i * SPEED);
    timeOuts.push(timeOut);
  });
  return timeOuts;
}

export default quickSortAnimation;
