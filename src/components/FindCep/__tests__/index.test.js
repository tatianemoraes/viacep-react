import { fireEvent, render, screen } from '@testing-library/react';
import MockAdapter from 'axios-mock-adapter';
import '@testing-library/jest-dom';
import '@testing-library/jest-dom/extend-expect';
import FindCep from '../index';
import FindCepContextProvider from '../../../contexts/useFindCepContext';
import api from '../../../services/api';


describe('FindCep', () => {

  const mock = new MockAdapter(api);

  it('should render correctly contents for fields when button to be clicked', async () => {

    const mockHandle = {
      handleClick: jest.fn()
    }

    const mockSpy = jest.spyOn(mockHandle, 'handleClick');

    mock.onGet(`/13212422/json`).reply(200, {
      "cep": "13212-422",
      "logradouro": "Rua Sérgio Negri",
      "complemento": "",
      "bairro": "Fazenda Grande",
      "localidade": "Jundiaí",
      "uf": "SP",
      "ibge": "3525904",
      "gia": "4078",
      "ddd": "11",
      "siafi": "6619"
    });
  
    render(
      <FindCepContextProvider>
        <FindCep />
      </FindCepContextProvider>
    );

    const input = screen.getByPlaceholderText('Digite seu CEP');
    fireEvent.change(input, { target: { value: '13.212-422' } });
    expect(input).toHaveValue('13.212-422');

    const btnOk = screen.getByRole('button', { name: 'OK' });
    fireEvent.click(btnOk); 
    mockHandle.handleClick();
    expect(mockSpy).toHaveBeenCalled();

  });

});