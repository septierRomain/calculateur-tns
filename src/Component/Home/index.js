import React from 'react';
import Banner from '../Banner';

function Home() {
  return(
    <div id="welcome" className='wrap'>
      <Banner />

      <div id="welcome_banner">
        <h1>Bonjour et bienvenue sur notre simulateur de rémunération pour les travailleurs non salariés</h1>
        <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Amet in possimus debitis minima saepe recusandae explicabo repudiandae earum cum tenetur? Ad maiores fuga harum quibusdam culpa sint omnis provident doloremque?</p>
        <p>C’est parti !</p>
      </div>

    </div>
  )
}

export default Home