import React, { Component } from 'react'
import Home from './pages/home'
import Detail from './pages/detail'
import { BrowserRouter, Route, Switch, Redirect } from 'react-router-dom';
import Container from './components/container'
import Clock from './components/clock'
import Navbar from './components/navbar';

class App extends Component {
    render() {
        return (
            <BrowserRouter>
                <Container>
                    <Navbar title="Pokedex">
                        <Clock />
                    </Navbar>
                    <Switch>
                        <Route path="/:id" component={Detail} />
                        <Route exact path="/" component={Home} />
                        <Redirect to="/" />
                    </Switch>
                </Container>
            </BrowserRouter>
        );
    }
}

export default App
