//Import React
import React from "react";

// Define a functional component named Notification with a single argument of showNotification
const Notification = ({showNotification}) => {
    return(
        //Render a div element with the classes of 'notification-container' + 'show' if showNotification is true or '' if showNotification is false
        <div className={`notification-container ${showNotification ? 'show' : ''}`}>
            <p>You have already entered this letter</p>
        </div>
    )
}

// Export the Notification component
export default Notification;