import selectionSort from "../func/selectionSort";

function selectionSortAnimation(dataArray, SPEED, setDataArray) {
  const { sorting, visualization } = selectionSort(dataArray);
  let currentPivotBar = null;
  const timeOuts = [];

  visualization.forEach((frame, i) => {
    const timeOut = setTimeout(() => {
      const bar1 = document.querySelector(
        `.bar-index-${frame.smallestBar.originIndex}`
      );
      const bar2 = document.querySelector(
        `.bar-index-${frame.comparingBar.originIndex}`
      );

      if (currentPivotBar === null) {
        // VERDE PARA A BARRA QUE SE ENCONTRA O INDEX ONDE QUEREMOS BOTAR A MENOR BARRA
        // AZUL PARA COMPARACAO
        bar1.style.background = "green";
        bar2.style.background = "blue";
        currentPivotBar = frame.smallestBar;
      } else if (frame.swap === 1) {
        currentPivotBar = null;
        // AMARELO DURANTO O CICLO DE TROCA
        bar1.style.background = "yellow";
        bar2.style.background = "yellow";
      } else if (currentPivotBar !== frame.smallestBar) {
        // AMARELO PARA QUANDO ACHAMOS UM NOVO PIVO MENOR QUE O INICAL
        bar1.style.background = "yellow";
      }
      // AZUL PARA COMPARACAO
      bar2.style.background = "blue";

      setTimeout(() => {
        if (frame.swap === 1) {
          const indexOfPivot = dataArray.indexOf(frame.smallestBar);
          const indexOfComparing = dataArray.indexOf(frame.comparingBar);
          [dataArray[indexOfPivot], dataArray[indexOfComparing]] = [
            dataArray[indexOfComparing],
            dataArray[indexOfPivot],
          ];
          setDataArray([...dataArray]);
        }

        setTimeout(() => {
          bar2.style.background = "grey";

          if (i === visualization.length - 1) {
            sorting.forEach((_, e) => {
              const bar = document.querySelector(
                `.bar-index-${dataArray[e].originIndex}`
              );
              bar.style.background = "green";
            });

            const newDataBtn = document.querySelector("#create-new-data-btn");
            newDataBtn.disabled = false;
          } else if (frame.swap === 1) {
            // PARA QUANDO FOR FINALIZAR O CICLO E TIVER OCORRIDO UMA TROCA DE POSICOES
            bar1.style.background = "grey";
            bar2.style.background = "grey";
          } else if (
            currentPivotBar !== frame.smallestBar &&
            frame.smallestBar !== visualization[i + 1].smallestBar
          ) {
            // PARA QUANDO UM NOVO PIVO DE REFERENCIA(BARRA MENOR) FOR ACHADO
            bar1.style.background = "grey";
          } else if (
            // PARA QUANDO O PIVO INICIAL ACABAR SENDO O MENOR E NENHUM OUTRO NAO FOR
            // ACHADO, NAO SENDO NECESSARIO A TROCA
            currentPivotBar !== visualization[i + 1].smallestBar &&
            frame.comparingBar !== visualization[i + 1].smallestBar &&
            currentPivotBar === frame.smallestBar
          ) {
            bar1.style.background = "grey";
          }
        }, SPEED / 1.5);
      }, SPEED / 3);
    }, SPEED * i);

    timeOuts.push(timeOut);
  });

  return timeOuts;
}

export default selectionSortAnimation;

// REFATORAR OS OUTROS ALGORITIMOS SEGUINDO ESTE PADRAO
