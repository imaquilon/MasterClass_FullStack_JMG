import React, { Component } from "react";
import { Switch, Route } from "react-router-dom";
import Home from './Home'
import Example from './Example'
import About from './About'

class Routes extends Component {
    render() {
        return (
            <Switch>
                <Route exact path={["/", "/home"]}>
                    <Home />
                </Route>
                <Route path="/example" component={() => (
                    <Switch>
                        <Route exact path={"/example"}>
                            <Example />
                        </Route>
                        {/*
                            <Route exact path={"/example/:exampleId"}>
                                <Example />
                            </Route>
                        */}
                        {/* Not found route */}
                        <Route component={() => (<span>404 - Not found</span>)} />
                    </Switch>
                )}>
                </Route>
                <Route exact path="/about">
                    <About />
                </Route>
                {/* Not found route */}
                <Route component={() => (<span>404 - Not found</span>)} />
            </Switch>
        );
    }
}

export default Routes;
