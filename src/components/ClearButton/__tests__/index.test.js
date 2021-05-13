import { render, screen, fireEvent } from '@testing-library/react';
import '@testing-library/jest-dom';
import FindCepContextProvider from '../../../contexts/useFindCepContext';
import ClearButton from '../index';

describe('ClearButton', () => {
  it('should clear fields after button clicked', () => {

    const btnMock = jest.fn();

    render(
      <FindCepContextProvider>
        <ClearButton setFields={btnMock}/>
      </FindCepContextProvider>
    );

    const btnClear = screen.getByRole('button', { name: 'CLEAR' });
    
    fireEvent.click(btnClear);

    expect(btnMock).toHaveBeenCalledTimes(1);

  });
});