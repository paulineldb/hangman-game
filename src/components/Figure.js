//Import React and the necessary images
import React from "react";
import state1 from "../images/state1.GIF"
import state2 from "../images/state2.GIF"
import state3 from "../images/state3.GIF"
import state4 from "../images/state4.GIF"
import state5 from "../images/state5.GIF"
import state6 from "../images/state6.GIF"
import state7 from "../images/state7.GIF"
import state8 from "../images/state8.GIF"
import state9 from "../images/state9.GIF"
import state10 from "../images/state10.gif"
import state11 from "../images/state11.GIF"


// Function component for the hangman image
const Figure = ({wrongLetters}) => {
    const errors = wrongLetters.length;
    return (
        <div>
            {/* Conditionally displaying the images depending on the number of errors made by the player */}
            {errors === 0 && <img src={state1} alt="blank"/>}
            {errors === 1 && <img src={state2} alt="base"/>}
            {errors === 2 && <img src={state3} alt="pole"/>}
            {errors === 3 && <img src={state4} alt="rode"/>}
            {errors === 4 && <img src={state5} alt="rode"/>}
            {errors === 5 && <img src={state6} alt="head"/>}
            {errors === 6 && <img src={state7} alt="body"/>}
            {errors === 7 && <img src={state8} alt="right arm"/>}
            {errors === 8 && <img src={state9} alt="left arm"/>}
            {errors === 9 && <img src={state10} alt="right leg"/>}
            {errors === 10 && <img src={state11} alt="left leg"/>}
        </div>
    )
}

//Export Figure as the default for this module
export default Figure;