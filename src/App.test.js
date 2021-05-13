import React from 'react';
import { render, screen } from '@testing-library/react';
import '@testing-library/jest-dom';
import '@testing-library/jest-dom/extend-expect';
import 'jest-styled-components';
import App from './App';


test('renders learn react link', () => {
  render(<App />);
  const linkElement = screen.getByText('Busca de CEP');
  expect(linkElement).toBeInTheDocument();
});