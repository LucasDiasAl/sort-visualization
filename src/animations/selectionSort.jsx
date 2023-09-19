import selectionSort from "../func/selectionSort";
import testAnimation from "../AnimationTest/animationTest.js";

function selectionSortAnimation(dataArray, SPEED, setDataArray) {
    const {visualization} = selectionSort(dataArray);
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
                pivotBar.style.background = "yellow";
                barToCompare.style.background = "blue";
                currentPivotBar = smallestBar;
                initialPivot = smallestBar;
            } else if (swap === 1) {
                currentPivotBar = null;
                initialPivot = null;
                pivotBar.style.background = "green";
                barToCompare.style.background = "green";
            } else if (currentPivotBar !== smallestBar && currentPivotBar !== null) {
                if (currentPivotBar !== initialPivot) {
                    const oldPivot = document.querySelector(
                        `.bar-index-${currentPivotBar.originIndex}`
                    );
                    oldPivot.style.background = "#FCF5E5";
                }
                pivotBar.style.background = "green";
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
                        testAnimation();
                        const newDataBtn = document.querySelector("#create-new-data-btn");
                        const barsRange = document.querySelector("#numero-barras");
                        const animationSpeedInput = document.querySelector("#velocidade-animação");
                        animationSpeedInput.disabled = false;
                        barsRange.disabled = false;
                        newDataBtn.disabled = false;
                    } else {
                        const nextPivotDifferent = comparingBar !== visualization[i + 1].smallestBar
                        const nextoPivotSame = smallestBar !== visualization[i + 1].smallestBar
                        if (swap > 0 || (nextPivotDifferent && nextoPivotSame)) {
                            pivotBar.style.background = "#FCF5E5";
                            barToCompare.style.background = "#FCF5E5";
                        } else {
                            barToCompare.style.background = "#FCF5E5";
                        }
                    }
                }, SPEED * (1 / 5));
            }, SPEED * (3 / 5));
        }, SPEED * i);

        timeOuts.push(timeOut);
    });

    return timeOuts;
}

export default selectionSortAnimation;
