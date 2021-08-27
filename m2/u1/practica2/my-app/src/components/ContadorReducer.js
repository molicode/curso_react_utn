import React, { useState, useEffect, useReducer } from "react";

const reducer = (state, action) => {
  switch (action.type) {
    case "inc":
      return state + 1;
    case "dec":
      return state - 1;
    default:
      return state;
  }
};
function ContadorReducer() {
  const [state, dispatch] = useReducer(reducer, 0);
  const [mensaje, setMensaje] = useState("");
  useEffect(() => {
    console.log("Cantidad modificada");
    if (state < 0) {
      setMensaje("Resultado negativo");
    } else {
      setMensaje("");
    }
  }, [state]);
  return (
    <div>
      La cantidad es {state}
      <button onClick={() => dispatch({ type: "inc" })}>Incrementar</button>
      <button onClick={() => dispatch({ type: "dec" })}>Decrementar</button>
      <div>{mensaje}</div>
    </div>
  );
}

export default ContadorReducer;
