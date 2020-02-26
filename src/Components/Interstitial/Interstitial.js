import React from 'react';
import './Interstitial.css';

export default function Interstitial(props) {
  
  function handleDisplay() {
    switch(props.page) {
      case 'home':
        return home();
      case 'about':
        return about();
      case 'instructions':
        return instructions();
      case 'difficulty':
        return difficulty();
      case 'endgame':
        return endgame();
      default: return;
    };
  };

  function home() {
    return (
      <div className='center-bloc'>
        <button onClick={() => props.handlePageChange('game')}>play</button>
        <button onClick={() => props.handlePageChange('instructions')}>instructions</button>
        <button onClick={() => props.handlePageChange('about')}>about</button>
      </div>
    );
  };
  
    function about() {
      return (
        <div className='center-bloc'>
        <h1>about</h1>
        <p>
          Here is some copy about the app.
        </p>
        <button className='btn-back' onClick={() => props.handlePageChange('home')}>go back</button>
      </div>
    );
  };
  
    function instructions() {
      return (
        <div className='center-bloc'>
        <h1>instructions</h1>
        <p>
          Here are some instructions. wow.
        </p>
        <button className='btn-back' onClick={() => props.handlePageChange('home')}>go back</button>
      </div>
    );
  };
  
  function difficulty() {
    return (
      <div className='center-bloc'>
        <h1>set difficulty</h1>
        <button className='btn-back' onClick={() => props.handlePageChange('home')}>go back</button>
        <button onClick={() => props.handleDifficulty('easy')}>easy</button>
        <button onClick={() => props.handleDifficulty('medium')}>medium</button>
        <button onClick={() => props.handleDifficulty('hard')}>hard</button>
      </div>
    );
  };
  
  function endgame() {
    return (
      <div className='center-bloc'>
        <h1>endgame</h1>
        <button className='btn-back' onClick={() => props.handlePageChange('home')}>go back</button>
      </div>
    );
  };

  return (
    <div className='intersititial'>
      {handleDisplay()}
    </div>
  );
};