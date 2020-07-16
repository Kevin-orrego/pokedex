import React from 'react';
import Tooltip from '@material-ui/core/Tooltip';
import './buttonsPokemons.scss';

const ButtonsPokemons = (props) => {
   
        
   
    return (
        
        
          props.visiblePokes.map( item =>(
                
                <div key={item.number} className="Footer-item">
                <Tooltip title={item.name} arrow>
                    <button 
                    onClick={() => { props.setPoke(item.name)}} className="Footer-pokeButton" >
                    <img className="Pokemon-button-image" src={`${process.env.PUBLIC_URL}/images/${item.image}`}/>
                        
                    </button>
                </Tooltip>
                </div>
            )
            
            )

    );
}

export default ButtonsPokemons;
