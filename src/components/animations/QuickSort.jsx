import quickSort from '../../func/quickSort'

import PropTypes from 'prop-types'

function QuickSortAnimation({dataArray, SPEED, setDataArray}) {

const onQuickSortAnimation = () => {
  const {sorting, visualization} = quickSort({sorting: dataArray, visualization: []})
  for( let i = 0; i < visualization.length; i++) {

    const { pivot, bar, direction } = visualization[i]

    const pivotDiv = document.querySelector(`.bar-index-${pivot.originIndex}`)

    const comparisonBar = document.querySelector(`.bar-index-${bar.originIndex}`)

    setTimeout(() => {
      // timeout para a animaçao da comparacao
      if (i === 0 || visualization[i - 1].pivot !== pivot){
        pivotDiv.style.background = 'red'
      }

      comparisonBar.style.background = 'blue' 

      setTimeout(() => {
        // timeout para movimentaçao
        const currPivotIndex = dataArray.indexOf(pivot)

        const barToCompIndex = dataArray.indexOf(bar)

        if(direction === -1) {
          dataArray.splice(barToCompIndex, 1)
          dataArray.splice((currPivotIndex), 0, bar)
          setDataArray([...dataArray])
        }

      }, SPEED / 3)
      setTimeout(() => {
        // timeout para a finalizar o processo
        if (visualization.length -1 === i || visualization[i + 1].pivot !== pivot){
          pivotDiv.style.background = 'grey'
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

  return (
    <>
      <button onClick={onQuickSortAnimation}>test</button>
    </>
  )
}

QuickSortAnimation.propTypes = {
  SPEED: PropTypes.number.isRequired,
  dataArray: PropTypes.array.isRequired,
  setDataArray: PropTypes.func.isRequired,
};

export default QuickSortAnimation