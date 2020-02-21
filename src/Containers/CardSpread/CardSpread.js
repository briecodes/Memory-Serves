import React, { useRef } from 'react';
import './CardSpread.css';

import Card from '../../Components/Card/Card';

export default function CardSpread(props) {
  const cardDeck = useRef(dealCards());
  const set = useRef([]);
  
  function dealCards() {
    const cardArray = [];

    for (let i = 0; i <= 30; i++) {
      cardArray.push(<Card key={i + 'a'} id={`set${i}-a`} handleCompare={compareSet} />);
      cardArray.push(<Card key={i + 'b'} id={`set${i}-b`} handleCompare={compareSet} />);
    };

    return cardArray;
  };

  function compareSet(card) {
    set.current.push(card);
    console.log('compare this: ', this);

    if (set.current.length === 2) {
      set.current[0].split('-')[0] === set.current[1].split('-')[0] ? console.log('score!') : console.log('NO SCORE');
      set.current = [];
    };
  };

  return (<>
    CardSpread
    {cardDeck.current}
  </>);
};