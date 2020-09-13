export const getPokemonImage = (index) => {
    return `https://assets.pokemon.com/assets/cms2/img/pokedex/detail/${String(
        ++index
    ).padStart(3, '0')}.png`;
};

export const appendImages = (list) => {
    return list.map((item, index) => ({
        ...item,
        image: getPokemonImage(index),
    }));
};
