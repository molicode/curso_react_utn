import React, {useState, useEffect} from 'react'
import MenuOpcion from "./MenuOpcion";
import { Link, NavLink } from "react-router-dom"

function Menu(){

/*  useEffect(() => {
    console.log("useEffect console.log()");
    alert("Alert in useEffect hook");
  });
*/

  

  return(
      <div>
        <ul>
          <li><NavLink to="/">Inicio</NavLink></li>
          <li><NavLink to="/registro">Registro</NavLink></li>
        </ul>
      </div>
    )
  
}

export default Menu;
