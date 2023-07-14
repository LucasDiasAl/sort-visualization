import bubbleSort from "../func/bubbleSort";

function bubbleSortAnimation(dataArray, SPEED, setDataArray) {
  const { visualization, sorting } = bubbleSort(dataArray);
  const timeOuts = [];
  for (let i in visualization) {
    const frame = visualization[i];
    const bar1 = document.querySelector(`.bar-index-${frame.bar1.originIndex}`);
    const bar2 = document.querySelector(`.bar-index-${frame.bar2.originIndex}`);
    const timeOut = setTimeout(() => {
      bar1.style.background = "blue";
      bar2.style.background = "red";
      setTimeout(() => {
        if (frame.swap > 0) {
          const bar1Index = dataArray.indexOf(frame.bar1);
          const bar2Index = dataArray.indexOf(frame.bar2);
          dataArray[bar1Index] = frame.bar2;
          dataArray[bar2Index] = frame.bar1;
          setDataArray([...dataArray]);
        }
      }, SPEED / 3);
      setTimeout(() => {
        bar1.style.background = "grey";
        bar2.style.background = "grey";
        if (i === visualization.length - 1) {
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
    }, SPEED * (i + 1));
    timeOuts.push(timeOut);
  }
  return timeOuts;
}

export default bubbleSortAnimation;
