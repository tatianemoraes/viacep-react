import Cep from '../src/pages/Cep';
import GlobalStyle from './style/style';
import FindCepContextProvider from './contexts/useFindCepContext';


function App() {
  return (<>
      <GlobalStyle />
      <FindCepContextProvider>
        <Cep />
      </FindCepContextProvider>
    </>
  );
}

export default App;

