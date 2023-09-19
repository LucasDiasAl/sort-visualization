import mergeSort from "../func/mergeSort";
import testAnimation from "../AnimationTest/animationTest.js";

export default function mergeSortAnimation(dataArray, SPEED, setDataArray) {
    const {visualization} = mergeSort([...dataArray]);
    const timeOuts = [];

    visualization.forEach(({indexToPutIn, swapWith}, i) => {
        const pivotIndex = document.querySelector(`.bar-index-${indexToPutIn}`);

        const firstBar = document.querySelector(`.bar-index-${swapWith.originIndex}`);

        const timeOut = setTimeout(() => {
            pivotIndex.style.background = "yellow";

            firstBar.style.background = "blue";
            setTimeout(() => {
                const swapWithIndex = dataArray.indexOf(swapWith);
                const tmp = dataArray[indexToPutIn];
                dataArray[indexToPutIn] = dataArray[swapWithIndex];
                dataArray[swapWithIndex] = tmp;
                setDataArray([...dataArray]);
                setTimeout(() => {
                    pivotIndex.style.background = "#FCF5E5";
                    firstBar.style.background = "#FCF5E5";
                    if (i === visualization.length - 1) {
                        testAnimation();
                        const newDataBtn = document.querySelector("#create-new-data-btn");
                        const barsRange = document.querySelector("#numero-barras");
                        const animationSpeedInput = document.querySelector("#velocidade-animação");
                        animationSpeedInput.disabled = false;
                        barsRange.disabled = false;
                        newDataBtn.disabled = false;
                    }
                }, SPEED * (1 / 5))
            }, SPEED * (3 / 5))
        }, i * SPEED)
        timeOuts.push(timeOut);
    })
    return timeOuts;
}