import heapSort from "../func/heapSort.js";
import animationTest from "../AnimationTest/animationTest.js";

function heapSortAnimation(dataArray, SPEED, setDataArray) {
    const {visualization} = heapSort(dataArray);
    const timeOuts = [];

    visualization.forEach(({pivot, comparingBar}, i) => {
        const pivotElement = document.querySelector(`.bar-index-${pivot.originIndex}`);
        const comparingBarElement = document.querySelector(`.bar-index-${comparingBar.originIndex}`);
        const timeOut = setTimeout(() => {
            pivotElement.style.background = "yellow";
            comparingBarElement.style.background = "blue";
            setTimeout(() => {
                const pivotIndex = dataArray.indexOf(pivot);
                const comparingBarIndex = dataArray.indexOf(comparingBar);
                [dataArray[pivotIndex], dataArray[comparingBarIndex]] = [
                    dataArray[comparingBarIndex], dataArray[pivotIndex]
                ]
                setDataArray([...dataArray]);

                setTimeout(() => {
                    pivotElement.style.background = "#FCF5E5";
                    comparingBarElement.style.background = "#FCF5E5";
                    if (i === visualization.length - 1) {
                        animationTest();
                        const newDataBtn = document.querySelector("#create-new-data-btn");
                        const barsRange = document.querySelector("#numero-barras");
                        const animationSpeedInput = document.querySelector("#velocidade-animação");
                        animationSpeedInput.disabled = false;
                        barsRange.disabled = false;
                        newDataBtn.disabled = false;
                    }
                }, SPEED * (1 / 5))
            }, SPEED * (3 / 5))
        }, SPEED * i)
        timeOuts.push(timeOut);
    })
    return timeOuts;
}

export default heapSortAnimation;
