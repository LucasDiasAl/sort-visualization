import bubbleSort from "../func/bubbleSort";
import testAnimation from "../AnimationTest/animationTest.js";

function bubbleSortAnimation(dataArray, SPEED, setDataArray) {
    const {visualization} = bubbleSort(dataArray);
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
                    comparingBar.style.background = "#FCF5E5";
                    if (i === visualization.length - 1) {
                        testAnimation();
                        const newDataBtn = document.querySelector("#create-new-data-btn");
                        const barsRange = document.querySelector("#numero-barras");
                        const animationSpeedInput = document.querySelector("#velocidade-animação");
                        animationSpeedInput.disabled = false;
                        barsRange.disabled = false;
                        newDataBtn.disabled = false;
                    } else if (bar2 === visualization[i + 1].bar1) {
                        pivot.style.background = "#FCF5E5";
                        comparingBar.style.background = "yellow";
                    } else if (bar1 !== visualization[i + 1].bar1) {
                        pivot.style.background = "#FCF5E5";
                    }
                }, SPEED * (1 / 5))
            }, SPEED * (3 / 5))
        }, SPEED * i)
        timeOuts.push(timeOut);
    })
    return timeOuts;
}

export default bubbleSortAnimation;
