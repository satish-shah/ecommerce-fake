import React from 'react'
import { makeStyles } from "@material-ui/styles"
import { AppBar, Toolbar, Typography, IconButton, Badge } from "@material-ui/core";
import ShoppingCartIcon from "@material-ui/icons/ShoppingCart";
//import { Link } from "react-router-dom"

import CartContext from "../context/Cart";
//import Cart from "./Cart";

const useStyles = makeStyles((theme) => ({
    root: {
        flexGrow: 1,
    },
    title: {
        flexGrow: 1,
    },
    logo: {
        textDecoration: "none",
       // color: theme.palette.secondary.main,
    },
}));


function Navbar() {
    const classes = useStyles();
    const { cart } = React.useContext(CartContext);
    const [open, setOpen] = React.useState(false);
    const handleClickOpen = () => {
      setOpen(true);
    };
  
    const handleClose = () => {
      setOpen(false);
    };
    return (
        <div className={classes.root}>
            <AppBar position="static">
                <Toolbar>
                    <Typography variant="h6" className={classes.title}>
                    
                            Ecommerse App
                        
                    </Typography>
                    <div>
                        <IconButton
                            aria-label="account of current user"
                            aria-controls="menu-appbar"
                            aria-haspopup="true"
                            color="inherit"

                        >
                            <Badge badgeContent={cart.length} color="secondary">
                                <ShoppingCartIcon />
                            </Badge>
                        </IconButton>
                    </div>
                </Toolbar>
            </AppBar>
         
        </div>
    );
}

export default Navbar;
