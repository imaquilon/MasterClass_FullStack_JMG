import React, { Component, Fragment } from "react";
import { withStyles } from '@material-ui/styles';
import Typography from '@material-ui/core/Typography';

const styles = theme => ({
    title: {
        color: "#1e1e1e",
    },
    subtitle: {
        color: "#4b4b4b",
    },
    text: {
        marginTop: 70,
        color: "#929292",
        margin: "auto",
        display: "table",
    }
})

class Home extends Component {

    constructor(props) {
        super(props);
        this.state = {

        };
    }

    render() {
        const { classes } = this.props;

        return (
            <Fragment>
                <Typography variant="h3" component="h3" align="center" className={classes.title}>
                    HOME
                </Typography>
                <Typography variant="h5" component="h5" align="center" className={classes.subtitle}>
                    ¡¡¡ Bienvenido a la MasterClass en desarrollo web Full-Stack !!!
                </Typography>
                <Typography variant="body1" component="span" align="center" className={classes.text}>
                    Esta es nuestra página de inicio
                </Typography>
            </Fragment>
        );
    }
}

export default withStyles(styles)(Home);
