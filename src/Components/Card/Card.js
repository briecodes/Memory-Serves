import React from 'react';
import './Card.css';

export default function Card(props) {

  return (
    <div className={`card set ${props.set.includes(props.id) ? 'active' : ''} ${props.wonSet.includes(props.id) ? 'won' : ''}`} onClick={() => props.handleCompare(props.id)}>
      Card {props.id}
    </div>
  );
};