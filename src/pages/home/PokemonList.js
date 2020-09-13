import React from 'react';
import { Link } from 'react-router-dom';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemText from '@material-ui/core/ListItemText';
import ListItemAvatar from '@material-ui/core/ListItemAvatar';
import Avatar from '@material-ui/core/Avatar';

const PokemonList = ({ pokemon }) => (
    <List>
        {pokemon.map(({ name, image }) => (
            <ListItem button component={Link} to={`/${name}`} key={name}>
                <ListItemAvatar>
                    <Avatar alt="pokemon" src={image}>
                        {/* <ImageIcon /> */}
                    </Avatar>
                </ListItemAvatar>
                <ListItemText primary={name} />
            </ListItem>
        ))}
    </List>
);

export default PokemonList;
