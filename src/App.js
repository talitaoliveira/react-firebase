import React, { useState, useEffect } from 'react';
import './App.css';
import * as firebase from 'firebase';

const App = () => {

  const [speed, setSpeed] = useState(10)

  useEffect(() => {
    const rootRef = firebase.database().ref('/');
    const speedRef = rootRef.child('speed');
    speedRef.on('value', snap => {
      setSpeed(snap.val())
    });
  })


  return (
    <div className="App">
      <h1>Speed: {speed}</h1>
    </div>
  );
}

export default App;
