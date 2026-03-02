/* Treehouse FSJS Techdegree
 * Project 4 - OOP Game App
 * Game.js */
console.log('test2');
// create Game class
class Game {

    constructor() {
        // track the number of missed guesses
        this.missed = 0,
        // phrases to use
        this.phrases = [
                new Phrase("Better late than never"),
                new Phrase("Let the cat out of the bag"),
                new Phrase("The best of both worlds"),
                new Phrase("A piece of cake"),
                new Phrase("Add insult to injury")
        ],
        // the phrase that's currently in play
        this.activePhrase = null;
    }
    // start the game
    startGame() {
        // hide the start screen overlay

        // get a phrase and set it to activePhrase
        this.activePhrase = this.getRandomPhrase();
        console.log(this.activePhrase);
    }
    // get a random phrase
    getRandomPhrase() {
        // generate number between 0 and 4, use that to get a phrase from Phrases array
        let index = Math.floor(Math.random() * 5);
        console.log('phrase index', index);
        // return the phrase
        return this.phrases[index];
    }
    // handle event of letter button being clicked by user
    handleInteraction(buttonClicked) {
        // disable button that was clicked
        buttonClicked.disabled = true;
        // check to see if the button clicked by the player matches a letter in the phrase
        // do this by calling checkLetter, passing in the activePhrase & the button clicked
        // if checkLetter returns false, add 'wrong' class & remove a life
        if (!checkLetter(this.activePhrase, buttonClicked)) {
            buttonClicked.classList.add('wrong');
            this.removeLife();
        // if it returns true, show the matched letters & check if user has won
        } else {
            buttonClicked.classList.add('chosen');
            // pass in the letter that was clicked to showMatchedLetter
            showMatchedLetter(buttonClicked.textContent);
            // if checkForWin returns true, then call gameOver method
            if(this.checkForWin()) {
                this.gameOver('won');
            }
        }
    }
    // 
    removeLife() {
        // get hearts/lives icon parent element
        let hearts = document.querySelector('#scoreboard > ol');
        // change the heart icon for the last active life by changing the image (use src attribute)
        // get the last active index by substracting the number of misses from the number of hearts
        hearts[5 - this.missed].src = '/images/lostHeart.png';
        // increment missed property
        this.missed += 1;
        // if the player has 5 misses, call gameOver
        if (this.missed === 5) {
            this.gameOver('lost');
        }
    }
    //
    checkForWin() {
        const letters = document.querySelectorAll('.letter');
        // if any of the letters have a class of 'hide' return false
        letters.forEach(letter => {
            if(letter.classList.contains('hide')) {
                return false;
            }
        });
        // if none of them returned false, then return true
        return true;
    }
    // pass in whether player won or lost
    gameOver(result) {
        // get the h1 element
        let heading = document.getElementById('game-over-message');
        // if the player won, ie checkForWin returns true, then add 'win' class + message to h1
        if(result == 'won') {
            heading.classList.add('win');
            heading.textContent = "You Win! Well Done."
        } else {
        // else add the 'lose' class and display message
            heading.classList.add('lose');
            heading.textContent = "You lost. Bad luck."
        }
    }
}

