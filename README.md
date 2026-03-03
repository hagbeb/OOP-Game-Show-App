# OOP Game Show App changes

## CSS

- (line 68 in style.css) button:hover property added to increase button size to 1.3 times when hovered over.

- (line 64) A shadow has been added to the buttons using box-shadow property.

- (line 31) The body has been given a subtle background gradient using the 'background-image' property.

- (lines 233-235 and 104-106) The title is animated from it's default colour to red. This repeats infinitely. This was set in CSS.

- (line 44) The font-family of the headers is changed to 'cinzel'.

- (line 199) The background-color of the 'start' screen is changed to '#3B0004'.

## JS and CSS

- (lines 55-61 in phrase.js) When letters are revealed, for 1 second they transition to 1.3 times the scale, so they are more noticeable, before reverting to their original size. This is achieved by adding a 'transition' class to them in phrase.js in the 'showMatchedLetter' function, and then removing it after 1 second using setTimeout. Before removing, there is a check for if the element still exists, since they are removed on the win/lose screens.

## Issues

When a game ends and resets, and the user clicks 'Start Game' again without refreshing the page, the app creates another new 'Game' object. However, I believe that the previous Game object(s) are still running (without the page being refreshed). With each new game, the number of 'Game' objects increases by 1. By default, the methods belonging to the Game objects then interfere with each other. The only way I have sort of solved this is to set the 'handleInteraction' and 'removeLife' methods to null when the game is reset. This at least seems to make the subsequent games work properly.
However, doing this produces console errors.