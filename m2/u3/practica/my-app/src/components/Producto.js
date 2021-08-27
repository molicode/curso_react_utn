import React from "react";
import { Link } from "react-router-dom";

const styles = {
  productImg: {
    width: "50px",
    marginTop: "5px",
  },
};

function Producto(props) {
  const { datos } = props;
  const verDetalle = props.verDetalle !== false ? true : false;
  return (
    <div>
      <h2>{datos.title}</h2>
      <img src={datos.thumbnail} />
      <p>
        {datos.currency_id} {datos.price}
      </p>
      <p>{datos.condition}</p>
      {verDetalle && (
        <>
          <Link to={"/producto/" + datos.id}>Ver Detalle</Link>
        </>
      )}
      {!verDetalle && datos.pictures && (
        <>
          {datos.pictures.map((picture) => (
            <img src={picture.url} style={styles.productImg} />
          ))}
        </>
      )}
    </div>
  );
}

export default Producto;
