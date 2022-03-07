import React from 'react';
import Animal from '../Animal/Animal.js';
import animals from '../../data';
import './Main.css';

export default function Main() {
  return (
    <main>
      <Animal type="cow" says="moo" name="Bessy" top="225px" left="20%" />
    </main>
  );
}
