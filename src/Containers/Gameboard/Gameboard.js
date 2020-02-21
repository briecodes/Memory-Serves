import React, { useState } from 'react';
import './Gameboard.css';

import Interstitial from '../../Components/Interstitial/Interstitial';
import CardSpread from '../CardSpread/CardSpread';

export default function Gameboard(props) {
  const [difficulty, setDifficulty] = useState('');
  const [gameEnd, setGameEnd] = useState(false);

  return (
    <>
      <button onClick={() => props.handlePageChange('home')}>go back</button>
      gameboard | {difficulty}
      {difficulty ? <CardSpread setGameEnd={setGameEnd} /> : <Interstitial page={'difficulty'} setDifficulty={setDifficulty} handlePageChange={props.handlePageChange} />}

      {gameEnd ? <Interstitial page={'endgame'} handlePageChange={props.handlePageChange} /> : null}
    </>
  );
};