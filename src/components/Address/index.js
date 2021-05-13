import React, { useContext, useState, useEffect } from 'react';
import ClearButton from '../ClearButton/index';
import { useFindCepContext } from '../../contexts/useFindCepContext';
import { Container } from './style';

export default function Address() {

  const { cep } = useContext(useFindCepContext);
  const [fields, setFields] = useState({ localidade: '', uf: '', logradouro: '', bairro: ''});

  useEffect(() => {
    setFields(cep);
  }, [cep])

  return (
    <Container>
      <div className='address-response'>
        <div>
          <label htmlFor="city">Cidade:</label>
          <input className="input-city" id="city" type="text" value={ fields.localidade || '' } disabled />
        </div>
        <div>
          <label htmlFor="uf">UF:</label>
          <input className="input-uf" id="uf" type="text" value={ fields.uf || '' } disabled />
        </div>
        <div>
          <label htmlFor="street">Logradouro:</label>
          <input className="input-street" id="street" type="text" value={ fields.logradouro || '' } disabled />
        </div>
        <div>
          <label htmlFor="neighborhood">Bairro:</label>
          <input className="input-neighborhood" id="neighborhood" type="text" value={ fields.bairro || '' } disabled />
        </div>
        <ClearButton setFields={ setFields } />
      </div>
    </Container>
  )
}
