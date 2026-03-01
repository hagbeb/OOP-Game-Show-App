/* Treehouse FSJS Techdegree
 * Project 4 - OOP Game App
 * app.js */

// get 'Start Game' button and listen for it being clicked
const start = document.getElementById('btn__reset');
start.addEventListener('click', (e) => {
    // create a new game object
    const newGame = new Game();
    // start the game
    startGame();
})

// get and store the section with the keys on the page
const keyArea = document.getElementById('qwerty');
// listen for a click on the area, then (using bubbling) check if a letter key was clicked
keyArea.addEventListener('click', (e) => {
    // if it was a key clicked, call handleInteraction
    if (e.tagName === 'button') {
        handleInteraction();            }
});