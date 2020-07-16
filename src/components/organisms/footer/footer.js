
import React, {useState} from 'react';
import './footer.scss';
import pokemons from '../../../assets/json/Pokemons.json';
import Tooltip from '@material-ui/core/Tooltip';

const Footer = (props) => {
 
    
    const [currentPage, setCurrentPage] = useState(1);
    const [pokesPerPage] = useState(4);

    //tomando los pokes actuales

    const indexOfLastPoke = currentPage * pokesPerPage;
    const indexOfFirstPoke = indexOfLastPoke - pokesPerPage;
    const currentPokes = pokemons.slice(indexOfFirstPoke, indexOfLastPoke);
    const totalPages= pokemons.length / pokesPerPage;
 
    const NextPage = () =>{
        
        if(currentPage < totalPages){

            setCurrentPage(currentPage + 1)
        }
        if(currentPage >= totalPages){

            setCurrentPage(totalPages)
        }


    }

    const PreviousPage = () =>{
        
        if(currentPage > 1){

            setCurrentPage(currentPage - 1)
        }
        if(currentPage <= 1){

            setCurrentPage(1)
        }


    }


 

        return (
            <div className="Footer-main">
                <h4 className="Coloring-h Footer-title"> OTHERS</h4>
                <button className="PagButton" onClick={() => PreviousPage()}><img className="Pokemon-button-image" src={`${process.env.PUBLIC_URL}/images/ArrowLeft.png`}/></button>
            {
            
            
            currentPokes.map( item =>(
                
                <div key={item.number} className="Footer-item">
                <Tooltip title={item.name} arrow>
                    <button 
                    onClick={() => { props.setActivePok(item.name)}} className="Footer-pokeButton" >
                    <img className="Pokemon-button-image" src={`${process.env.PUBLIC_URL}/images/${item.image}`}/>
                        
                    </button>
                </Tooltip>
                </div>
            )
            
            )

            }
                    <button className="PagButton" onClick={() => NextPage()}><img className="Pokemon-button-image" src={`${process.env.PUBLIC_URL}/images/ArrowRight.png`}/></button>
            </div>
        );
    
}

export default Footer;
