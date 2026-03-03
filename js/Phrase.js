/* Treehouse FSJS Techdegree
 * Project 4 - OOP Game App
 * Phrase.js */

// create phrase class for creating new phrases
class Phrase {
    // constructor. Pass in phrase we want to create. Set to 'phrase' property, set to lower case
    constructor(phrase) {
        this.phrase = phrase.toLowerCase();
        // get the ul element whose direct parent div has id of 'phrase'
        this.lettersList = document.querySelector('#phrase > ul');
    }

    // method to add letter placeholders to the display when the game starts
    addPhraseToDisplay() {
        // create li items for each letter in the phrase. Loop through the letters to do so
        this.phrase.split('').forEach(char => {
            // create li items. set their textContent to the character
            let li = document.createElement('li');
            li.textContent = char;
            // set class of each li item
            // if char is a letter not a space, add 'hide' & 'letter' class. Else add 'space' class
            if (char !== ' ') {
                li.classList.add('hide', 'letter');
                // also add the char as a lccass to the item, which we will use in showMatchedLetter
                li.classList.add(char);
            } else {
                li.classList.add('space');
            }
            // append li item to list item
            this.lettersList.appendChild(li);
        });
    }
    // check to see if the letter selected by the player matches a letter in the phrase
    checkLetter(phrase, element) {
        // if the phrase includes the letter (textContent) of the button (element) clicked
        if(phrase.includes(element.textContent)) {
            return true;
        } else {
            return false;
        }
    }
    // reveal the letters on the board that match the selection
    showMatchedLetter(letter) {
        // select letter DOM elements with class name that matches letter 
        let matchedElements = document.getElementsByClassName(letter);
        // replace each selected element's 'hide' class with 'show' class
        for (let i = 0; i < matchedElements.length; i++) {
            matchedElements[i].classList.replace('hide', 'show');
            // add the 'transition' class for 1 second, then remove if the element still exists
            matchedElements[i].classList.add('transition');
            setTimeout(() => {
                if(matchedElements[i]) {
                    matchedElements[i].classList.remove('transition');
                }
            }, 1000);
        }
    }
}

