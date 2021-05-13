import React from 'react';
import renderer from 'react-test-renderer';
import Cep from '../Cep';
import FindCepContextProvider from '../../contexts/useFindCepContext';

it('renders correctly', () => {
  const tree = renderer
    .create(
    <FindCepContextProvider>
      <Cep />
    </FindCepContextProvider>
    )
    .toJSON();
  expect(tree).toMatchSnapshot();
});