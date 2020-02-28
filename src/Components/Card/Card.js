import React, { useState, useEffect } from 'react';
import './Card.css';

import cardFrame from '../../Assets/Images/card-frame.png';
import cardCurtain from '../../Assets/Images/card-curtain.png';

export default function Card(props) {
  const [active, setActive] = useState(false);

  useEffect(() => {
    return () => setActive(false);
  }, [props.set]);

  function handleClick() {
    setActive(!active);
    props.handleCompare(props.id);
  };

  return (
    <div className={`card set count${props.difficulty} ${props.set.includes(props.id) || active ? 'active' : ''} ${props.wonSet.includes(props.id) ? 'won' : ''}`} onClick={handleClick}>
      <span className='temp-id'>{props.id}</span>
      <img src={cardFrame} className='card-frame' alt='card' />
      <img src={cardCurtain} className={`card-curtain ${props.set.includes(props.id) || active ? 'active' : ''} ${props.wonSet.includes(props.id) ? 'won' : ''}`} alt='card curtain' />
    </div>
  );
};