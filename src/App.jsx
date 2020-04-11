import React from 'react';
import './App.css';
import titleImg from './img/peter-title.png'

function App() {
  return (
    <div className="App">
      <h2>THE TALE OF PETER RABBIT</h2>
      <h4>BY BEATRIX POTTER</h4>
      <img src={titleImg} alt=""/>
    </div>
  );
}

export default App;
