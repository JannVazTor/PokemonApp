import React from 'react';
import './styles.scss';

const PokemonCard = ({ pokemon }) => {
    return (
        <div className="pokemon-card">
            <img src={pokemon.sprite} alt={`Pokemon picture of ${pokemon.name}`} />
            <div className="pokemon-card-body">
                <h5 className="card-title">{pokemon.name}</h5>
                <h6 className="card-text">Type: {pokemon.type}</h6>
            </div>
        </div>
    )
}

export default PokemonCard;