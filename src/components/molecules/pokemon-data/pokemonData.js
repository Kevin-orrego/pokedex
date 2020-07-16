import React from 'react';
import './pokemonData.scss';

const PokemonData = (props) => {
    return (
        <div className="Pokedata-table">
                <div className="Pokedata-item">
                    <h4 className="Pokedata-unit Coloring-h">NO.</h4>
                    <h3 className="Pokedata-unit"> {props.number} </h3>
                </div>
                <div className="Pokedata-item">
                    <h4 className="Pokedata-unit Coloring-h">LEVEL</h4>
                    <h3 className="Pokedata-unit"> {props.level} </h3>
                </div>
                <div className="Pokedata-item">
                    <h4 className="Pokedata-unit Coloring-h">TYPE</h4>
                    <h3 className="Pokedata-unit"> {props.type} </h3>
                </div>
                <div className="Pokedata-item">
                    <h4 className="Pokedata-unit Coloring-h">ABILITY</h4>
                    <h3 className="Pokedata-unit"> {props.ability} </h3>
                </div>
                <div className="Pokedata-item">
                    <h4 className="Pokedata-unit Coloring-h">HEIGHT</h4>
                    <h3 className="Pokedata-unit"> {props.height} m </h3>
                </div>
                <div className="Pokedata-item">
                    <h4 className="Pokedata-unit Coloring-h">WEIGHT</h4>
                    <h3 className="Pokedata-unit"> {props.weight} Kg</h3>
                </div>
                
            </div>
    );
}

export default PokemonData;
