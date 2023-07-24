import bubbleSort from "../func/bubbleSort";

function bubbleSortAnimation(dataArray, SPEED, setDataArray) {
  const { visualization, sorting } = bubbleSort(dataArray);
  const timeOuts = [];
  visualization.forEach(({bar1, bar2, swap}, i) => {
    const pivot = document.querySelector(`.bar-index-${bar1.originIndex}`);
    const comparingBar = document.querySelector(`.bar-index-${bar2.originIndex}`);
    const timeOut = setTimeout(() => {
      pivot.style.background = "yellow";
      comparingBar.style.background = "blue";
      setTimeout(() => {
        if (swap === 1) {
          const bar1Index = dataArray.indexOf(bar1);
          const bar2Index = dataArray.indexOf(bar2);
          [dataArray[bar1Index], dataArray[bar2Index]] = [
            dataArray[bar2Index], dataArray[bar1Index]
          ]
          setDataArray([...dataArray]);
        }
        setTimeout(() => {
          comparingBar.style.background = "grey";
          if (i === visualization.length - 1) {
            sorting.forEach((_, index2) => {
              const bar = document.querySelector(
                `.bar-index-${dataArray[index2].originIndex}`
              );
              bar.style.background = "green";
            })
            const newDataBtn = document.querySelector("#create-new-data-btn");
            newDataBtn.disabled = false;
          } else if (bar2 === visualization[i + 1].bar1) {
            pivot.style.background = "grey";
            comparingBar.style.background = "yellow";
          } else if (bar1 !== visualization[i + 1].bar1) {
            pivot.style.background = "grey";
          }
        }, SPEED / 1.5);
      }, SPEED / 3);
    }, SPEED * i);
    timeOuts.push(timeOut);
  })
  return timeOuts
}

export default bubbleSortAnimation;
