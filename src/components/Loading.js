import { makeStyles } from "@material-ui/core/styles";
import TypoGraphy from "@material-ui/core/Typography";
import CircularProgress from "@material-ui/core/CircularProgress";
import { useEffect, useState } from "react";

const useStyles = makeStyles((theme) => ({
    textContainer: {
        textAlign: "center",
        marginTop: theme.spacing(2)
    },
    text: {
        verticalAlign: "super",
        color: theme.palette.secondary.main
    }
}));

const Loading = ({ text = "loading" }) => {
    const classes = useStyles();
    const [content, setConent] = useState(text);

    useEffect(() => {
        const id = setInterval(() => {
            setConent((content) => {
                return content === `${text}...` ? text : `${content}.`;
            });
        }, 300);
    }, [text]);

    return (
        <div className="container">
            <TypoGraphy variant="h5" className={classes.textContainer}>
                <CircularProgress />
                <span className={classes.text}>{content}</span>
            </TypoGraphy>
        </div>
    );
};

export default Loading;
