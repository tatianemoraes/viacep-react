import React from 'react';
import ReactDOM from 'react-dom';
import { render } from '@testing-library/react';
import '@testing-library/jest-dom';
import '@testing-library/jest-dom/extend-expect';

import Index from './index';

it('renders without crashing', () => {
  const div = document.createElement('div');
  render(<Index />);
  expect(div).toBeInTheDocument();
});