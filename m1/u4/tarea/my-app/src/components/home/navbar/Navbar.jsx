import React from "react";
import {
  Menu,
  IconButton,
  MenuItem,
  Typography,
  AppBar,
  Toolbar,
} from '@material-ui/core/'
import MoreIcon from '@material-ui/icons/MoreVert'
import CartIcon from '../cart/CartIcon'
import useStyles from './Style'
//import { NavLink, Link } from 'react-router-dom'


const Navbar = () => {
  return (
    <>
      <p>Navbar</p>
      <div>
            <AppBar position="static">
                <Toolbar>
                    <Typography variant="h6">
                        <NavLink to="/">
                            <img
                                className={classes.title}
                                src="https://d26lpennugtm8s.cloudfront.net/stores/001/063/033/themes/common/logo-1421680389-1571774718-1624cbbd901c2cf55aa291fb448a8c991571774719.png?"
                                alt="imagen-logo"
                            />
                        </NavLink>
                    </Typography>
                    <div className={classes.grow} />
                    <div className={classes.sectionDesktop}>
                        <Link className={classes.categoria} to="/">
                            <MenuItem>Home</MenuItem>
                        </Link>
                        <Link
                            className={classes.categoria}
                            to="/categories/notebooks"
                        >
                            <MenuItem>Notebooks</MenuItem>
                        </Link>
                        <Link
                            className={classes.categoria}
                            to="/categories/audio"
                        >
                            <MenuItem>Audio</MenuItem>
                        </Link>
                        <Link
                            className={classes.categoria}
                            to="/categories/smartwatches"
                        >
                            <MenuItem>Smartwatches</MenuItem>
                        </Link>
                    </div>
                    <div className={classes.sectionMobile}>
                        <IconButton
                            aria-label="show more"
                            aria-controls={mobileMenuId}
                            aria-haspopup="true"
                            onClick={handleMobileMenuOpen}
                            color="inherit"
                        >
                            <MoreIcon />
                        </IconButton>
                    </div>
                    <NavLink to="/cart">
                        <CartIcon />
                    </NavLink>
                </Toolbar>
            </AppBar>
            {renderMobileMenu}
        </div>
    </>
  );
};

export default Navbar;
