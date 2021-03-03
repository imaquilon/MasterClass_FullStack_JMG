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

class Example extends Component {

    constructor(props) {
        super(props);
        this.state = {
            awaitTime: 3,
            apiTextResponse: null,
            apiJsonResponse: null,
        };
    }

    apiCalls = () => {

        var nIntervId = setInterval(() => this.setState((prevState) => ({ awaitTime: prevState.awaitTime - 1 })), 1000)

        setTimeout(() => {

            fetch("/api")
            .then(res => res.text())
            .then(res => this.setState({ apiTextResponse: res }))

        fetch("/api/random-number")
            .then(res => res.json())
            .then(res => this.setState({ apiJsonResponse: res.number }))

            clearInterval(nIntervId)

        }, this.state.awaitTime * 1000)
    }

    componentDidMount = () => {
        // Call our API
        this.apiCalls()
    }

    render() {
        const { classes } = this.props;
        
        return (
            <Fragment>
                <Typography variant="h3" component="h3" align="center" className={classes.title}>
                    EXAMPLE
                </Typography>
                <Typography variant="h5" component="h5" align="center" className={classes.subtitle}>
                    ¡¡¡ Bienvenido a la MasterClass en desarrollo web Full-Stack !!!
                </Typography>
                <Typography variant="body1" component="span" align="center" className={classes.text}>
                    Esta es la página dónde llamareamos al servidor web creado en prácticas anteriores
                </Typography>
                {
                    this.state.awaitTime > 0 &&
                        <Typography variant="body1" component="span" align="center" className={classes.text}>
                            ¡ Quedan {this.state.awaitTime} segundos para la llamada a la API !
                        </Typography>
                }
                {
                    this.state.apiTextResponse
                        ?   <Typography variant="body1" component="span" align="center" className={classes.text}>
                                El texto de la respuesta es: {this.state.apiTextResponse}
                            </Typography>
                        :   <Typography variant="body1" component="span" align="center" className={classes.text}>
                                ¡ Aún no hay respuesta de texto !
                            </Typography>
                }
                {
                    this.state.apiJsonResponse
                        ?   <Typography variant="body1" component="span" align="center" className={classes.text}>
                                El JSON de la respuesta es: {this.state.apiJsonResponse}
                            </Typography>
                        :   <Typography variant="body1" component="span" align="center" className={classes.text}>
                                ¡ Aún no hay respuesta de JSON !
                            </Typography>
                }
            </Fragment>
        );
    }
}

export default withStyles(styles)(Example);
