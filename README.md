# Crystal Collector

## What is this?

An interactive memory game where a player must match the game generated number by memorizing the values of four hidden unique numbers represented by crystals and by clicking on these crystals any amount of times to add said hidden values together until the addition matches the game generated number.

The object of the game is to strategically match the game generated number  without going over.

## How does it work?

Crystal Collector uses the jQuery library to capture mouse events and to dynamically update the HTML. 

The `.click` mouse event is used for capturing when a player clicks on the crystals, and `.html .append .attr .text`, and `.empty` are used to instantly get and/or set the HTML within the specified element. These methods are used to keep the player updated with the game's progression and to manipulate the crystals.

## What does it do?

The game chooses a random number between 19-120, while the player's initial number is set to zero.

For example

```
var gameNumber = 67
var playerNum = 0
```

The player is also presented with four crystals, each assigned a random number value between 1-12. An example would be:

```
var crystalOne = 1;
var crystalTwo = 3;
var crystalThree = 7;
var crystalFour = 12;
```

The player must click on each crystal at least once in order to find out what their value is since the value is hidden, and since the value *remains* hidden, the player must remember the value of each crystal. 

Each time the player clicks on a crystal, that crystal's number value is added to the player's number.

`playerNum += numValueOfCrystal;` 

For the player to win the game in our example they must match the number **67**. In order to do this the player must must click the crystals accordingly:

`crystalOne` x 2

`crystalTwo` x 1

`crystalThree`  x 2

`crystalFour` x 4


After a win or a loss,  a  new `gameNumber` is given, the `playerNum` is reset to zero, and each crystal is given a new value. 

The game also keeps track of the player's total wins and losses for an infinite amount of games played until the player refreshes the page.


## Technologies Used
- HTML
- [Meyerweb](http://meyerweb.com/eric/tools/css/reset/) CSS reset 
- Vanilla CSS
- JavaScript
- [jQuery](https://jquery.com/)

### Credits
- [Subtle Patterns](https://www.subtlepatterns.com).
- [Pixaby](http://www.pixabay.com)


> Written with [StackEdit](https://stackedit.io/).