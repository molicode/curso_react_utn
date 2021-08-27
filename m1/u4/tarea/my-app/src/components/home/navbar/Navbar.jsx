import React from "react";
import {
  IconButton,
  MenuItem,
  Typography,
  AppBar,
  Toolbar,
} from "@material-ui/core/";
import MoreIcon from "@material-ui/icons/MoreVert";
import { NavLink }  from 'react-router-dom'
//import CartIcon from '../cart/CartIcon'
//import useStyles from './Style'




const Navbar = () => {
  return (
    <>
      <div>
        <AppBar position="static">
          <Toolbar>
            <Typography variant="h6">
            <NavLink to="/">
                <img src="https://github.com/molicode/curso_react_utn/blob/main/m1/u4/tarea/my-app/src/assets/images/logo.png?raw=true"
                  alt="imagen-logo"/>                
              </NavLink>
            </Typography>
            <div/>
            <div>
              <IconButton
                aria-label="show more"
                aria-haspopup="true"
                color="inherit"
              >
                <MoreIcon />
              </IconButton>
            </div>
          </Toolbar>
        </AppBar>
      </div>
    </>
  );
};

export default Navbar;
