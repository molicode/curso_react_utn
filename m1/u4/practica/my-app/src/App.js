import "./styles/App.css";
import Home from "./components/Home";
import Registro from "./components/Registro";
import Menu from "./components/Menu/Menu";

function App() {
  return (
    <div className="App">
      Hola Mundo
      <Menu />
      <Home />
      <Registro />
    </div>
  );
}

export default App;
