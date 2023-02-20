//Import React
import React from "react";

// Define a functional component named ResetButton with a single argument of playAgain
const ResetButton = ({ playAgain }) => {
    //Render the reset button
    return (
        <button id="reset-button" onClick={playAgain}>Reset Game</button>
    )
}

//Export ResetButton as the default for this module
export default ResetButton;