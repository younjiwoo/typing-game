import React, { useState } from 'react';
import Container from '@material-ui/core/Container';
import TextField from '@material-ui/core/TextField';

const texts = [
  `You never read a book on psychology, Tippy. You didn\'t need to. You knew by some divine instinct that you can make more friends in two months by becoming genuinely interested in other people than you can in two years by trying to get other people interested in you.`,
  `I know more about the private lives of celebrities than I do about any governmental policy that will actually affect me. I'm interested in things that are none of my business, and I'm bored by things that are important to know.`,
  `A spider's body consists of two main parts: an anterior portion, the prosoma (or cephalothorax), and a posterior part, the opisthosoma (or abdomen).`,
  `As customers of all races, nationalities, and cultures visit the Dekalb Farmers Market by the thousands, I doubt that many stand in awe and contemplate the meaning of its existence. But in the capital of the Sunbelt South, the quiet revolution of immigration and food continues to upset and redefine the meanings of local, regional, and global identity.`,
  `Outside of two men on a train platform there's nothing in sight. They're waiting for spring to come, smoking down the track. The world could come to an end tonight, but that's alright. She could still be there sleeping when I get back.`,
  `I'm a broke-nose fighter. I'm a loose-lipped liar. Searching for the edge of darkness. But all I get is just tired. I went looking for attention. In all the wrong places. I was needing a redemption. And all I got was just cages.`
];

const setText = () => {
  const text = texts[Math.floor(Math.random() * texts.length)];
  const textArr = text.split(' ');
  // const [words, setWords] = useState(textArr);
  return text;
}

const Game = () => {
    return (
      <Container maxWidth="sm">
      <div className="start-container">
        <h2>Type the paragraph below!</h2>
          
        <p>{setText()}</p>

        <TextField fullWidth id="outlined-basic" label="Type here" variant="outlined" />
      
      </div>
    </Container>
  );
}

export default Game;
