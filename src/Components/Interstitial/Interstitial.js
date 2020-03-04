import React from 'react';
import './Interstitial.css';
import Scene from '../../Components/Scene/Scene';

import logo from '../../Assets/Images/memory-serves-logo.svg';

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
      <>
        <div className='center-bloc'>
          <img src={logo} alt='memory serves logo' className='logo' />
          <button className='btn-primary' style={{alignSelf: 'flex-start', marginLeft: '-7%', marginBottom: '5%'}} onClick={() => props.handlePageChange('game')}>play</button>
          <button className='btn-secondary' style={{alignSelf: 'flex-start'}} onClick={() => props.handlePageChange('instructions')}>instructions</button>
          <button className='btn-secondary' style={{alignSelf: 'flex-end', marginRight: '-7%'}} onClick={() => props.handlePageChange('about')}>about</button>
        </div>
        <Scene />
      </>
    );
  };
  
    function about() {
      return (
        <div className='center-bloc'>
        <h1>about</h1>
        <p className='p-about'>
          Here is some copy about the app.
        </p>
        <button className='btn-secondary' onClick={() => props.handlePageChange('home')}>go back</button>
      </div>
    );
  };
  
    function instructions() {
      return (
        <div className='center-bloc'>
        <h1>instructions</h1>
        <p className='p-instructions'>
          tap to match characters hiding beihnd a grid of curtains.
        </p>
        <p className='p-instructions'>
          …or don’t. <br />
          whatever, it’s YOUR life.
        </p>
        <button className='btn-secondary' onClick={() => props.handlePageChange('home')}>go back</button>
      </div>
    );
  };
  
  function difficulty() {
    return (
      <div className='center-bloc'>
        <h1>set difficulty</h1>
        <button className='btn-primary' onClick={() => props.handleDifficulty('easy')}>easy</button>
        <button className='btn-primary' onClick={() => props.handleDifficulty('medium')}>medium</button>
        <button className='btn-primary' onClick={() => props.handleDifficulty('hard')}>hard</button>
      </div>
    );
  };
  
  function endgame() {
    return (
      <div className='center-bloc'>
        {props.wonLose === 'win' ? <h1>you dun won!</h1> : <h1 style={{lineHeight: '.8'}}>better luck<br />next time!</h1> }
        <button className='btn-secondary' onClick={() => props.handlePageChange('home')}>home</button>
      </div>
    );
  };

  return (
    <div className={`intersititial ${props.page}`}>
      {handleDisplay()}
    </div>
  );
};