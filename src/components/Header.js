// Import React
import React from "react";

// Create a stateless functional component for rendering the header
const Header = () => {
    return(
        <div className="header">
            <h1>Let's play Hangman!</h1>
            <p>When you are ready, type a letter.</p>
        </div>
    )
}

// Export the Header component as the default for this module
export default Header;