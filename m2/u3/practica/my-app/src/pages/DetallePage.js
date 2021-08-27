import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import Producto from "../components/Producto";
import { getById } from "../services/ProductosServices";

function DetallePage(props) {
  const [loading, setLoading] = useState(true);
  const [producto, setProducto] = useState({});

  const { id } = useParams();
  console.log(id);
  /*if(props.match.params.id){
    console.log(props.match.params.id)
  }*/
  useEffect(() => {
    async function request() {
      const { data } = await getById(id);
      console.log("response", data);
      if (data) {
        setProducto(data);
        setLoading(false);
      }
    }
    request();
  }, []);

  if (loading) {
    return <div className="App">Loading Detalle..</div>;
  } else {
    return (
      <div className="App">
        <Producto datos={producto} verDetalle={false} />
      </div>
    );
  }
}

export default DetallePage;