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
              Dirigeant de SAS
            </ul>
            <ul><img src={Arrow} alt="Fleche verte" style={{transform: 'rotate(180deg)', paddingLeft: '0.5em'}} />
              Dirigeant de SASU
            </ul>
            <ul><img src={Arrow} alt="Fleche verte" style={{transform: 'rotate(180deg)', paddingLeft: '0.5em'}} />
              Gérant minoritaire ou égalitaire de SARL
            </ul>
            <ul><img src={Arrow} alt="Fleche verte" style={{transform: 'rotate(180deg)', paddingLeft: '0.5em'}} />
              Gérant non associé d'EURL
            </ul>
            <ul>
              ...
            </ul>
        <p>
        Peut être ne vous retrouvez vous pas dans cette liste ? Vous trouverez le simulateur dédié aux travailleurs non salariés ici.
        Un doute sur votre statut social ? Consultez les experts de Dougs !</p>
        <p>C’est parti !</p>
      </div>

    </div>
  )
}

export default Home