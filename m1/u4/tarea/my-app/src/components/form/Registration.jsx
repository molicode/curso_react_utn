import React from "react";
import Box from "@material-ui/core/Box";
import TextField from "@material-ui/core/TextField";
import PasswordField from "material-ui-password-field";
import Button from "@material-ui/core/Button";
import { makeStyles } from '@material-ui/core/styles'

function Registration() {
  return (
    <>
      <Box display="flex" justifyContent="center" margin="60px 0">
        <form>
          <h2>Registro:</h2>
          <Box>
            <TextField
              required
              label="Nombre"
              helperText="Nombre"
              required
              placeholder="Luis"
              multiline
              name="name"
              variant="outlined"
            />
            <TextField
              required
              label="Apellido"
              placeholder="Molina"
              multiline
              name="lastName"
              variant="outlined"
              helperText="Apellido"
            />
            <TextField
              required
              label="Email"
              placeholder="luismolina@gmail.com"
              multiline
              name="email"
              variant="outlined"
              helperText="E-mail"
            />
            <TextField
              required
              label="Teléfono de contacto"
              placeholder="Teléfono de contacto"
              multiline
              name="phone"
              variant="outlined"
            />

            <PasswordField
              label="Contraseña"
              hintText="At least 8 characters"
              floatingLabelText="Introduzca su contraseña"
              errorText="Su contraseña es muy corta"
            />

            <PasswordField
              label="Confirmar Contraseña"
              hintText="At least 8 characters"
              floatingLabelText="Confirmar Contraseña"
              errorText="Su contraseña es muy corta"
            />
          </Box>
          <Box display="flex" justifyContent=" flex-end" p={1}>    
              <Button
                variant="contained"
                style={{
                  backgroundColor: "#f7d04b",
                  color: "#000",
                }}
              >
                Registrar
              </Button>
          </Box>
        </form>
      </Box>
    </>
  );
}

export default Registration;
