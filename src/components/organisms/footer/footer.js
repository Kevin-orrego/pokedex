
import React, {useState} from 'react';
import './footer.scss';
import pokemons from '../../../assets/json/Pokemons.json';
import Next from '../../atoms/button-next/buttonNext.js';
import Previous from '../../atoms/button-previous/buttonPrevious.js';
import Pokes from '../../atoms/buttons-pokemons/buttonsPokemons';


const Footer = (props) => {
 
    
    const [currentPage, setCurrentPage] = useState(1);
    const [pokesPerPage] = useState(4);


    const indexOfLastPoke = currentPage * pokesPerPage;
    const indexOfFirstPoke = indexOfLastPoke - pokesPerPage;
    const currentPokes = pokemons.slice(indexOfFirstPoke, indexOfLastPoke);
    const totalPages= pokemons.length / pokesPerPage;
 
    


 

        return (
            <div className="Footer-main">
                <h4 className="Coloring-h Footer-title"> OTHERS</h4>
                <Previous cPage={currentPage} tPages={totalPages} actPage={setCurrentPage}/>
                <Pokes setPoke={props.setActivePok} visiblePokes={currentPokes}/>   
                <Next cPage={currentPage} tPages={totalPages} actPage={setCurrentPage}/>
            </div>
        );
    
}

export default Footer;
