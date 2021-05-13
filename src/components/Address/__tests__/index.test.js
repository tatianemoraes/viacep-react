import React from 'react';
import { render } from '@testing-library/react';
import MockAdapter from 'axios-mock-adapter';
import '@testing-library/jest-dom';
import '@testing-library/jest-dom/extend-expect';
import Adress from '../index'; 
import FindCepContextProvider from '../../../contexts/useFindCepContext';
import api from '../../../services/api';

describe('Addres', () => {

  const mock = new MockAdapter(api);

  it('after request api complete all fields', () => {


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

    const setState = jest.fn();
    const useStateSpy = jest.spyOn(React, 'useState');
    
    useStateSpy.mockImplementation((state) => [state, setState]);

    render(
      <FindCepContextProvider>
        <Adress />
      </FindCepContextProvider>
    ); 

    setState({
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
   
    expect(setState).toHaveBeenCalledWith({
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
  });
});