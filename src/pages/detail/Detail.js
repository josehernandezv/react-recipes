import React, { Component } from 'react'
import { Redirect } from 'react-router-dom'
import classes from './Detail.module.css'

class Detail extends Component {

    state = {
        data: null,
        species: null,
        isInvalid: false
    }
    
    componentDidMount() {
        const id = this.props.match.params.id
        fetch(`https://pokeapi.co/api/v2/pokemon/${id}`)
            .then(response => response.json())
            .catch(error => {
                console.error('Error:', error)
                this.setState({ isInvalid: true })
            })
            .then(data => {
                console.log(data)
                this.setState({ data })
            })
        
        fetch(`https://pokeapi.co/api/v2/pokemon-species/${id}`)
            .then(response => response.json())
            .catch(error => {
                console.error('Error:', error)
                this.setState({ isInvalid: true })
            })
            .then(data => {
                console.log(data)
                this.setState({ species: data })
            })
    }

    filterLanguageResult = (items, lang) => {
        return items.find(item => item.language.name === lang)
    }

    render() {
        const { isInvalid, data, species } = this.state;

        if (isInvalid) {
            return <Redirect to="/"/>
        }
        if (!data || !species) {
            return <p>Loading...</p>
        }
        return (
            <div>
                <div className={classes.header}>
                    <h1>{this.filterLanguageResult(species.names, 'en').name}</h1>
                    <h3>{this.filterLanguageResult(species.genera, 'en').genus}</h3>
                </div>
                <div className={classes.box}>
                    <img src={data.sprites.front_default} alt="sprite"/>
                    <div>
                        <p>{this.filterLanguageResult(species.flavor_text_entries, 'en').flavor_text}</p>
                        <p><b>Types:</b> {data.types.map(item => <span key={item.slot}>{item.type.name} </span>)}</p>
                        <p><b>Height:</b> {data.height / 10} m</p>
                        <p><b>Weight:</b> {data.weight / 10} Kg</p>
                        <p><b>Abilities:</b> {data.abilities.filter(item => !item.is_hidden).map(item => <span key={item.slot}>{item.ability.name}</span>)}</p>
                    </div>
                </div>
                
            </div>
        )
    }
}

export default Detail
