import { createContext, useState } from 'react';
import api from '../services/api';

export const useFindCepContext  = createContext();

const FindCepContextProvider = ({ children }) => {

  const [cep, setCep] = useState({});
  const [numbers, setNumbers] = useState('');

  const getCep = async () => {
    const { data: { localidade, logradouro, bairro, uf } } = await api.get(`/${numbers}/json`);
    setCep({ localidade, logradouro, bairro, uf });
  }; 

  if(!cep.lenght > 0 && numbers.length === 8) {
    getCep();
    setNumbers('');
  }
  
  return (
    <useFindCepContext.Provider value={{ setNumbers, cep }}>
      { children }
    </useFindCepContext.Provider>
  )
}

export default FindCepContextProvider;