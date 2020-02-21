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
    return (<>
      home
      <button onClick={() => props.handlePageChange('game')}>play</button>
      <button onClick={() => props.handlePageChange('instructions')}>instructions</button>
      <button onClick={() => props.handlePageChange('about')}>about</button>
    </>);
  };
  
  function about() {
    return (<>
      about
      <button onClick={() => props.handlePageChange('home')}>go back</button>
    </>);
  };
  
  function instructions() {
    return (<>
      instructions
      <button onClick={() => props.handlePageChange('home')}>go back</button>
    </>);
  };
  
  function difficulty() {
    return (<>
      difficulty
      <button onClick={() => props.handlePageChange('home')}>go back</button>
      <button onClick={() => props.setDifficulty('easy')}>easy</button>
      <button onClick={() => props.setDifficulty('medium')}>medium</button>
      <button onClick={() => props.setDifficulty('hard')}>hard</button>
    </>);
  };
  
  function endgame() {
    return (<>
      endgame
      <button onClick={() => props.handlePageChange('home')}>go back</button>
    </>);
  };

  return (
    <>
      Interstitial 
      {handleDisplay()}
    </>
  );
};