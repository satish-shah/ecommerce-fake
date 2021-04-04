import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import { Card, CardContent, CardMedia, CardActionArea, Fab, Typography } from "@material-ui/core"
import ShoppingCartIcon from "@material-ui/icons/ShoppingCart";
import { useHistory } from "react-router-dom";


import CartContext from "../context/Cart.js";

const useStyles = makeStyles((theme) => ({
    root: {
        width: 300,
        margin: theme.spacing(2)
    },
    media: {
        height: 400,
        width: 400,
        marginLeft: "auto",
        marginRight: "auto",
        display: "block"
    },
    title: {
        padding: theme.spacing(1),
        whiteSpace: "nowrap",
        overflow: "hidden",
        textOverflow: "ellipsis"
    },
    price: {
        color: theme.palette.primary.main,
        position: "relative",
        top: theme.spacing(2)
    },
    footer: {
        display: "flex",
        justifyContent: "space-between"
    },
    cartButton: {
        position: "relative",
        left: 204,
        bottom: 4
    },
    card: {
        height: "100%",
        display: "flex",
        flexDirection: "column"
    },
    cardMedia: {
        paddingTop: "100.25%" // 16:9
    },
    cardContent: {
        flexGrow: 1
    }
}));

export default function GridItem({ product }) {
    const classes = useStyles();
    const history = useHistory();
    const cart = React.useContext(CartContext);
    const navigateUrl = `/${product.category}/${product.id}`;

    const addCart = (e) => {
        e.preventDefault();
        cart.addItem(product.id);
    };
    return (
        <Card className={classes.card}>
            <CardActionArea
                onClick={(e) =>
                    history.push(navigateUrl, { category: product.category })
                }
            >
                <CardMedia
                    className={classes.cardMedia}
                    image={product.image}
                    title={product.title}
                    alt={product.title}
                />
                <CardContent className={classes.cardContent}>
                    <Typography variant="subtitle1">{product.title}</Typography>
                    <Typography gutterBottom variant="h6" className={classes.price}>
                        $ {product.price}
                    </Typography>
                    <Fab
                        color="secondary"
                        aria-label="cart"
                        className={classes.cartButton}
                    >
                        <ShoppingCartIcon onClick={(e) => addCart(e)} />
                    </Fab>
                </CardContent>
            </CardActionArea>
        </Card>
    );
}
