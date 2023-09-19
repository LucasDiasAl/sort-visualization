import PropTypes from "prop-types";
import './buttons.css'
import useWindowWidth from "../../hooks/windowSize.js";
import {useEffect, useState} from "react";

const buttonClass = "btn m-1"

function MenuButtons({
                         onSortChange,
                         onClickSort,
                         createNewData,
                         onReset,
                         numberOfBars,
                         setNumberOfBars,
                         animationSpeed,
                         setAnimationSpeed
                     }) {
    const [maxBars, setMaxBars] = useState(100)
    const windowWidth = useWindowWidth()

    useEffect(() => {
        const barPixelSize = Number(windowWidth) <= 1740 ? 5 : 7;
        const maxNumber = Math.floor((windowWidth / barPixelSize) * 0.8)
        setMaxBars(maxNumber)
        setNumberOfBars(maxNumber)
    }, [maxBars, windowWidth]);
    return (
        <section>
            <section>
                <div className="form-group">
                    <label htmlFor="numero-barras">Número de barras: ({numberOfBars})</label>
                    <input type="range" className="form-range" id="numero-barras"
                           onChange={(event) => setNumberOfBars(Number(event.target.value))}
                           min="10"
                           max={maxBars}
                           value={numberOfBars}
                    />
                </div>
                <div className="form-group">
                    <label htmlFor="velocidade-animação">Velocidade: ({animationSpeed})</label>
                    <input type="range" className="form-range" id="velocidade-animação"
                           onChange={(event) => setAnimationSpeed(Number(event.target.value))}
                           min="1"
                           max="500"
                           value={animationSpeed}/>
                </div>
            </section>

            <section>
                <div className="d-flex justify-content-center">
                    <button
                        className={`${buttonClass} btn-primary`}
                        id="create-new-data-btn"
                        onClick={createNewData}
                    >
                        Novos dados
                    </button>

                    <button onClick={onReset} className={`${buttonClass} btn-primary`}>
                        Reset
                    </button>
                </div>
                <div className="d-flex justify-content-center">
                    <button
                        className={`${buttonClass} btn-warning active`}
                        id="QuickSort"
                        value="QuickSort"
                        onClick={onSortChange}
                    >
                        Quick Sort
                    </button>
                    <button
                        className={`${buttonClass} btn-warning`}
                        id="BubbleSort"
                        value="BubbleSort"
                        onClick={onSortChange}
                    >
                        Bubble Sort
                    </button>
                    <button
                        className={`${buttonClass} btn-warning`}
                        id="SelectionSort"
                        value="SelectionSort"
                        onClick={onSortChange}
                    >
                        Selection Sort
                    </button>
                    <button
                        className={`${buttonClass} btn-warning`}
                        id="MergeSort"
                        value="MergeSort"
                        onClick={onSortChange}
                    >
                        Merge Sort
                    </button>
                    <button
                        className={`${buttonClass} btn-warning`}
                        id="HeapSort"
                        value="HeapSort"
                        onClick={onSortChange}
                    >
                        Heap Sort
                    </button>
                </div>
                <div className="d-flex justify-content-center">
                    <button id="sort-btn" onClick={onClickSort} className={`${buttonClass} btn-success`}>
                        Ordenar
                    </button>
                </div>
            </section>
        </section>
    );
}

MenuButtons.propTypes = {
    onSortChange: PropTypes.func.isRequired,
    onClickSort: PropTypes.func.isRequired,
    createNewData: PropTypes.func.isRequired,
    onReset: PropTypes.func.isRequired,
    numberOfBars: PropTypes.number.isRequired,
    setNumberOfBars: PropTypes.func.isRequired,
    animationSpeed: PropTypes.number.isRequired,
    setAnimationSpeed: PropTypes.func.isRequired
};

export default MenuButtons;
