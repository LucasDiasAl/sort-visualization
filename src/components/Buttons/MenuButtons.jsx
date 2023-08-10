import PropTypes from "prop-types";

function MenuButtons({ onSortChange, onClickSort, createNewData, onReset }) {
  return (
    <section className="d-flex flex-column aling-items-center">
      <div>
        <button
          className="btn btn-primary m-2"
          id="create-new-data-btn"
          onClick={createNewData}
        >
          Novos dados
        </button>
        <button className="btn btn-primary m-2" onClick={onReset}>
          Reset
        </button>
      </div>
      <div>
        <button
          className="btn btn-primary m-2 active"
          id="QuickSort"
          value="QuickSort"
          onClick={onSortChange}
        >
          Quick Sort
        </button>
        <button
          className="btn btn-primary m-2"
          id="BubbleSort"
          value="BubbleSort"
          onClick={onSortChange}
        >
          Bubble Sort
        </button>
        <button
          className="btn btn-primary m-2"
          id="SelectionSort"
          value="SelectionSort"
          onClick={onSortChange}
        >
          Selection Sort
        </button>
        <button
          className="btn btn-primary m-2"
          id="MergeSort"
          value="MergeSort"
          onClick={onSortChange}
        >
          Merge Sort
        </button>
      </div>
      <div className="d-flex justify-content-center">
        <button className="btn btn-primary" id="sort-btn" onClick={onClickSort}>
          Ordenar
        </button>
      </div>
    </section>
  );
}

MenuButtons.propTypes = {
  onSortChange: PropTypes.func.isRequired,
  onClickSort: PropTypes.func.isRequired,
  createNewData: PropTypes.func.isRequired,
  onReset: PropTypes.func.isRequired,
};

export default MenuButtons;
