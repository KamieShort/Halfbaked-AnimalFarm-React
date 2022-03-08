import React from 'react';
import Animal from '../Animal/Animal.js';
import { animals } from '../../data';
import './Main.css';

export default function Main() {
  return (
    <main>
      {/* <Animal type="cow" says="moo" name="Bessy" top="225px" left="20%" /> */}
      {animals.map((item) => (
        <Animal
          key={item.name}
          type={item.type}
          name={item.name}
          says={item.says}
          top={item.top}
          left={item.left}
        />
      ))}
    </main>
  );
}
