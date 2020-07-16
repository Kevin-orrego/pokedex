import React from 'react';
import pokemons from '../../../assets/json/Pokemons.json';
import './main.scss';




const Main = (props) => {

        
        const pokemon = pokemons.filter(function(item){


            return (item.name === props.activePoke)

        });

        console.log(pokemon[0])
     
        
         return (
            
            <section className="Pokedex-main">
                
            <aside className="Pokedex-aside">
            <div className="Pokemon">
                <h4 className="Pokemon-name"> {pokemon[0].name}  </h4>
                <img className="Pokemon-image" src={`${process.env.PUBLIC_URL}/images/${pokemon[0].image}`}/>
            </div>
            </aside>
            <aside className="pokedex-aside">
            <div className="Pokedata-table">
                <div className="Pokedata-item">
                    <h4 className="Pokedata-unit Coloring-h">NO.</h4>
                    <h3 className="Pokedata-unit"> {pokemon[0].number} </h3>
                </div>
                <div className="Pokedata-item">
                    <h4 className="Pokedata-unit Coloring-h">LEVEL</h4>
                    <h3 className="Pokedata-unit"> {pokemon[0].level} </h3>
                </div>
                <div className="Pokedata-item">
                    <h4 className="Pokedata-unit Coloring-h">TYPE</h4>
                    <h3 className="Pokedata-unit"> {pokemon[0].type} </h3>
                </div>
                <div className="Pokedata-item">
                    <h4 className="Pokedata-unit Coloring-h">ABILITY</h4>
                    <h3 className="Pokedata-unit"> {pokemon[0].ability} </h3>
                </div>
                <div className="Pokedata-item">
                    <h4 className="Pokedata-unit Coloring-h">HEIGHT</h4>
                    <h3 className="Pokedata-unit"> {pokemon[0].height} m </h3>
                </div>
                <div className="Pokedata-item">
                    <h4 className="Pokedata-unit Coloring-h">WEIGHT</h4>
                    <h3 className="Pokedata-unit"> {pokemon[0].weight} Kg</h3>
                </div>
                
            </div>
            </aside>
            </section>

        
           
     );   
    }
    
    export default Main;