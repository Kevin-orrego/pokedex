import React from 'react';
import './buttonNext.scss';

const ButtonNext = (props) => {

    const NextPage = () =>{
        
        if(props.cPage < props.tPages){

            props.actPage(props.cPage + 1)
        }
        if(props.cPage >= props.tPages){

            props.actPage(props.tPages)
        }


    }


    return (
    <button className="PagButton" onClick={() => NextPage()}><img className="Pokemon-button-image" src={`${process.env.PUBLIC_URL}/images/arrowRight.png`}/></button>    );
}

export default ButtonNext;
