import React from 'react'
import PropTypes from 'prop-types'
import classes from './Navbar.module.css'
import { Link } from 'react-router-dom';

const Navbar = props => (
    <div className={ classes.container}>
        <Link to="/">
            <h1>{props.title}</h1>
        </Link>
        <div>
            {props.children}
        </div>
    </div>
)

Navbar.propTypes = {
    title: PropTypes.string.isRequired
}

export default Navbar
