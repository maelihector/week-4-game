


//Globals
// Each gameReset generates a new randomNumber for the user to attempt to match
var randomNumber;
// Starts at 0, for each game if it goes over randomNumber, then losses++
var losses = 0;
// Starts at 0, for each game if it is equal to randomNumber, then wins++
var wins = 0;
// Starts at 0, but the value generated by every crystal clicked should be added to this counter until gamer is reset
var yourNumber = 0;

// Will run at page load and then every time a loss or a win is ++
var gameReset = function () {

    // Will be used as background-images to represent the crystals
    var arrayCrystalImages = [
        "./assets/images/blueCrystal.png",
        "./assets/images/diamondCrystal.png",
        "./assets/images/lilacCrystal.png",
        "./assets/images/rubyCrystal.png",
    ];
   
    // To be able to re-populate the crystals with new random numbers and images at start of each new game.
    $(".crystals").empty();

    // Generates a randomNumber/myNumber between 19 and 120.
    randomNumber = Math.floor(Math.random() * 101) + 19;

    // Grabs the id #myNumber, assigns it the randomNumber variable as it will input the newly generated randomNumber there
    $("#myNumber").html(randomNumber);

    // Generates four random numbers 
    for(var i = 0; i <4; i++){
        // between 1 and 12.
        var random = Math.floor(Math.random() * 11) + 1;
        
        var crystal = $("<div>");       // To each of the four random numbers it will add a new <div>,
        crystal.attr({
            "class": 'crystal',         // and attribute the styles we added to .crystal in style.css,
            "data-randomNumber": random  // and attribute each with one of the four random numbers generated
        });
 
        crystal.css({
            "background-image": "url('" + arrayCrystalImages[i] + "')", // each new <div> will get the correct background-images.
            "background-size":"100% 100%",
        });

        // Values randomization works?
        //crystal.html(random);

        // Grabs the class .crystals and appends our new crystal <div>s described in this for loop
        $(".crystals").append(crystal);

    }
    // Grabs the id #yourNumber and assigns it the yourNumber variable
    $("#yourNumber").html(yourNumber);
}


gameReset();

// Each time a .crystals element is clicked...
$(document).on('click', ".crystal", function() {
    
    // The random # value is a string because it's coming from html, therefor we have to convert it into an integer 
    var num = parseInt($(this).attr('data-randomNumber'));

    // Updates the yourNumber variable with every crystal click by adding the number to the variable
    yourNumber += num;
   
    $("#yourNumber").html(yourNumber);

    if(yourNumber > randomNumber){
        losses++
        $("#losses").html(losses);
        yourNumber = 0;             // each loss resets yourNumber 
        gameReset();                        
    }
    else if(yourNumber === randomNumber){
        wins++
        $("#wins").html(wins);
        yourNumber = 0;             // each win resets yourNumber 
        gameReset();
    }

})