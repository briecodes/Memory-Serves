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
    </>);
  };
  
  function about() {
    return (<>
      about
    </>);
  };
  
  function instructions() {
    return (<>
      instructions
    </>);
  };
  
  function difficulty() {
    return (<>
      difficulty
    </>);
  };
  
  function endgame() {
    return (<>
      endgame
    </>);
  };

  return (
    <>
      Interstitial 
      {handleDisplay()}
    </>
  );
};