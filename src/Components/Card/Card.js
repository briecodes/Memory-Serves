import React, { useState } from 'react';
import './Card.css';

export default function Card(props) {
  const [active, setActive] = useState(false);

  function handleClick() {
    props.handleCompare(props.id);
    setActive(!active);
  };

  return (
    <div className={`card set ${active ? 'active' : null}`} onClick={handleClick}>
      Card {props.id}
    </div>
  );
};