// Import React
import React from "react";

// Create a functional component WrongLetters that takes a destructured prop wrongLetters
const WrongLetters = ({wrongLetters}) => {
    return(
        // A div to hold the wrong letters
        <div className="wrong-letters-container">
            {/* A <p> tag to display "Wrong letters" only if the wrongLetters array is not empty */}
            {wrongLetters.length > 0 && <p>Wrong letters:</p>}
            {/* A div tag to display the wrong letters */}
            <div id="wrong-letters">
                {/* Display the wrong letters using the map() method */}
                {wrongLetters
                    .map((letter, i) => <span key={i}>{letter}</span>)
                    // Use reduce() method to add a coma between each span element
                    .reduce((prev, curr) => prev === null ? [curr] : [prev, ',', curr], null)}
            </div>
        </div>
    )
}

// Export the WrongLetters component as the default export
export default WrongLetters;