import React, { useState, useEffect } from 'react';
import './Card.css';

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
    // <div className={`card set ${props.set.includes(props.id) ? 'active' : ''} ${props.wonSet.includes(props.id) ? 'won' : ''}`} onClick={() => props.handleCompare(props.id)}>
    //   Card {props.id}
    // </div>

    <div className={`card set ${props.set.includes(props.id) || active ? 'active' : ''} ${props.wonSet.includes(props.id) ? 'won' : ''}`} onClick={handleClick}>
      Card {props.id}
    </div>
  );
};