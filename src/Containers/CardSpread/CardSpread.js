import React, { useState } from 'react';
import './CardSpread.css';

import Card from '../../Components/Card/Card';

export default function CardSpread(props) {
  // const [wonSet, setWonSet] = useState([]);
  // const [set, setSet] = useState([]);
  const [cardSets, setCardSets] = useState({set: [], wonSet: []});
  
  function dealCards() {
    const cardArray = [];

    for (let i = 0; i <= 30; i++) {
      cardArray.push(<Card key={i + 'a'} id={`set${i}-a`} handleCompare={compareSet} wonSet={cardSets.wonSet} set={cardSets.set} />);
      cardArray.push(<Card key={i + 'b'} id={`set${i}-b`} handleCompare={compareSet} wonSet={cardSets.wonSet} set={cardSets.set} />);
    };

    return cardArray;
  };

  function compareSet(card) {
    // setSet([...set, card]);
    setCardSets({set: [...cardSets.set, card], wonSet: [...cardSets.wonSet]});

    if (cardSets.set.length === 2) {
      if (cardSets.set[0].split('-')[0] === cardSets.set[1].split('-')[0]) {
        // setWonSet([...wonSet, ...set]);
        setCardSets({set: [], wonSet: [...cardSets.wonSet, ...cardSets.set]});
      } else {
        
      };
    };
  };

  return (<>
    CardSpread
    {dealCards()}
  </>);
};