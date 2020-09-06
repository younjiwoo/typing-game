import React, { useState } from 'react';
import './App.css';

function App() {

  const [started, setStarted] = useState(false);

  const startGame = () => {
    setStarted(true);
  }

  if (started) {
    return (
      <div>Game STARTED!</div>
    )
  } else {
    return (
      <div className="App">
        <div id="app">
        <div className="start-container">
            <h2>Welcome to Younji's typing game!</h2>
            <p>Learn to type words and practice spelling with this typing game. This spelling game will improve your skills to type and spell the most common english words as fast as possible. Type words at once instead of learning to press keys one by one. Our games collection is suitable for both novice and expert typists. Have fun! 😃</p>
            <button className='start-btn' onClick={startGame}>
              Start game
            </button>
          </div>
        </div>
  
      </div>
    );
  }
  
}

export default App;
