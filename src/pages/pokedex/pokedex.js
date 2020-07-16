import React, {useState} from 'react';
import headerIcon from '../../assets/icons/headerIcon.ico';
import Main from '../../components/organisms/main/main.js';
import Footer from '../../components/organisms/footer/footer.js';
import './pokedex.scss';



function Pokedex() {

  const [activePokemon, setActivePokemon] = useState('CHARIZARD')

  return (
    
    <div className="pokedex-dad">
        <header className="pokedex-header"><h2 className="title"><img src={headerIcon} className="icon-img"/> POKÉDEX_</h2></header>
        <Main activePoke={activePokemon}/>
        <Footer setActivePok={setActivePokemon}/>
    </div>
  
  );
}

export default Pokedex;
