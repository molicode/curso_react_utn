import React, { useState, useEffect } from "react";

function ContenidoFuncion() {
  const [texto, setTexto] = useState("");
  //const [titulo, setTitulo] = useState("Clase React");
  const [titulo, setTitulo] = useState({ label: "Clase React", vale: "1" });

  useEffect(() => {
    console.log("componentDidMount - hook equivalente");
  }, []);

  useEffect(() => {
    console.log("componentDidUpdate - Solo si cambia el estado texto");
  }, [texto]);

  useEffect(
    () => {
      console.log("componentDidUpdate - Solo si cambia el estado titulo");
    }, [titulo]);

  useEffect(() => {
    return () => {
      console.log("componentWillUnmount - hook equivalente");
    };
  }, []);

  return (
    <div>
      <h1>
        {titulo.label} {titulo.value}
      </h1>
      <p>Contenido funcion {texto}</p>

      <button onClick={() => setTexto("Hola")}>Agregar hola</button>
      <button onClick={() => setTexto("")}>Quitar hola</button>
      <button onClick={() => setTitulo({ ...titulo, value: "2" })}>
        Cambiar Titulo
      </button>
      <button onClick={() => setTitulo("Contenido Función")}>
        Titulo por Defecto
      </button>
    </div>
  );
}

export default ContenidoFuncion;
