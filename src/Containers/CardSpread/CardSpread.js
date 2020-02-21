import React, { useRef } from 'react';
import './CardSpread.css';

import Card from '../../Components/Card/Card';

export default function CardSpread(props) {
  const set = useRef([]);
  const cardCount = 30;
  
  function dealCards() {
    const cardArray = [];
    for (let i = 0; i <= cardCount; i++) {
      cardArray.push(<Card key={i} handleCompare={compareSet} />);
    };

    return cardArray;
  };

  function compareSet(card) {
    set.current.push(card);

    if (set.current.length === 2) {
      set.current[0] === set.current[1] ? console.log('score!') : console.log('NO SCORE');
      set.current = [];
    };
  };

  return (<>
    CardSpread
    {dealCards()}
  </>);
};