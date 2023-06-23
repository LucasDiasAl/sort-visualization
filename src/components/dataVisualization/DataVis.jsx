import { useState, useEffect } from 'react'
import './DataVis.css'
function DataVis() {

  const [dataArray, setDataArray] = useState([])


  const createDataArray = () => {
    for(let i = 0; i < 200; i += 1) {
      const randomInt = Math.floor(Math.random() * 491) + 10;
      setDataArray((prevsArray) => [...prevsArray, randomInt]);
    }
  }
  useEffect(() => {
    createDataArray();
  }, [])

  return (
    <section className='data-visualizer'>
      {
        dataArray.map((value, index) => (
          <div
          className='data-bars'
          style={{height: `${value}px`}}
          key={index}></div>
        ))
      }
    </section>
  )
}

export default DataVis
