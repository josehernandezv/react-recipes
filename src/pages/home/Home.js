import React, { Component } from 'react'
import { Link } from 'react-router-dom';

// https://assets.pokemon.com/assets/cms2/img/pokedex/detail/002.png

class Home extends Component {

    state = {
        pokemon: [],
        filter: ''
    }

    componentDidMount() {
        fetch('https://pokeapi.co/api/v2/pokemon?limit=150')
            .then(response => response.json())
            .then(data => {
                this.setState({ pokemon: data.results })
            });
    }

    handleChange = event => {
        this.setState({ filter: event.target.value });
    }

    filterPokemon = () => {
        const { pokemon, filter } = this.state
        return pokemon.filter(
            item => item.name.toLowerCase().search(filter.toLowerCase()) !== -1)
    }

    render() {
        const items = this.filterPokemon()
        return (
            <div>
                <input 
                    type="text" 
                    value={this.state.filter} 
                    onChange={this.handleChange}
                />
                <ul>
                    {items.map(({name}) => (
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
