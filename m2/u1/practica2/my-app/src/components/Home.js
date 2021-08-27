import React, { useState, useEffect } from 'react';
import Fruta from "./Fruta";
import FrutaF from "./FrutaF";

function Home() {
  const [frutas, setFrutas] = useState([
    {
      nombre: "Manzana",
      calorias: "80",
    },
    {
      nombre: "Bananas",
      calorias: "120",
    },
  ]);

  const [titulo, setTitulo] = useState("Frutas en Oferta");

  const handleClickFiltro = () => {
    setFrutas([
      {
        nombre: "Manzana",
        calorias: "80",
      },
    ]);
  };
  return (
    <div className="App">
      {titulo}
      <button onClick={() => setTitulo("Nuevo Titulo")}>Cambiar titulo</button>
      {frutas.map((producto) => (
        <FrutaF nombre={producto.nombre} calorias={producto.calorias} />
      ))}
      <button onClick={handleClickFiltro}>Filtrar titulo</button>

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

export default Home;
