import React, { useState, useRef } from 'react';
import './CardSpread.css';

import Card from '../../Components/Card/Card';

export default function CardSpread(props) {
  const [cardSets, setCardSets] = useState({set: [], wonSet: []});
  const firstRender = useRef({tf: true, array: []});
  const compareTimeout = useRef();
  
  function dealCards() {
    const cardArray = [];

    for (let i = 0; i <= 30; i++) {
      cardArray.push(<Card key={i + 'a'} id={`set${i}-a`} handleCompare={compareSet} wonSet={cardSets.wonSet} set={cardSets.set} />);
      cardArray.push(<Card key={i + 'b'} id={`set${i}-b`} handleCompare={compareSet} wonSet={cardSets.wonSet} set={cardSets.set} />);
    };

    if (firstRender.current.tf) {
      console.log('working~');
      firstRender.current.array = [...fisherYates(cardArray)];
      firstRender.current.tf = false;
    } else {
      firstRender.current.array = [...firstRender.current.array];
    };

    return firstRender.current.array;
    // return cardArray;
  };

  function fisherYates(arr) {
    let array = [...arr];

    for (var i = array.length - 1; i > 0; i--) {
      var index = Math.floor(Math.random() * i);
      var tmp = array[index];
      array[index] = array[i];
      array[i] = tmp;
    };

    return array;
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