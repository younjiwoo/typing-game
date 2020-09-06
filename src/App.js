import React, { useState } from 'react';
import { Route, Link } from 'react-router-dom';
import Button from '@material-ui/core/Button';
import Container from '@material-ui/core/Container';
// import Game from './Game';
import './App.scss';


function App() {

    return (
      <div className="App">
        <div id="app">
          <Container maxWidth="sm">
            <div className="start-container">
              <h2>Welcome to Younji's typing game!</h2>
                
              <p>Learn to type words and practice spelling with this typing game. This spelling game will improve your skills to type and spell the most common english words as fast as possible. Type words at once instead of learning to press keys one by one. Our games collection is suitable for both novice and expert typists. Have fun! 😃</p>

              <Button variant="contained" className='start-btn'>
                <Link to="/game" style={{ textDecoration: 'none', color: 'black' }}>Start game</Link>
              </Button>
            
            </div>
          </Container>
        </div>
      </div>
    );
  
}

export default App;
