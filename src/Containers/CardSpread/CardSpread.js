import React, { useState, useRef, useEffect } from 'react';
import './CardSpread.css';

import Card from '../../Components/Card/Card';

export default function CardSpread(props) {
  const [cardSets, setCardSets] = useState({set: [], wonSet: []});
  const [deck, setDeck] = useState([]);
  const compareTimeout = useRef();

  useEffect(() => {
    const cardArray = [];

    for (let i = 0; i <= 30; i++) {
      cardArray.push({key: i + 'a', id: `set${i}-a`});
      cardArray.push({key: i + 'b', id: `set${i}-b`});
    };

    setDeck([...fisherYates(cardArray)]);
  }, []);

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
    {deck.map(e => <Card key={e.key} id={e.id} handleCompare={compareSet} wonSet={cardSets.wonSet} set={cardSets.set} />)}
  </>);
};