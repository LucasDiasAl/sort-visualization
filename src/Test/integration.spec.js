import { render, screen, fireEvent, waitFor } from '@testing-library/react';
import App from '../App';
import userEvent from '@testing-library/user-event';
import { act } from 'react-dom/test-utils';

describe('Testes de integraçao', () => {
  beforeEach(() => {
    render(<App />);
  })
  describe('Testa o botao novos dados', () => {
    it('Botao novos dados deve gerar novos dados', async () => {
      const oldBars = screen.getByTestId('bars-container');
      
      const loopSize = oldBars.children.length;
      
      const oldBarsSizes = [];
      
      for (let i = 0; i < loopSize; i++) {
        oldBarsSizes.push(oldBars.children[i].style.height);
      }
      
    const newDataButton = screen.getByText('Novos dados');
    
    expect(newDataButton).toBeInTheDocument();

    await act(async () => {
      await userEvent.click(newDataButton);
    });
    
    const newBars = await screen.findByTestId('bars-container');
    
    const newBarsSizes = [];
    
    for (let i = 0; i < loopSize; i++) {
      newBarsSizes.push(oldBars.children[i].style.height);
    }
    
    expect(newBarsSizes).not.toBe(oldBarsSizes);
  });
})
  describe('Testa os inputs de range', () => {

    it('Testa o input range para o numero de barras', async() => {
      const rangeInputNumBars = (await screen.findAllByRole('slider'))[0]
      const barsDiv = screen.getByTestId('bars-container');
      expect(Number(barsDiv.children.length)).toBe(Number(rangeInputNumBars.value));

      fireEvent.change(rangeInputNumBars, { target: { value: '20' } });

      expect(rangeInputNumBars.value).toBe('20');
      expect(Number(barsDiv.children.length)).toBe(Number(rangeInputNumBars.value));
    })

    it('Testa o input range para a velocidade da animacao', async() => {
      const rangeInputSpeed = (await screen.findAllByRole('slider'))[1];

      expect(rangeInputSpeed.value).toBe('10');

      fireEvent.change(rangeInputSpeed, { target: { value: '500' } });

      expect(rangeInputSpeed.value).toBe('500');
    })
  })
  describe('Testa o funcionamento dos algoritimos e suas animacoes', () => {

    it('Testa o algoritimo e a animacao do Quick Sort', async () => {
      jest.useFakeTimers();

      const rangeInputNumBars = (await screen.findAllByRole('slider'))[0]
      fireEvent.change(rangeInputNumBars, { target: { value: '10' } });

      const rangeInputSpeed = (await screen.findAllByRole('slider'))[1];
      fireEvent.change(rangeInputSpeed, { target: { value: '1' } });

      const quickSortBtn = screen.getByRole('button', { name: 'Quick Sort' });
      expect(quickSortBtn).toHaveClass('active');

      const sortBtn = screen.getByRole('button', { name: 'Ordenar'});
      const newDataBtn = screen.getByRole('button', { name: 'Novos dados'});

      fireEvent.click(sortBtn);
      expect(newDataBtn).toBeDisabled();
      await act(async () => {
        await jest.advanceTimersByTime(500);
      })
      const barsDivs = screen.getByTestId('bars-container').childNodes;

      barsDivs.forEach((bar) => {
        expect(bar.style.backgroundColor).toBe('green');
      })

      expect(newDataBtn).not.toBeDisabled();
      expect(sortBtn).toBeDisabled();
      jest.useRealTimers();
    })

    it('Testa o algoritimo e a animacao do Bubble Sort', async () => {
      jest.useFakeTimers();

      const rangeInputNumBars = (await screen.findAllByRole('slider'))[0]
      fireEvent.change(rangeInputNumBars, { target: { value: '10' } });

      const rangeInputSpeed = (await screen.findAllByRole('slider'))[1];
      fireEvent.change(rangeInputSpeed, { target: { value: '1' } });

      const BubbleSortBtn = screen.getByRole('button', { name: 'Bubble Sort' });
      expect(BubbleSortBtn).not.toHaveClass('active');

      fireEvent.click(BubbleSortBtn);

      expect(BubbleSortBtn).toHaveClass('active');

      const sortBtn = screen.getByRole('button', { name: 'Ordenar'});
      const newDataBtn = screen.getByRole('button', { name: 'Novos dados'});

      fireEvent.click(sortBtn);
      expect(newDataBtn).toBeDisabled();
      await act(async () => {
        await jest.advanceTimersByTime(500);
      })
      const barsDivs = screen.getByTestId('bars-container').childNodes;

      barsDivs.forEach((bar) => {
        expect(bar.style.backgroundColor).toBe('green');
      })

      expect(newDataBtn).not.toBeDisabled();
      expect(sortBtn).toBeDisabled();
      jest.useRealTimers();
    })

    it('Testa o algoritimo e a animacao do Selection Sort', async () => {
      jest.useFakeTimers();

      const rangeInputNumBars = (await screen.findAllByRole('slider'))[0]
      fireEvent.change(rangeInputNumBars, { target: { value: '10' } });

      const rangeInputSpeed = (await screen.findAllByRole('slider'))[1];
      fireEvent.change(rangeInputSpeed, { target: { value: '1' } });

      const SelectionSortBtn = screen.getByRole('button', { name: 'Selection Sort' });
      expect(SelectionSortBtn).not.toHaveClass('active');

      fireEvent.click(SelectionSortBtn);

      expect(SelectionSortBtn).toHaveClass('active');

      const sortBtn = screen.getByRole('button', { name: 'Ordenar'});
      const newDataBtn = screen.getByRole('button', { name: 'Novos dados'});

      fireEvent.click(sortBtn);
      expect(newDataBtn).toBeDisabled();
      await act(async () => {
        await jest.advanceTimersByTime(500);
      })
      const barsDivs = screen.getByTestId('bars-container').childNodes;

      barsDivs.forEach((bar) => {
        expect(bar.style.backgroundColor).toBe('green');
      })

      expect(newDataBtn).not.toBeDisabled();
      expect(sortBtn).toBeDisabled();
      jest.useRealTimers();
    })

    it('Testa o algoritimo e a animacao do Merge Sort', async () => {
      jest.useFakeTimers();

      const rangeInputNumBars = (await screen.findAllByRole('slider'))[0]
      fireEvent.change(rangeInputNumBars, { target: { value: '10' } });

      const rangeInputSpeed = (await screen.findAllByRole('slider'))[1];
      fireEvent.change(rangeInputSpeed, { target: { value: '1' } });

      const MergeSortBtn = screen.getByRole('button', { name: 'Merge Sort' });
      expect(MergeSortBtn).not.toHaveClass('active');

      fireEvent.click(MergeSortBtn);

      expect(MergeSortBtn).toHaveClass('active');

      const sortBtn = screen.getByRole('button', { name: 'Ordenar'});
      const newDataBtn = screen.getByRole('button', { name: 'Novos dados'});

      fireEvent.click(sortBtn);
      expect(newDataBtn).toBeDisabled();
      await act(async () => {
        await jest.advanceTimersByTime(500);
      })
      const barsDivs = screen.getByTestId('bars-container').childNodes;

      barsDivs.forEach((bar) => {
        expect(bar.style.backgroundColor).toBe('green');
      })

      expect(newDataBtn).not.toBeDisabled();
      expect(sortBtn).toBeDisabled();
      jest.useRealTimers();
    })

    it('Testa o algoritimo e a animacao do Heap Sort', async () => {
      jest.useFakeTimers();

      const rangeInputNumBars = (await screen.findAllByRole('slider'))[0]
      fireEvent.change(rangeInputNumBars, { target: { value: '10' } });

      const rangeInputSpeed = (await screen.findAllByRole('slider'))[1];
      fireEvent.change(rangeInputSpeed, { target: { value: '1' } });

      const HeapSortBtn = screen.getByRole('button', { name: 'Heap Sort' });
      expect(HeapSortBtn).not.toHaveClass('active');

      fireEvent.click(HeapSortBtn);

      expect(HeapSortBtn).toHaveClass('active');

      const sortBtn = screen.getByRole('button', { name: 'Ordenar'});
      const newDataBtn = screen.getByRole('button', { name: 'Novos dados'});

      fireEvent.click(sortBtn);
      expect(newDataBtn).toBeDisabled();
      await act(async () => {
        await jest.advanceTimersByTime(500);
      })
      const barsDivs = screen.getByTestId('bars-container').childNodes;

      barsDivs.forEach((bar) => {
        expect(bar.style.backgroundColor).toBe('green');
      })

      expect(newDataBtn).not.toBeDisabled();
      expect(sortBtn).toBeDisabled();
      jest.useRealTimers();
    })
  })
});
