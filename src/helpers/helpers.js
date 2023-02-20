// resource on helper functions: https://ncoughlin.com/posts/react-component-helper-functions/

/* The function 'showNotification' takes a setter function as a parameter, and sets its value to 'true'. After a 2-second timeout, the function sets the value of the setter to 'false'.*/
export function showNotification(setter) {
    setter(true);
    setTimeout(() => {
        setter(false);
    }, 2000);
}


/*Function 'checkWin' takes three parameters: correctLetters, wrongLetters, word. The function first initializes the game status as a 'win' and then checks each letter of the selected word. If the correctLetters array doesn't include any of the letters in the selected word, the game status is set as empty. If the length of wrongLetters array is 10, then the status is set as 'lose'. Finally, the function returns the game status.*/
export function checkWin(correctLetters, wrongLetters, word) {
    let status = 'win';
    //Check for win
    word.split('').forEach(letter => {
        if(!correctLetters.includes(letter)){
            status = '';
        }
    });

    //check for loss
    if(wrongLetters.length === 10) status = 'lose';

    return status;
}