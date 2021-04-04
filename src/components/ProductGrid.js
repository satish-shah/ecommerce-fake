import React from "react";
import { Grid } from "@material-ui/core";
import { makeStyles } from "@material-ui/core/styles";

import GridItem from "./GridItem";

const useStyles = makeStyles((theme) => ({
    root: {
        flexGrow: 1
    }
}));

const ProductGrid = ({ products }) => {
    const classes = useStyles();
    return (
        <div className={classes.root}>
            <Grid container spacing={3}>
                {products.map((product) => (
                    <Grid item key={product.id} xs={12} sm={6} md={4} lg={3}>
                        <GridItem product={product} />
                    </Grid>
                ))}
            </Grid>
        </div>
    );
};

export default ProductGrid;
