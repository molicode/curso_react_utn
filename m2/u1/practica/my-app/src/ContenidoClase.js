import React, { Component } from "react";

class ContenidoClase extends Component {
  constructor(props) {
    super(props);
    this.state = {
      texto: "",
      titulo: "Clase React",
    };
  }

  componentDidMount() {
    console.log("componentDidMount");
  }

  componentDidUpdate() {
    console.log("componentDidUpdate");
  }

  componentWillUnmount() {
    console.log("componentWillUnmount");
  }

  render() {
    return (
      <div>
        <h1>{this.state.titulo}</h1>
        <p>Contenido Clase {this.state.texto}</p>

        <button onClick={() => this.setState({ texto: "Hola" })}>Agregar hola</button>
        <button onClick={() => this.setState({ texto: "" })}>Quitar hola</button>
      </div>
    );
  }
}

export default ContenidoClase;