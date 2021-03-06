import React from 'react';

import './App.css';

import background from './background.png';

import Header from './components/Header/Header';
import Footer from './components/Footer/Footer';
import Main from './components/Main/Main';

function App() {
  return (
    <div className="App" style={{ backgroundImage: `url(${background})` }}>
      <div className="App">
        <Header />
        <Main />
        <Footer />
      </div>
    </div>
  );
}

export default App;
