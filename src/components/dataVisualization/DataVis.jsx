import { useState, useEffect } from 'react'
import './DataVis.css'

import quickSort from '../../func/quickSort'

function DataVis() {
  const SPEED = 10
  const DATA_SIZE = 500
  const [dataArray, setDataArray] = useState([])

  const onQuickSort = () => {
    const {sorting, visualization} = quickSort({sorting: dataArray, visualization: []})

    for( let i = 0; i < visualization.length; i++) {
      const pivot = document.querySelector(`.bar-index-${visualization[i].pivot.originIndex}`)
      const comparisonBar = document.querySelector(`.bar-index-${visualization[i].bar.originIndex}`)
      setTimeout(() => {
        if (i === 0 || visualization[i - 1].pivot !== visualization[i].pivot){
          pivot.style.background = 'red'
        }
        comparisonBar.style.background = 'blue' 
        setTimeout(() => {
          const currPivotIndex = dataArray.indexOf(visualization[i].pivot)
          const barToCompIndex = dataArray.indexOf(visualization[i].bar)
          if(visualization[i].direction === -1) {
            dataArray.splice(barToCompIndex, 1)
            dataArray.splice((currPivotIndex), 0, visualization[i].bar)
            setDataArray([...dataArray])
          }
        }, SPEED / 3)
        setTimeout(() => {
          if (visualization.length -1 === i || visualization[i + 1].pivot !== visualization[i].pivot){
            pivot.style.background = 'grey'
          }
          comparisonBar.style.background = 'grey'
          if (visualization.length - 1 === i) {
            for ( let e in sorting) {
              const bar = document.querySelector(`.bar-index-${dataArray[e].originIndex}`)
              bar.style.background = 'green'
              // console.log(sorting[e] === dataArray[e]) ---> PARA TESTES APENAS
            }
            // console.log(sorting.length === dataArray.length) --> PARA TESTES APENAS
          }
        }, SPEED / 1.5)
      }, i * SPEED)
    }
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
    <section className='data-visualizer'>
      <>
      {
        dataArray.map(({height, originIndex}) => (
          <div
          className={`data-bars bar-index-${originIndex}`}
          style={{height: `${height}px`}}
          key={originIndex}></div>
          ))
        }
      </>
      <button onClick={onQuickSort}>test</button>
    </section>
  )
}

export default DataVis
