import React, { useState, useRef, useEffect } from 'react';
import './CardSpread.css';

import Card from '../../Components/Card/Card';

export default function CardSpread(props) {
  const [cardSets, setCardSets] = useState({set: [], wonSet: []});
  const [study, setStudy] = useState(true);
  const [deck, setDeck] = useState([]);
  const studyTimeout = useRef();
  const compareTimeout = useRef();

  useEffect(() => {
    const cardArray = [];

    for (let i = 0; i < props.difficulty; i++) {
      cardArray.push({key: i + 'a', id: `set${i}-a`});
      cardArray.push({key: i + 'b', id: `set${i}-b`});
    };

    setDeck([...fisherYates(cardArray)]);

    studyTimeout.current = setTimeout(() => setStudy(), (props.difficulty/3) * 1000 );

    return () => clearTimeout(studyTimeout.current);
  }, [props.difficulty]);

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
        } else {
          setCardSets({set: [], wonSet: [...cardSets.wonSet]});
        };
      }, 500);
    };
  };

  function didjaWin() {
    return cardSets.wonSet.length === props.difficulty * 2 ? true : false;
  };

  return (
    <div className='card-spread-container'>
      {didjaWin() ? props.setGameEnd(true) : null}
      {deck.map(e => <Card key={e.key} id={e.id} handleCompare={compareSet} wonSet={cardSets.wonSet} set={cardSets.set} difficulty={props.difficulty} study={study} />)}
    </div>
  );
};