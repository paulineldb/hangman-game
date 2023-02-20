//Import React
import React from "react";

// Create a functional component called 'Word' that takes in two props: selectedWord and correctLetters
function Word({ selectedWord, correctLetters }) {
    //Display the letters of the selected word, either as an empty letter or the correctly guessed letter
    return (
        <div className="word">
            {/* For each letter in the selected word, display a span element */}
            {selectedWord.split('').map( (letter, i) => {
                return(
                    <span className="letter" key={i}>
                        {/* If the letter has been correctly guessed, display the letter. Otherwise, display an empty string. */}
                        {correctLetters.includes(letter) ? letter : ''}
                    </span>
                )
            })}
        </div>
    )
}

//Export the Word component as the default for this module
export default Word;