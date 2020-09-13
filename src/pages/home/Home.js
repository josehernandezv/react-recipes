import React, { useState } from 'react';
import useFetch from '../../hooks/useFetch';
import PokemonList from './PokemonList';
import TextField from '@material-ui/core/TextField';
import InputAdornment from '@material-ui/core/InputAdornment';
// https://assets.pokemon.com/assets/cms2/img/pokedex/detail/002.png
import Search from '@material-ui/icons/Search';
import { appendImages } from '../../utils';

const Home = () => {
    const [filter, setFilter] = useState('');
    const { results, isLoading } = useFetch('pokemon?limit=150');

    const pokemon = appendImages(results);

    const handleChange = (event) => {
        setFilter(event.target.value);
    };

    const items = pokemon.filter(
        (item) => item.name.toLowerCase().search(filter.toLowerCase()) !== -1
    );

    if (isLoading) return <p>loading...</p>;

    console.log(items);
    return (
        <div>
            <TextField
                id="outlined-basic"
                variant="outlined"
                type="text"
                value={filter}
                onChange={handleChange}
                fullWidth
                InputProps={{
                    startAdornment: (
                        <InputAdornment position="start">
                            <Search />
                        </InputAdornment>
                    ),
                }}
            />
            <PokemonList pokemon={items} />
        </div>
    );
};

export default Home;
