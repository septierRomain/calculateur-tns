import React from 'react';
import Banner from '../Banner';

import Arrow from '../../Assets/grey arrow.svg'

function Home() {
  return(
    <div id="welcome" className='wrap'>
      <Banner />

      <div id="welcome_banner">
        <h1>Bonjour et bienvenue sur notre simulateur de rémunération pour les travailleurs non salariés</h1>
        <p>Vous créez votre entreprise et vous vous interrogez sur le montant des cotisations sociales liées à vos rémunérations de gérant ?
        Ce simulateur, dédié aux travailleurs non salariés, permet de déterminer les cotisations sociales dues à partir d'une rémunération nette.
        A l'inverse, à partir de votre rémunération brute, vous connaîtrez la rémunération nette à percevoir.</p>
        <p>
          Qui sont les travailleurs non salariés ?
        </p>
            <ul><img src={Arrow} alt="Fleche verte" style={{transform: 'rotate(180deg)', paddingLeft: '0.5em'}} />
              Gérant de SARL/EURL
            </ul>
            <ul><img src={Arrow} alt="Fleche verte" style={{transform: 'rotate(180deg)', paddingLeft: '0.5em'}} />
              Chef d'entreprise individuelle
            </ul>
            <ul><img src={Arrow} alt="Fleche verte" style={{transform: 'rotate(180deg)', paddingLeft: '0.5em'}} />
              Associé de SNC
            </ul>
            <ul>
              ...
            </ul>
            <p>
            Peut être ne vous retrouvez vous pas dans cette liste ? Vous trouverez le simulateur dédié aux assimilés salariés&nbsp;
            <a href='https://simulateur-assimile-salarie.netlify.app/' >ici</a></p>
            <p>Un doute sur votre statut social ? Consultez les experts de Dougs !</p>
            <p>C’est parti !</p>
      </div>

    </div>
  )
}

export default Home