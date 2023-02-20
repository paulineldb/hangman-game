//import React
import React from 'react';

// Create a function component to render the Help section
function Help(props) {
  return (
    <div className="help">
        <h2>Hear ye! Hear ye!</h2>
        <h3>Objective & Rules of the game</h3>
        <p>The objective of the game is to guess the hidden word by entering (typing) letters one by one using your keyboard.</p>
        <p>If you guess a correct letter, it will be revealed in the word.</p>
        <p>If you guess an incorrect letter, a body part of the hangman will be added.</p>
        <p>You have 10 incorrect guesses before the game is over and you lose.</p>
        <p><em>Good luck!</em></p>
        {/* Close button*/}
        <button onClick={props.onClose}>Close</button>
    </div>
  );
}

// Export the Help component
export default Help;