import { render, screen } from '@testing-library/react';
import '@testing-library/jest-dom';
import Header from '../index';

describe('Header', () => {
  it('should render correctly', () => {
    render(<Header />);

    const text = screen.getByText('Busca de CEP');
    expect(text).toBeInTheDocument();
  })
});