import selectionSort from "../func/selectionSort";

function selectionSortAnimation(dataArray, SPEED, setDataArray) {
  const { sorting, visualization } = selectionSort(dataArray);
  let currentPivotBar = null;
  let initialPivot = null;
  const timeOuts = [];

  visualization.forEach(({smallestBar, comparingBar, swap}, i) => {
    const timeOut = setTimeout(() => {
      const pivotBar = document.querySelector(
        `.bar-index-${smallestBar.originIndex}`
      );
      const barToCompare = document.querySelector(
        `.bar-index-${comparingBar.originIndex}`
      );
      if (initialPivot === null) {
        pivotBar.style.background = "green";
        barToCompare.style.background = "blue";
        currentPivotBar = smallestBar;
        initialPivot = smallestBar;
      } else if (swap === 1) {
        currentPivotBar = null;
        initialPivot = null;
        pivotBar.style.background = "yellow";
        barToCompare.style.background = "yellow";
      } else if (currentPivotBar !== smallestBar && currentPivotBar !== null) {
        if (currentPivotBar !== initialPivot) {
          const oldPivot = document.querySelector(
            `.bar-index-${currentPivotBar.originIndex}`
            );
            oldPivot.style.background = "grey";
          }
          pivotBar.style.background = "yellow";
        currentPivotBar = smallestBar;
      }
      if (swap === -1) {
        barToCompare.style.background = "blue";
      }
      setTimeout(() => {
        if (swap === 1) {
          const indexOfPivot = dataArray.indexOf(smallestBar);
          const indexOfComparing = dataArray.indexOf(comparingBar);
          [dataArray[indexOfPivot], dataArray[indexOfComparing]] = [
            dataArray[indexOfComparing],
            dataArray[indexOfPivot],
          ];
          setDataArray([...dataArray]);
        }
        setTimeout(() => {
          if (i === visualization.length - 1) {
            sorting.forEach((_, index2) => {
              const bar = document.querySelector(
                `.bar-index-${dataArray[index2].originIndex}`
                );
                bar.style.background = "green";
              });
              const newDataBtn = document.querySelector("#create-new-data-btn");
              newDataBtn.disabled = false;
            } else {
            const nextPivotDifferent = comparingBar !== visualization[i + 1].smallestBar
            const nextoPivotSame = smallestBar !== visualization[i + 1].smallestBar
            if (swap > 0 || (nextPivotDifferent && nextoPivotSame)) {
              pivotBar.style.background = "grey";
              barToCompare.style.background = "grey";
            } else {
              barToCompare.style.background = "grey";
            }
          } 
        }, SPEED * ( 1 / 5 ));
      }, SPEED * (3 / 5));
    }, SPEED * i);

    timeOuts.push(timeOut);
  });

  return timeOuts;
}

export default selectionSortAnimation;
