/* Treehouse FSJS Techdegree
 * Project 4 - OOP Game App
 * Phrase.js */

// create phrase class for creating new phrases
class Phrase {
    // constructor. Pass in phrase we want to create. Set to 'phrase' property, set to lower case
    constructor(phrase) {
        this.phrase = phrase.toLowerCase();
    }

    // method to add letter placeholders to the display when the game starts
    addPhraseToDisplay() {
        // get the ul element whose direct parent div has id of 'phrase'
        const lettersList = document.querySelector('#phrase > ul');
        console.log(lettersList);
        // create li items for each letter. Loop through the letters to do so
        this.phrase.forEach(char => {
            // create li items. set their textContent to the character
            let li = document.createElement('li');
            li.textContent = char;
            // set class of each li item
            // if char is a letter not a space, add 'hide' & 'letter' class. Else add 'space' class
            if (char !== ' ') {
                li.classList.add('hide', 'letter');
            } else {
                li.classList.add('space');
            }
            // append li item to list item
            lettersList.appendChild(li);
        });

        // add parent element to page
        lettersParent;
    }
    // check to see if the letter selected by the player matches a letter in the phrase
    checkLetter() {
        
    }
    // reveal the letters on the board that match the selection
    showMatchedLetter() {
        // select letter DOM elements with class name that matches letter 
        // replace each selected element's 'hide' class with 'show' class
    }


}