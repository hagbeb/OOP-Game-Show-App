/* Treehouse FSJS Techdegree
 * Project 4 - OOP Game App
 * app.js */

// get 'Start Game' button and listen for it being clicked
const start = document.getElementById('btn__reset');
start.addEventListener('click', (e) => {
    let currentGame = new Game();
    // start the game
    currentGame.startGame();

    // get and store the section with the keys on the page
    const keyArea = document.getElementById('qwerty');
    // listen for a click or keypress on the area
    keyArea.addEventListener('click', (e) => {
        // if it was a key clicked/pressed, call handleInteraction, passing in the relevant letter
        if (e.target.tagName === 'BUTTON') {
            console.log(e.target);
            currentGame.handleInteraction(e.target);            
        }
    });
    // listen for key presses so users can use those to play
    document.addEventListener('keyup', (e) => {
        // if the key pressed was a letter
        const reg = new RegExp('[a-z]');
        if(reg) {
            // get the button which matches the key
            // get all the keys and store in 'buttons'
            const buttons = document.querySelectorAll('.key');
            // find the button which matches the key pressed, then call handleInteraction,...
            // ... passing in button
            buttons.forEach(button => {
                if(button.textContent === e.key) {
                    currentGame.handleInteraction(button);            
                }
            })
        }
    });
})

