import React, { Component } from "react";
import { BrowserRouter as Router } from "react-router-dom";
import MenuAppBar from './MenuAppBar'
import Routes from './Routes'

class App extends Component {
    render() {
        return (
            <Router>
                <MenuAppBar />
                <Routes />
            </Router>
        );
    }
}

export default App;
