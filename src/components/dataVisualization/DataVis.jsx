import { useState, useEffect } from 'react'
import './DataVis.css'

import QuickSortAnimation from '../animations/QuickSort'
import BubbleSortAnimation from '../animations/BubbleSort'

function DataVis() {
  const SPEED = 10
  const DATA_SIZE = 200
  const [dataArray, setDataArray] = useState([])
  const [selectedSort, setSelectedSort] = useState('QuickSort')

  const OnSortClick = () => {
    const sortsAlgorithms = {
      'QuickSort': () => {QuickSortAnimation(dataArray, SPEED, setDataArray)},
      'BubbleSort': () => {BubbleSortAnimation(dataArray, SPEED, setDataArray)},
    }
    const sortFunc = sortsAlgorithms[selectedSort]
    sortFunc()
  }

  const onChangeSort = ({ target: { value } }) => {
    setSelectedSort(value)
  }

  const createDataArray = () => {
    const randomData = []
    for(let i = 0; i < DATA_SIZE; i += 1) {
      const randomInt = Math.floor(Math.random() * 491) + 10;
      randomData.push({height: randomInt, originIndex: i})
    }
    setDataArray(randomData);
  }
  useEffect(() => {
    createDataArray();
  }, [])

  return (
    <section className='d-flex flex-column mb-3'>
      <header className='d-flex flex-column align-items-center'>
        <>
          <p>Algoritimos de sort</p>
        </>
        <button className="btn btn-primary" value='QuickSort'onClick={onChangeSort}>Quick Sort</button>
        <button className="btn btn-primary" value='BubbleSort' onClick={onChangeSort}>Bubble Sort</button>

        <button className="btn btn-primary" onClick={OnSortClick}>Sort</button>
        {/* <QuickSortAnimation SPEED={SPEED} dataArray={dataArray} setDataArray={setDataArray}/> */}
      </header>
      <section className='d-flex flex-row justify-content-md-evenly align-items-end mx-5'>
        {
          dataArray.map(({height, originIndex}) => (
            <div
            className={`data-bars bar-index-${originIndex}`}
            style={{height: `${height}px`}}
            key={originIndex}></div>
            ))
          }
      </section>
    </section>
  )
}

export default DataVis
