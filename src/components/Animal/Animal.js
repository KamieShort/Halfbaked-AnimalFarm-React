import React from 'react';
import './Animal.css';


export default function Animal(props) {
  return (
    <div className="animal">
      <span className="name">{props.name}</span>
      <span>{props.says}</span>
      <img alt={props.name} src={`${process.env.PUBLIC_URL}/animals/${props.type}.svg`} />
    </div>
  );
}
