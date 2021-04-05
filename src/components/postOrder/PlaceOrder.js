import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import Typography from "@material-ui/core/Typography";
import Container from "@material-ui/core/Container";
import Paper from "@material-ui/core/Paper";
import Box from '@material-ui/core/Box';

const useStyles = makeStyles((theme) => ({
    paper: {
        marginTop: theme.spacing(2),
        padding: theme.spacing(1),
    },
}));
export default function PlaceOrder() {
    const classes = useStyles();
    return (
        <Container maxWidth="md">
            <Paper elevation={3} className={classes.paper}>
                <Typography variant="subtitle1" color="primary">
                    <Box fontWeight="fontWeightBold" m={1}>
                        ----Your order has been Placed----
          </Box>

                </Typography>
                <Typography variant="subtitle2" color="secondary">
                    <Box fontWeight="fontWeightBold" m={1}>
                        ****You will soon receive a notification when shipped***
          </Box>
                </Typography>
            </Paper>
        </Container>
    );
}
