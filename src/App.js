import React, { Component } from 'react'
import Home from './pages/home'
import Detail from './pages/detail'
import { BrowserRouter, Route, Switch, Redirect } from 'react-router-dom';
import Clock from './components/clock'

class App extends Component {
    render() {
        return (
            <BrowserRouter>
                <Clock />
                <Switch>
                    <Route path="/:id" component={Detail} />
                    <Route exact path="/" component={Home} />
                    <Redirect to="/" />
                </Switch>
            </BrowserRouter>
        );
    }
}

export default App
