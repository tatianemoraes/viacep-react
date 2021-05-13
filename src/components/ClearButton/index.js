import React from 'react';
import { Container } from './style';

export default function ClearButton({ setFields }) {
  return (
    <Container>
      <button 
        onClick={() => setFields({ localidade: '', uf: '', logradouro: '', bairro: ''})}
      >
        CLEAR
      </button>
    </Container>
  )
}
