import { useState, useEffect } from "react";
import "./DataVis.css";

import quickSortAnimation from "../../animations/quickSort";
import bubbleSortAnimation from "../../animations/bubbleSort";
import selectionSortAnimation from "../../animations/selectionSort";

import MenuButtons from "../Buttons/MenuButtons";

function DataVis() {
  const SPEED = 2000;
  const DATA_SIZE = 10;
  const [unsortedData, setUnsortedData] = useState([]);
  const [dataArray, setDataArray] = useState([]);
  const [selectedSort, setSelectedSort] = useState("QuickSort");
  const [timeOutsArray, setTimeOutsArray] = useState([]);

  const onClickSort = () => {
    const sortBtn = document.querySelector("#sort-btn");
    const newDataBtn = document.querySelector("#create-new-data-btn");
    sortBtn.disabled = true;
    newDataBtn.disabled = true;
    const sortsAlgorithms = {
      QuickSort: () => quickSortAnimation(dataArray, SPEED, setDataArray),
      BubbleSort: () => bubbleSortAnimation(dataArray, SPEED, setDataArray),
      SelectionSort: () =>
        selectionSortAnimation(dataArray, SPEED, setDataArray),
    };
    const sortFunc = sortsAlgorithms[selectedSort];
    const timeOutsCreated = sortFunc();
    setTimeOutsArray([...timeOutsCreated]);
  };

  const onSortChange = ({ target: { value } }) => {
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
    setDataArray([...unsortedData]);
    const bars = document.querySelectorAll(".data-bars");
    for (let bar of bars) {
      bar.style.backgroundColor = "grey";
    }
    const sortBtn = document.querySelector("#sort-btn");
    const newDataBtn = document.querySelector("#create-new-data-btn");
    sortBtn.disabled = false;
    newDataBtn.disabled = false;
  };

  const createNewData = () => {
    createDataArray();
    const bars = document.querySelectorAll(".data-bars");
    for (let bar of bars) {
      bar.style.backgroundColor = "grey";
    }
  };

  const createDataArray = () => {
    const randomData = [];
    for (let i = 0; i < DATA_SIZE; i += 1) {
      const randomInt = Math.floor(Math.random() * 491) + 10;
        randomData.push({ height: randomInt, originIndex: i });
    }
    setDataArray([...randomData]);
    setUnsortedData([...randomData]);
  };

  useEffect(() => {
    createDataArray();
  }, []);

  return (
    <section className="d-flex flex-column mb-3">
      <header className="d-flex flex-column align-items-center">
        <>
          <p>ALGORITIMOS DE ORDENAÇÃO</p>
        </>
        <MenuButtons
          onSortChange={onSortChange}
          onClickSort={onClickSort}
          createNewData={createNewData}
          onReset={onReset}
        />
      </header>
      <section className="d-flex flex-row justify-content-md-evenly align-items-end mx-5">
        {dataArray.map(({ height, originIndex }) => (
          <div
            className={`data-bars bar-index-${originIndex}`}
            style={{ height: `${height}px` }}
            key={originIndex}
          ></div>
        ))}
      </section>
    </section>
  );
}

export default DataVis;

// IMPLEMENTAR CONTEXTO GLOBAR E CRIAR UM NOVO COMPONENTE PARA OS BUTOES QUE MUDAM O ALGORITIMO
