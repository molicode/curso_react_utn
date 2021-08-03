import React from "react";
import Button from "@material-ui/core/Button";
import Box from "@material-ui/core/Box";
import alienware1 from '../../resources/img/alienware1.png'

const ItemDetail = () => {
  return (
    <>
      <Box display="flex" justifyContent="center" margin="auto" flexWrap="wrap">
        <Box flexDirection="colum" marginTop="60px">
          <h2>Alienware M15</h2>
          <img
            src={alienware1}
            alt="Alienware"
            width="350"
          />
        </Box>

        <Box paddingTop={10} margin={5}>
          <div style={{ fontWeight: "bold" }}>
            {"Alienware M15 15,6 I7-8750h 16gb 1tb Hdd+8gb Ssd Gtx 1060"}
          </div>
          <p>Precio: $ 305.000</p>
          <p>SKU: 9874645AWSED</p>
          <p>Cantidad Disponible: 2</p>
        </Box>
        <Button
          variant="contained"
          style={{ backgroundColor: "#000", color: "#fff" }}
        >
          Agregar al carrito
        </Button>
      </Box>
    </>
  );
};

export default ItemDetail;
