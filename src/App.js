import './App.css';
import BannerPrincipal from './Componentes/BannerPrincipal';
import Carrocel from './Componentes/Carrocel';
import Header from './Componentes/Header';
import galeria1 from "./assets/galeria1"
import galeria2 from "./assets/galeria2"
import galeria3 from "./assets/galeria3"
import galeria4 from "./assets/galeria4"

function App() {
  return (
    <div className="App">
      <Header/>
      <BannerPrincipal/> 
      <Carrocel titulo="Petlândia" galeria={galeria4} seila={'gato'}/>
      <Carrocel titulo="Para você" galeria={galeria1} seila={'item'}/>
      <Carrocel titulo="Desenhos" galeria={galeria2} seila={'item'}/>
      <Carrocel titulo="Terror" galeria={galeria3} seila={'item'}/>

    </div>
  );
}

export default App;
