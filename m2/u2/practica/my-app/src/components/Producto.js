import React from "react"


function Producto(props) {
    const {datos} = props
    return(
      <div>
        <h2>{datos.title}</h2>
        <p>{datos.currency_id} {datos.price}</p>
        <p>{datos.condition}</p>
      </div>
    )
  
}

export default Producto;
