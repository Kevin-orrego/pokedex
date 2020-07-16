import React from 'react';
import pokemons from '../../../assets/json/Pokemons.json';
import Pokemon from '../../molecules/pokemon/pokemon.js';
import Data from '../../molecules/pokemon-data/pokemonData.js';
import './main.scss';




const Main = (props) => {

        
        const pokemon = pokemons.filter(function(item){


            return (item.name === props.activePoke)

        });

     
        
         return (
            
            <section className="Pokedex-main">
                
            <aside className="Pokedex-aside">
            <Pokemon name={pokemon[0].name} image={pokemon[0].image}/>
            </aside>
            <aside className="pokedex-aside">
            <Data 
            number={pokemon[0].number} level={pokemon[0].level} 
            type={pokemon[0].type} ability={pokemon[0].ability} 
            height={pokemon[0].height} weight={pokemon[0].weight}/>
            </aside>
            </section>

        
           
     );   
    }
    
    export default Main;