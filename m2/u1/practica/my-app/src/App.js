import "./styles/App.css";
import Home from "./components/Home";
import Registro from "./components/Registro";
import Menu from "./components/Menu/Menu";
import ContenidoFuncion from "./ContenidoFuncion";
import ContenidoClase from "./ContenidoClase";

function App() {
  return (
    <div className="App">
      <ContenidoClase />
      <ContenidoFuncion />            
    </div>
  );
}

export default App;
