import { render, screen } from '@testing-library/react';
import App from '../App';
import userEvent, { fireEvent } from '@testing-library/user-event';
import { act } from 'react-dom/test-utils';

describe('Testes de integraçao', () => {
  describe('Testa o botao novos dados', () => {
    it('Botao novos dados deve gerar novos dados', async () => {
      render(<App />);
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
      render(<App />);
      const inputBarNumber = (await screen.findAllByRole('slider'))[0]

      expect(inputBarNumber).toBeInTheDocument();

      // use double click no slider e as setas para o lado para ver se o input mudou
    })
  })
});
