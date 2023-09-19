import {useState, useEffect} from "react";
import "./DataVis.css";

import quickSortAnimation from "../../animations/quickSort";
import bubbleSortAnimation from "../../animations/bubbleSort";
import selectionSortAnimation from "../../animations/selectionSort";
import mergeSortAnimation from "../../animations/mergeSort";
import heapSortAnimation from "../../animations/heapSort.jsx";

import MenuButtons from "../Buttons/MenuButtons";

function DataVis() {
    const [unsortedData, setUnsortedData] = useState([]);
    const [dataArray, setDataArray] = useState([]);
    const [selectedSort, setSelectedSort] = useState("QuickSort");
    const [timeOutsArray, setTimeOutsArray] = useState([]);
    const [numberOfBars, setNumberOfBars] = useState(100);
    const [animationSpeed, setAnimationSpeed] = useState(10);

    const sortsAlgorithms = {
        QuickSort: () => quickSortAnimation(dataArray, animationSpeed, setDataArray),
        BubbleSort: () => bubbleSortAnimation(dataArray, animationSpeed, setDataArray),
        SelectionSort: () => selectionSortAnimation(dataArray, animationSpeed, setDataArray),
        MergeSort: () => mergeSortAnimation(dataArray, animationSpeed, setDataArray),
        HeapSort: () => heapSortAnimation(dataArray, animationSpeed, setDataArray),
    };
    const onClickSort = () => {
        const sortBtn = document.querySelector("#sort-btn");
        const newDataBtn = document.querySelector("#create-new-data-btn");
        const barsRange = document.querySelector("#numero-barras");
        const animationSpeedInput = document.querySelector("#velocidade-animação")
        animationSpeedInput.disabled = true;
        barsRange.disabled = true;
        sortBtn.disabled = true;
        newDataBtn.disabled = true;
        const sortFunc = sortsAlgorithms[selectedSort];
        const timeOutsCreated = sortFunc();
        setTimeOutsArray([...timeOutsCreated]);
    };

    const onSortChange = ({target: {value}}) => {
        const oldSelected = document.querySelector(".active");
        oldSelected.classList.remove("active");
        const sortSelected = document.getElementById(value);
        sortSelected.classList.add("active");
        setSelectedSort(value);
    };

    const onReset = () => {
        for (let i of timeOutsArray) {
            clearTimeout(i);
        }
        setDataArray([...unsortedData])
        const bars = document.querySelectorAll(".data-bars");
        for (let bar of bars) {
            bar.style.backgroundColor = "#FCF5E5";
        }
        const sortBtn = document.querySelector("#sort-btn");
        const newDataBtn = document.querySelector("#create-new-data-btn");
        const barsRange = document.querySelector("#numero-barras");
        const animationSpeedInput = document.querySelector("#velocidade-animação")
        animationSpeedInput.disabled = false;
        barsRange.disabled = false;
        sortBtn.disabled = false;
        newDataBtn.disabled = false;
    };

    const createNewData = () => {
        createDataArray();
        const sortBtn = document.querySelector("#sort-btn")
        sortBtn.disabled = false;
    };

    const createDataArray = () => {
        const randomData = [];
        for (let i = 0; i < numberOfBars; i += 1) {
            const randomInt = Math.floor(Math.random() * 491) + 10;
            randomData.push({height: randomInt, originIndex: i});
        }
        const bars = document.querySelectorAll(".data-bars");
        for (let bar of bars) {
            bar.style.background = "#FCF5E5";
        }
        setDataArray([...randomData]);
        setUnsortedData([...randomData]);
    };

    useEffect(() => {
        createDataArray();
    }, [numberOfBars]);

    return (
        <section className="d-flex flex-column gap-xl-5 align-items-center justify-content-center">
            <header className="d-flex flex-column gap-1 align-items-center">
                <>
                    <p className="titulo">ALGORITIMOS DE ORDENAÇÃO</p>
                </>
                <MenuButtons
                    onSortChange={onSortChange}
                    onClickSort={onClickSort}
                    createNewData={createNewData}
                    onReset={onReset}
                    numberOfBars={numberOfBars}
                    setNumberOfBars={setNumberOfBars}
                    animationSpeed={animationSpeed}
                    setAnimationSpeed={setAnimationSpeed}
                />
            </header>
            <main>
                <section className="d-flex align-items-end min bars-div">
                    {dataArray.map(({height, originIndex}) => (
                        <div
                            className={`data-bars bar-index-${originIndex}`}
                            style={{height: `${height}px`}}
                            key={originIndex}
                        ></div>
                    ))}
                </section>
            </main>
        </section>
    );
}

export default DataVis;

// IMPLEMENTAR CONTEXTO GLOBAR E CRIAR UM NOVO COMPONENTE PARA OS BUTOES QUE MUDAM O ALGORITIMO
