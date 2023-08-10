import mergeSort from "../func/mergeSort";

export default function mergeSortAnimation(dataArray, SPEED, setDataArray) {
    const { sorting, visualization } = mergeSort([...dataArray]);
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
                    pivotIndex.style.background = "grey";
                    firstBar.style.background = "grey";
                    if (i === visualization.length - 1) {
                        const newDataBtn = document.querySelector("#create-new-data-btn");
                        newDataBtn.disabled = false;
                        sorting.forEach((_, index2) => {
                          const bar = document.querySelector(
                            `.bar-index-${dataArray[index2].originIndex}`
                          );
                          bar.style.background = "green";
                        })}
                }, SPEED * (1 / 5))
            }, SPEED * (3 / 5))
        }, i * SPEED)
        timeOuts.push(timeOut);
    })
    return timeOuts;
}