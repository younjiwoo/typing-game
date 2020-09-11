import React, { useState, useEffect } from 'react';
import Container from '@material-ui/core/Container';
import TextField from '@material-ui/core/TextField';
import { connect } from 'react-redux';
import { PARAGRAPH_TEXT } from './game.utils';

const handleChange = (e) => {
  const inputValue = e.target.value;
  const lastLetter = inputValue[inputValue.length - 1];
  console.log(lastLetter);
}

const Game = ({ started, startGame }) => {

    return (
      <Container maxWidth="sm">
      <div className="start-container">
        <h2>Type the paragraph below!</h2>
          
        <p>{PARAGRAPH_TEXT}</p>

        <TextField 
          fullWidth id="outlined-basic" 
          label="Type here" 
          variant="outlined" 
          onChange={(e) => {
            if (!started) {
              startGame();
            }
            handleChange(e);
          }} 
        />

      </div>
    </Container>
  );
}

const mapStateToProps = ({ game }) => {
  return { started: game.started };
}

const mapDispatchToProps = dispatch => {
  return {
    // dispatching plain actions
    startGame: () => dispatch({ type: 'START_GAME' }),
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(Game);