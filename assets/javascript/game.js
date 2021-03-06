$(document).ready(function () {
  //Globals
  // Each gameReset generates a new randomNumber for the user to attempt to match
  var randomNumber;
  // Starts at 0, for each game if it goes over randomNumber, then losses++
  var losses = 0;
  // Starts at 0, for each game if it is equal to randomNumber, then wins++
  var wins = 0;
  // Starts at 0, but the value generated by every crystal clicked should be added to this counter until game is reset
  var playerNumber = 0;

  // Function to start game
  var gameReset = function () {

    // Will be used as background-images to represent the crystals
    var arrayCrystalImages = [
      "./assets/images/blueCrystal.png",
      "./assets/images/diamondCrystal.png",
      "./assets/images/greenCrystal.png",
      "./assets/images/rubyCrystal.png"
    ];

    // Empty last game's crystals to re-populate with new random numbers and images
    $(".crystals").empty();

    // Generate a random bumber between 19 and 120 that will be used as target number to be reached by player
    randomNumber = Math.floor(Math.random() * 101) + 19;

    // Show player target number
    $("#gameNumber").html(randomNumber);

    // Generate four random numbers between 1 and 12 to assign to each crystal image
    for (var i = 0; i < 4; i++) {

      var random = Math.floor(Math.random() * 11) + 1;

      // Create a <div> and add random number attribute
      var crystal = $("<div>");
      crystal.attr({
        "class": 'crystal',
        "data-randomNumber": random
      });
      // Add a cyrstal image to <div>
      crystal.css({
        "background-image": "url('" + arrayCrystalImages[i] + "')",
        "background-size": "100% 100%"
      });

      // Append crystals to DOM
      $(".crystals").append(crystal);

    }
    // Show player their starting number (0)
    $("#playerNumber").html(playerNumber);
  };


  gameReset();

  // Event for when a crystal is clicked
  $(document).on('click', ".crystal", function () {

    // Grab the crystal's number value and place in `num` variable
    // The `data-randomNumber` attribute value is a string because it's coming from the DOM, therefor we have to convert it to an integer first 
    var num = parseInt($(this).attr('data-randomNumber'), 10);

    // Add the crystal's number value to player's number
    playerNumber += num;

    // Show player their resulting number
    $("#playerNumber").html(playerNumber);

    // If player's number is greater than the target game number, increase losses by 1
    if (playerNumber > randomNumber) {
      setTimeout(function () {
        // reset player's number
        playerNumber = 0;
        alert("Sorry, you lost! Try again.");
        gameReset();
      }, 100);
      losses++;
      $("#losses").html(losses);
      // Else if player's number equals target game number, increase wins by 1
    } else if (playerNumber === randomNumber) {
      setTimeout(function () {
        // reset player's number
        playerNumber = 0;
        alert("You won this one!");
        gameReset();
      }, 100);
      wins++;
      $("#wins").html(wins);
    }

  });

});