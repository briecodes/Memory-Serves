import React, { useState } from 'react';
import './Gameboard.css';

import Interstitial from '../../Components/Interstitial/Interstitial';
import CardSpread from '../CardSpread/CardSpread';

export default function Gameboard(props) {
  const [difficulty, setDifficulty] = useState();
  const [gameEnd, setGameEnd] = useState(false);

  function handleDifficulty(difficulty) {
    switch(difficulty) {
      case 'easy':
        setDifficulty(5);
        break;
      case 'medium':
        setDifficulty(10);
        break;
      case 'hard':
        setDifficulty(15);
        break;
      default: return;
    };
  };

  return (
    <>
      <button onClick={() => props.handlePageChange('home')}>go back</button>
      {difficulty ? <CardSpread setGameEnd={setGameEnd} difficulty={difficulty} /> : <Interstitial page={'difficulty'} handleDifficulty={handleDifficulty} handlePageChange={props.handlePageChange} />}

      {gameEnd ? <Interstitial page={'endgame'} handlePageChange={props.handlePageChange} /> : null}
    </>
  );
};