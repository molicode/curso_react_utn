import React from "react";
import { useHistory } from "react-router-dom";


function RegistroPage(){
  const history = useHistory()
  const handleClick = ()=>{
    history.push("/")
  }
  return(
    <div>
      Registro
      <button onClick={handleClick}>Registrarse</button>
    </div>
  )

}

export default RegistroPage;
