/* eslint-disable react/jsx-no-duplicate-props */
import React, { useContext, useState } from 'react';
import { useFindCepContext } from '../../contexts/useFindCepContext';
import { cepMask } from '../../utils/cepMask';

import { Container } from './style';

export default function FindCep() {

  const { setNumbers } = useContext(useFindCepContext);
  const [ param, setParam ] = useState('');

  function handleClick() {
    setNumbers(param);
  }

  return (
    <Container>
      <h2>Consulta de CEP</h2>
      <div>
        <input 
          type="text"
          placeholder="Digite seu CEP" 
          name='find'
          onChange={(e) => setParam(e.target.value)}
          value={cepMask(param)}
        />
        <button onClick={() => handleClick()}>OK</button>
      </div>
    </Container>
  )
}
