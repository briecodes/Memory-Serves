import React, { useState } from 'react';
import './Gameboard.css';

import Interstitial from '../../Components/Interstitial/Interstitial';

export default function Gameboard(props) {
  const [difficulty, setDifficulty] = useState('');

  return (
    <>
      <button onClick={() => props.handlePageChange('home')}>go back</button>
      gameboard | {difficulty}
      {difficulty ? null : <Interstitial page={'difficulty'} setDifficulty={setDifficulty} handlePageChange={props.handlePageChange} />}
    </>
  );
};