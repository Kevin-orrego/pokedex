import React from 'react';
import './pokemon.scss';




    const Pokemon= (props) => {


        return(
            <div className="Pokemon">
                <h4 className="Pokemon-name"> {props.name}  </h4>
                <img className="Pokemon-image" src={`${process.env.PUBLIC_URL}/images/${props.image}`}/>
            </div>
        );
    
}

export default Pokemon