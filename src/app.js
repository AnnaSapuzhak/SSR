import React, { Component } from 'react';
import _ from "lodash";
import { Link, Switch, Route } from "react-router-dom";

import Home from "./home";
import About from "./about";
import Contact from "./contact";

class App extends Component {
    constructor() {
        super()
    }

    render() {
        const { data } = this.props
        return (
            <div>
                <h1 className='align'> SSR </h1>
                <ul>
                    <li><Link to="/">Home</Link></li>
                    <li><Link to="/about">About</Link></li>
                    <li><Link to="/contact">Contact</Link></li>
                </ul>
                <Switch>
                    <Route path="/" exact component={Home} />
                    <Route path="/about" exact component={About} />
                    <Route path="/contact" exact component={Contact} />
                </Switch>
            </div>
        );
    }
}

export default App;