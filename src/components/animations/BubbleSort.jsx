import bubbleSort from '../../func/bubbleSort'

function BubbleSortAnimation(dataArray, SPEED, setDataArray) {
  const {visualization} = bubbleSort(dataArray)
  for (let i in visualization) {
    const frame = visualization[i]
    const bar1 = document.querySelector(`.bar-index-${frame.bar1.originIndex}`)
    const bar2 = document.querySelector(`.bar-index-${frame.bar2.originIndex}`)
    setTimeout(() => {
      bar1.style.background = 'blue'
      bar2.style.background = 'red'
      setTimeout(() => {
        if (frame.swap > 0) {
          const bar1Index = dataArray.indexOf(frame.bar1)
          const bar2Index = dataArray.indexOf(frame.bar2)
          dataArray[bar1Index] = frame.bar2
          dataArray[bar2Index] = frame.bar1
          setDataArray([...dataArray])
        }
      }, SPEED / 3)
      setTimeout(() => {
        bar1.style.background = 'black'
        bar2.style.background = 'black'  
      }, SPEED / 1.5)
    }, SPEED * i)
  }
}

export default BubbleSortAnimation
