import React, { Component } from 'react'
import { Link } from 'react-router-dom';

// https://assets.pokemon.com/assets/cms2/img/pokedex/detail/002.png

class Home extends Component {

    state = {
        pokemon: []
    }

    componentDidMount() {
        fetch('https://pokeapi.co/api/v2/pokemon?limit=150')
            .then(response => response.json())
            .then(data => {
                this.setState({ pokemon: data.results })
            });
    }

    render() {
        return (
            <div>
                <h1>Pokedex</h1>
                <ul>
                    {this.state.pokemon.map(({name}) => (
                        <li key={name}>
                            <Link to={`/${name}`}>{name}</Link>
                        </li>
                    ))}
                </ul>
            </div>
        )
    }
}

export default Home;
