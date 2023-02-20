// Import React and checkWin helper function
import React, { useEffect } from "react";
import {checkWin} from '../helpers/helpers'

// Define Popup component as a function that takes in props
const Popup = ({ correctLetters, wrongLetters, selectedWord, setPlayable, playAgain }) => {
    // Define and initialize necessary variables
    let finalMessage = '';
    let finalMessageRevealWord = '';
    let playable = true;

    // Check if the player has won or lost and set messages accordingly
    if (checkWin(correctLetters, wrongLetters, selectedWord) === 'win'){
        finalMessage = 'Congratulations, you won! 🎉'
        playable = false;
    } else if(checkWin(correctLetters, wrongLetters, selectedWord) === 'lose'){
        finalMessage = 'Oh no! You lost! 😿'
        finalMessageRevealWord = `You were trying to guess: ${selectedWord}`;
        playable = false
    }

    // Use useEffect to set the playable state
    useEffect(() => setPlayable(playable));

    // Return the JSX for the Popup component
    return(
        <div className="popup-container" style={finalMessage !== '' ? {display:'flex'} : {}}>
            <div className="popup">
                <h2 id="final-message">{finalMessage}</h2>
                <h3 id="final-message-reveal-word">{finalMessageRevealWord}</h3>
                <button id="play-button" onClick={playAgain}>Play Again</button>
            </div>
        </div>
    )
}

// Export the Popup component as the default export
export default Popup;