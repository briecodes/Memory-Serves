import React, { useState, useRef } from 'react';
import './CardSpread.css';

import Card from '../../Components/Card/Card';

export default function CardSpread(props) {
  const [cardSets, setCardSets] = useState({set: [], wonSet: []});
  const compareTimeout = useRef();
  
  function dealCards() {
    const cardArray = [];

    for (let i = 0; i <= 30; i++) {
      cardArray.push(<Card key={i + 'a'} id={`set${i}-a`} handleCompare={compareSet} wonSet={cardSets.wonSet} set={cardSets.set} />);
      cardArray.push(<Card key={i + 'b'} id={`set${i}-b`} handleCompare={compareSet} wonSet={cardSets.wonSet} set={cardSets.set} />);
    };

    return cardArray;
  };

  function compareSet(card) {
    if (cardSets.set.length === 0) {
      setCardSets({set: [card], wonSet: [...cardSets.wonSet]});
    } else if (cardSets.set.length === 1) {

      compareTimeout.current = window.setTimeout(() => {
        // setCardSets({sets: [...cardSets.set, card], wonSet: [...cardSets.wonSet]});

        if (cardSets.set[0].split('-')[0] === card.split('-')[0]) {
          setCardSets({set: [], wonSet: [...cardSets.wonSet, ...cardSets.set, card]});
        }else {
          setCardSets({set: [], wonSet: [...cardSets.wonSet]});
        };
      }, 500);
    };
  };

  return (<>
    CardSpread
    {dealCards()}
  </>);
};