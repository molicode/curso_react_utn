import React, { useState, useEffect } from "react";

function Contador() {
  const [cantidad, setCantidad] = useState(0);
  const [mensaje, setMensaje] = useState("");

  useEffect(() => {
    console.log("Cantidad modificada");
    if (cantidad < 0) {
      setMensaje("Resultado negativo");
    } else {
      setMensaje("");
    }
  }, [cantidad]);
  
  return (
    <div>
      La cantidad es {cantidad}
      <button onClick={() => setCantidad(cantidad + 1)}>Incrementar</button>
      <button onClick={() => setCantidad(cantidad - 1)}>Decrementar</button>
      <div>{mensaje}</div>
    </div>
  );
}

export default Contador;
