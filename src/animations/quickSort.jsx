import quickSort from "../func/quickSort";
import testAnimation from "../AnimationTest/animationTest.js";

function quickSortAnimation(dataArray, SPEED, setDataArray) {
    const {visualization} = quickSort({
        sorted: [...dataArray],
        visualization: [],
    });
    const timeOuts = [];
    visualization.forEach(({pivot, bar, direction}, i) => {
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
                        pivotDiv.style.background = "#FCF5E5";
                    }

                    comparisonBar.style.background = "#FCF5E5";

                    if (visualization.length - 1 === i) {
                        testAnimation();
                        const newDataBtn = document.querySelector("#create-new-data-btn");
                        const barsRange = document.querySelector("#numero-barras");
                        const animationSpeedInput = document.querySelector("#velocidade-animação");
                        animationSpeedInput.disabled = false;
                        barsRange.disabled = false;
                        newDataBtn.disabled = false;
                    }
                }, SPEED * (1 / 5));
            }, SPEED * (3 / 5));
        }, i * SPEED);
        timeOuts.push(timeOut);
    });
    return timeOuts;
}

export default quickSortAnimation;
