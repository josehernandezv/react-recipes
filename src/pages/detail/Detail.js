import React, { Component } from 'react'
import { Redirect } from 'react-router-dom'

class Detail extends Component {

    state = {
        data: null,
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
    }

    render() {
        const { isInvalid, data } = this.state;

        if (isInvalid) {
            return <Redirect to="/"/>
        }
        if (!data) {
            return <p>Loading...</p>
        }
        return (
            <div>
                <h2>{data.name}</h2>
            </div>
        )
    }
}

export default Detail
