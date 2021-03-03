import React, { Component } from "react";
import { withStyles } from '@material-ui/styles';
import { Link } from "react-router-dom";
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import IconButton from '@material-ui/core/IconButton';
import HomeIcon from "@material-ui/icons/Home";
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemText from '@material-ui/core/ListItemText';
import Container from '@material-ui/core/Container';

const styles = theme => ({
    navbarDisplayFlex: {
        display: "flex",
        justifyContent: "space-between"
    },
    navDisplayFlex: {
        display: "flex",
        justifyContent: "space-between"
    },
    linkText: {
        textDecoration: "none",
        textTransform: "uppercase",
        color: "white"
    }
})

const navLinks = [
    { title: "Home", path: "/home" },
    { title: "example", path: "/example" },
    { title: "About", path: "/about" },
];

class MenuAppBar extends Component {
    render() {
        const { classes } = this.props;

        return (
            <AppBar position="static">
                <Toolbar>
                    <Container className={classes.navbarDisplayFlex}>
                        <IconButton edge="start" color="inherit" aria-label="home">
                            <Link to={"/"} className={classes.linkText}>
                                <HomeIcon fontSize="large" />
                            </Link>
                        </IconButton>
                        <List
                            component="nav"
                            aria-labelledby="main navigation"
                            className={classes.navDisplayFlex}
                        >
                            {navLinks.map(({ title, path }) => (
                                <Link key={path} to={path} className={classes.linkText}>
                                    <ListItem button>
                                        <ListItemText primary={title} />
                                    </ListItem>
                                </Link>
                            ))}
                        </List>
                    </Container>
                </Toolbar>
            </AppBar>
        );
    }
}

export default withStyles(styles)(MenuAppBar);