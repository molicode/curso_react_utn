import "./styles/App.css";
import Menu from "./components/Menu/Menu";
import {BrowserRouter as Router} from "react-router-dom";
import Public from "./routes/Public";

function App() {
  return (
    <Router>
      <Menu />
      <Public />
      
    </Router>
  );
}

export default App;
