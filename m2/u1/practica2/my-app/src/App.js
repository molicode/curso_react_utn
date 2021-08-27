import "./styles/App.css";
import Home from "./components/Home";
import Registro from "./components/Registro";
import Menu from "./components/Menu/Menu";
import Contador from "./components/Contador";
import ContadorReducer from "./components/ContadorReducer";

function App() {
  return (
    <div className="App">
      <ContadorReducer />
      <Contador />
      {/*<Menu />*/}
      {/*<Home />*/}
      {/*<Registro /> */}
    </div>
  );
}

export default App;
