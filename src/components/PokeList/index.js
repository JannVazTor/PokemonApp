import React from 'react';
import PokemonCard from '../Pokemon';
import './styles.scss';

const PokemonList = ({ pokemonList }) => {
    return (
        <div className="row center-text">
            {pokemonList.length === 0
                ? <p className="text-center">No Pokemons captured yet</p>
                : pokemonList.map(pokemon => (
                    <div key={pokemon.id} className="col col-md-2 col-sm-6 mb-5">
                        <PokemonCard pokemon={pokemon} />
                    </div>
                ))}
        </div>
    );
};

export default PokemonList;