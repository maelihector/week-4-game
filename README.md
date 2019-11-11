

# Crystal Collector

## What is Crystal Collector?

Crystal Collector is a [JavaScript](https://en.wikipedia.org/wiki/JavaScript) and [jQuery](https://jquery.com/) interactive memory game application that runs on the browser.

A player must match the game generated number by adding up amounts gathered by clicking on four different crystals that each have a unique and hidden number value. 

## How does Crystal Collector work?

Crystal Collector uses the [jQuery](https://jquery.com/) library to capture mouse events and to dynamically update the HTML. 

The `.click` mouse event is used for capturing when a player clicks on the crystals, and `.html .append .attr .text`, and `.empty` are used to instantly get and/or set the HTML within the specified element. These methods are used to keep the player updated with the game's progression and to manipulate the crystals throughout the game.


## What does Crystal Collector do?

The game chooses a random number between 19-120, while the player's initial number is set to zero.

For example:

```
var gameNumber = 67
var playerNum = 0
```

The player is then presented with four crystals, each assigned a hidden random number value between 1-12.

Every time the player clicks on a crystal, the crystal's number value is added to `playerNum`. The player must click on each crystal at least once in order to find out what the crystal's value is, and must remember the value of each crystal to be able to add the appropriate values together to match `gameNumber` exactly.

After a win or a loss,  a  new `gameNumber` is given, the `playerNum` is reset to zero, and each crystal is given a new value. 

The game also keeps track of the player's total wins and losses for an infinite amount of games played until the player refreshes the page.


## Technologies Used


HTML

[Meyerweb](http://meyerweb.com/eric/tools/css/reset/) CSS reset 

Vanilla CSS

JavaScript

[jQuery](https://jquery.com/)


### Credits


[Subtle Patterns](https://www.subtlepatterns.com)

[Pixaby](http://www.pixabay.com)
