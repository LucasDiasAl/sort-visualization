import bubbleSort from "../func/bubbleSort";

function bubbleSortAnimation(dataArray, SPEED, setDataArray) {
  const { visualization, sorting } = bubbleSort(dataArray);
  const timeOuts = [];
  for (let i in visualization) {
    const frame = visualization[i];
    const bar1 = document.querySelector(`.bar-index-${frame.bar1.originIndex}`);
    const bar2 = document.querySelector(`.bar-index-${frame.bar2.originIndex}`);
    const timeOut = setTimeout(() => {
      bar1.style.background = "yellow";
      bar2.style.background = "blue";
      setTimeout(() => {
        if (frame.swap > 0) {
          const bar1Index = dataArray.indexOf(frame.bar1);
          const bar2Index = dataArray.indexOf(frame.bar2);
          dataArray[bar1Index] = frame.bar2;
          dataArray[bar2Index] = frame.bar1;
          setDataArray([...dataArray]);
        }
        setTimeout(() => {
          bar2.style.background = "grey";
          if (Number(i) == visualization.length - 1) {
            for (let e in sorting) {
              const bar = document.querySelector(
                `.bar-index-${dataArray[e].originIndex}`
              );
              bar.style.background = "green";
              // console.log(sorting[e] === dataArray[e]) ---> PARA TESTES APENAS
            }

            const newDataBtn = document.querySelector("#create-new-data-btn");
            newDataBtn.disabled = false;
            // console.log(sorting.length === dataArray.length) --> PARA TESTES APENAS
          } else if (frame.bar2 === visualization[Number(i) + 1].bar1) {
            // PARA QUANDO FOR HAVER UM TROCA DE PIVO(BARRA PRINCIPAL) USADO NA COMPARACAO
            bar1.style.background = "grey";
            bar2.style.background = "yellow";
          } else if (frame.bar1 !== visualization[Number(i) + 1].bar1) {
            bar1.style.background = "grey";
          }
        }, SPEED / 1.5);
      }, SPEED / 3);
    }, SPEED * i);
    timeOuts.push(timeOut);
  }
  return timeOuts;
}

export default bubbleSortAnimation;
