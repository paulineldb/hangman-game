//Import the required components and libraries
import React, { useState, useEffect } from 'react';
import Header from './components/Header';
import Figure from './components/Figure';
import WrongLetters from './components/WrongLetters';
import Word from './components/Word';
import ResetButton from './components/ResetButton';
import Popup from './components/Popup';
import Notification from './components/Notification';
import Help from './components/Help';
import { showNotification as show} from './helpers/helpers';

//Import the stylesheet
import './App.css';

// Define an array of words
const words = ["banana", "purple", "coffee", "umbrella", "computer", "piano", "guitar", "mountain", "waterfall", "ocean", "chocolate", "diamond", "kangaroo", "elephant", "cherry", "television", "bookshelf", "garden", "sunshine", "rainbow"];

// Choose a random word from the array of words
let selectedWord = words[Math.floor(Math.random() * words.length)];

function App() {
  // Define the states for the game
  const [playable, setPlayable] = useState(true);
  const [correctLetters, setCorrectLetters] = useState([]);
  const [wrongLetters, setWrongLetters] = useState([]);
  const [showNotification, setShowNotification] = useState(false);
  const [showHelp, setShowHelp] = useState(false);

  // Define the side effects to be run on mounting and when the game state changes
  useEffect(() => {
    // Define a keydown event listener to handle the user's input
    const handleKeydown = event => {
      const { key, keyCode } = event;
      if (playable && keyCode >= 65 && keyCode <= 90) {
        const letter = key.toLowerCase();

        //Check  if the selected word includes the letter entered
        if (selectedWord.includes(letter)) {
          if (!correctLetters.includes(letter)) {
            setCorrectLetters(currentLetters => [...currentLetters, letter]);
          } else {
            // Show a notification if the correct letter has already been entered
            show(setShowNotification);
          }
        } else {
          if (!wrongLetters.includes(letter)) {
            setWrongLetters(wrongLetters => [...wrongLetters, letter]);
          } else {
            // Show a notification if the wrong letter has already been entered
            show(setShowNotification);
          }
        }
      }
    }

    
    // Add the keydown event listener to the window
    window.addEventListener('keydown', handleKeydown);

    // Remove the keydown event listener on unmounting or when the game state changes
    return () => window.removeEventListener('keydown', handleKeydown);
  }, [correctLetters, wrongLetters, playable]);

  // Define a function to reset the game
  function playAgain() {
    setPlayable(true);

    // Empty the arrays for correct and wrong letters
    setCorrectLetters([]);
    setWrongLetters([]);

    // Choose a new random word from the array of words
    const random = Math.floor(Math.random() * words.length);
    selectedWord = words[random];
  }

  // Define functions to handle showing and hiding the help text
  function handleShowHelp() {
    setShowHelp(true);
  }

  function handleCloseHelp() {
    setShowHelp(false);
  }

  // Render the components for the game
  return (
    <div className="App">
      <Header />
      <div className='game-container'>
        <Figure wrongLetters={wrongLetters}/>
        <button id='help-button' onClick={handleShowHelp}>Help</button>
        <ResetButton playAgain={playAgain}/>
        <WrongLetters wrongLetters={wrongLetters}/>
        <Word selectedWord={selectedWord} correctLetters={correctLetters}/>
      </div>
      <Popup correctLetters={correctLetters} wrongLetters={wrongLetters} selectedWord={selectedWord} setPlayable={setPlayable} playAgain={playAgain}/>
      <Notification showNotification={showNotification}/>
      {showHelp ? <Help onClose={handleCloseHelp} /> : null}
    </div>
  );
}

// Export App as the default
export default App;