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
        // get overlay element to use in startGame and gameOver
        this.overlay = document.getElementById('overlay');
        // get hearts/lives icons to use in removeLife and resetGame methods
        this.hearts = document.querySelectorAll('[alt="Heart Icon"]');
    }

    // start the game
    startGame() {
        console.log('starting game, this.missed: ', this.missed);
        // hide the start screen overlay
        this.overlay.style.display = 'none';
        // get a phrase and set it to activePhrase
        this.activePhrase = this.getRandomPhrase();
        console.log(this.activePhrase);
        // add the phrase to the page
        this.activePhrase.addPhraseToDisplay();
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
        console.log('starting handleInteraction');
        // disable button that was clicked
        buttonClicked.disabled = true;
        // check to see if the button clicked by the player matches a letter in the phrase
        // do this by calling checkLetter, passing in the phrase & the button clicked
        // if checkLetter returns false, add 'wrong' class & remove a life
        if (!this.activePhrase.checkLetter(this.activePhrase.phrase, buttonClicked)) {
            buttonClicked.classList.add('wrong');
            this.removeLife();
        // if it returns true, show the matched letters & check if user has won
        } else {
            buttonClicked.classList.add('chosen');
            // pass in the letter that was clicked to showMatchedLetter
            this.activePhrase.showMatchedLetter(buttonClicked.textContent);
            // if checkForWin returns true, then call gameOver method
            if(this.checkForWin()) {
                this.gameOver('won');
            }
        }
    }
    // 
    removeLife() {
        // increment missed property
        this.missed += 1;

        // change the heart icon for the last active life by changing the image (use src attribute)
        // get the last active index by substracting the number of misses from the number of hearts
        console.log(this.missed);
        console.log(5 - this.missed);
        console.log(this.hearts[5 - this.missed]);
        this.hearts[5 - this.missed].src = 'images/lostHeart.png';

        // if the player has 5 misses, call gameOver
        if (this.missed === 5) {
            this.gameOver('lost');
        }
    }
    //
    checkForWin() {
        // get all the letters on the page
        const letters = document.querySelectorAll('.letter');
        // if any of the letters have a class of 'hide' return false
        for (let i = 0; i < letters.length; i++ ) {
            if(letters[i].classList.contains("hide")) {
                return false;
            }
        };
        // if none of them returned false, then return true
        return true;
    }
    // pass in whether player won or lost
    gameOver(result) {
        // display the overlay
        this.overlay.style.display = 'block';
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
        // reset game
        this.resetGame();
    }
    resetGame() {
        console.log('resetting game');
        // change this.missed back to 0
        this.missed = 0;
        console.log('this.missed: ', this.missed);
        // Remove all li elements from the ul element.
        this.activePhrase.lettersList.innerHTML = '';
        // get and store the section with the keys on the page
        let keys = document.querySelectorAll('.keyrow > button');
        // enable keys and give them 'key' attribute
        for (let i = 0; i < keys.length; i++) {
            keys[i].disabled = false;
            keys[i].className = 'key';
        }
        console.log('keys: ', keys);
        // reset heart images to default
        for (let i = 0; i < this.hearts.length; i++) {
            this.hearts[i].src = 'images/liveHeart.png';
        }
        console.log(this.hearts);
        // set handleInteraction and removeLife to null so they don't activate on old objects
        this.handleInteraction = null;
        this.removeLife = null;
    }
}

