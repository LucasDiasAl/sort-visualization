import heapSort from "../func/heapSort.js";

function heapSortAnimation(dataArray, SPEED, setDataArray) {
    const {visualization, sorted} = heapSort(dataArray);
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
                    pivotElement.style.background = "grey";
                    comparingBarElement.style.background = "grey";
                    if (i === visualization.length - 1) {
                        sorted.forEach((_, index2) => {
                            const bar = document.querySelector(
                                `.bar-index-${dataArray[index2].originIndex}`
                            );
                            bar.style.background = "green";
                        })
                        const newDataBtn = document.querySelector("#create-new-data-btn");
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
