import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import Card from "@material-ui/core/Card";
import CardContent from "@material-ui/core/CardContent";
import CardActionArea from "@material-ui/core/CardActionArea";
import Typography from "@material-ui/core/Typography";
import ShoppingCartIcon from "@material-ui/icons/ShoppingCart";
import Fab from "@material-ui/core/Fab";

import { useHistory } from "react-router-dom";

import CartContext from "../context/Cart";

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
        whiteSpace: "wrap",
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
        <Card className={classes.root}>
            <CardActionArea onClick={(e) => history.push(navigateUrl, { category: product.category })}>
                <img className={classes.media} src={product.image} title={product.title} alt={product.title} />
                <CardContent>
                    <Typography className={classes.title} variant="subtitle1">
                        {product.title}
                    </Typography>
                    <Typography className={classes.title} variant="subtitle2">
                        {product.description}
                    </Typography>
                    <div className={classes.footer}>
                        <Typography gutterBottom variant="h6" className={classes.price}>
                            &#36;{product.price}
                        </Typography>
                    </div>
                </CardContent>
            </CardActionArea>
            <Fab color="secondary" aria-label="cart">
                <ShoppingCartIcon onClick={(e) => addCart(e)} />
            </Fab>
        </Card>
    );
}
