import React, { Component } from "react";
import Fruta from "./Fruta";
import FrutaF from "./FrutaF";

class Home extends React.Component {
  constructor() {
    super();
    this.state = {
      frutas: [
        {
          nombre: "Manzana",
          calorias: "80",
        },
        {
          nombre: "Bananas",
          calorias: "120",
        },
      ],
      titulo: "Frutas en Oferta",
    };
  }

  /*handleClick() {
    this.setState({
      titulo: "Nuevo titulo"
    })

  }*/

  handleClick = ()=> {
    this.setState({
      titulo: "Nuevo titulo"
    })
  }

  handleClickFiltro = ()=>{
    this.setState({
      frutas: [
        {
          nombre: "Manzana",
          calorias: "80"
        }
      ]
    })
  }

  render() {
    return (
      <div className="App">
        {this.state.titulo}
        <button onClick={this.handleClick}>Cambiar titulo</button>
        {this.state.frutas.map(producto=><FrutaF nombre={producto.nombre} calorias={producto.calorias}/>)}
        <button onClick={this.handleClickFiltro}>Filtrar titulo</button>


        <FrutaF nombre="Bananas" calorias="120" />
        <FrutaF nombre="Naranjas" calorias="150" />
        <FrutaF nombre="Peras" calorias="170">
          <div>
            <p>Fruta en oferta!</p>
          </div>
        </FrutaF>
        <FrutaF nombre="Papas" calorias="170">
          <div>
            <p>No es Fruta!</p>
          </div>
        </FrutaF>
      </div>
    );
  }
}

export default Home;
