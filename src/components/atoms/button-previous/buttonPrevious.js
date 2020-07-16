import React from 'react';
import './buttonPrevious.scss';

const ButtonPrevious = (props) => {

    const PreviousPage = () =>{
        
        if(props.cPage > 1){

            props.actPage(props.cPage - 1)
        }
        if(props.cPage <= 1){

            props.actPage(1)
        }


    }


    return (
        <button className="PagButton" onClick={() => PreviousPage()}><img className="Pokemon-button-image" src={`${process.env.PUBLIC_URL}/images/arrowLeft.png`}/></button>   
     );
}

export default ButtonPrevious;