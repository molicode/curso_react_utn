import "./styles/App.css";
import HomePage from "./Pages/HomePage";
import RegistroPage from "./Pages/RegistroPage";
import Menu from "./components/Menu/Menu";

function App() {
  return (
    <div className="App">
      <Menu />      
      <HomePage />
      <RegistroPage />
    </div>
  );
}

export default App;
