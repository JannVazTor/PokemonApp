import React, { useState } from 'react';

import PokemonList from '../PokeList';
import Pokemon from '../../helpers/Pokemon';
import { FORM_ERRORS } from '../../constants';
import { getPokemonByName } from '../../api/pokemonService';

import './styles.scss';

const PokemonView = () => {
    const [pokemonList, setPokemonList] = useState([]);
    const [errorText, setErrorText] = useState('');

    function handleSubmit(event) {
        event.preventDefault();
        const data = new FormData(event.target);
        const name = data.get('name');
        if (!name || name.trim() === '') {
            return setErrorText(FORM_ERRORS.empty_name);
        }
        getPokemonByName(name).then(pokemon => {
            if (pokemonList.some(p => p.id === pokemon.id)) {
                return setErrorText(FORM_ERRORS.pokemon_duplicated);
            }
            setErrorText('');
            pokemonList.push(new Pokemon(pokemon));
            setPokemonList([...pokemonList]);
        }).catch(error => {
            setErrorText('Pokemon not found!');
        });
    };

    return (
        <div className="container">
            <div className="row">
                <div className="col-12">
                    <form onSubmit={handleSubmit} className="form-inline">
                        <div className="form-group mb-2 mr-2 col-6">
                            <input name="name" type="text" className="form-control w-100" placeholder="Type the name of a Pokemon..." />
                        </div>
                        <button type="submit" className="btn btn-light mb-2">Catch!</button>
                    </form>
                    <div className="form-group">
                        {errorText !== '' && <div className="alert alert-danger" role="alert">
                            <small>{errorText}</small>
                        </div>}
                    </div>
                </div>
                <div className="col-12">
                    <PokemonList pokemonList={pokemonList} />
                </div>
            </div>
        </div>
    );
}

export default PokemonView;