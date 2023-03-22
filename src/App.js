import './App.css';
import BannerPrincipal from './Componentes/BannerPrincipal';
import Carrocel from './Componentes/Carrocel';
import Header from './Componentes/Header';

function App() {
  return (
    <div className="App">
      <Header/>
      <BannerPrincipal/> 
      <Carrocel/>
    </div>
  );
}

export default App;
