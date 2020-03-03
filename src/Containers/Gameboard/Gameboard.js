import React, { useState, useRef } from 'react';
import './Gameboard.css';

import Interstitial from '../../Components/Interstitial/Interstitial';
import CardSpread from '../CardSpread/CardSpread';

export default function Gameboard(props) {
  const [difficulty, setDifficulty] = useState();
  const [gameEnd, setGameEnd] = useState({end: false, wonLose: ''});
  const [tries, setTries] = useState();
  const difficultyName = useRef();

  function handleDifficulty(difficulty) {
    difficultyName.current = difficulty;

    switch(difficulty) {
      case 'easy':
        setDifficulty(6);
        break;
      case 'medium':
        setTries(10);
        setDifficulty(10);
        break;
      case 'hard':
        setTries(5);
        setDifficulty(15);
        break;
      default: return;
    };
  };

  return (
    <>
      <div className='header'>
        <button onClick={() => props.handlePageChange('home')}>&lt;</button>

        {difficulty ?
          <div className='tries-container'>
            <div className='header-title'>
              tries
            </div>
            <div className={`header-content ${tries ? 'num' : `infini`}`}>
              {tries ? tries : `∞`}
            </div>
          </div> : null
        }

        {difficulty ?
          <div className='difficulty-container'>
            <div className='header-title'>
              difficulty
            </div>
            <div className='header-content'>
              {difficultyName.current}
            </div>
          </div> : null
        }
      </div>

      <div className='gameboard'>
        {difficulty ? <CardSpread setGameEnd={setGameEnd} difficulty={difficulty} tries={tries} triesHandler={setTries} /> : <Interstitial page={'difficulty'} handleDifficulty={handleDifficulty} handlePageChange={props.handlePageChange} />}
        {gameEnd.end ? <Interstitial page={'endgame'} wonLose={gameEnd.wonLose} handlePageChange={props.handlePageChange} /> : null}
      </div>
    </>
  );
};