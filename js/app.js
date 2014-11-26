
$(document).ready(function(){
	
	var randomNum;
	randomNum = generateRandomNum(); 	
	
	$(".new").click(function() {
		clearAllFields();		
		window.reload(); //reload page
	});

	/*--- Display information modal box ---*/
  	$(".what").click(function(){
    	$(".overlay").fadeIn(1000);

  	});

  	/*--- Hide information modal box ---*/
  	$("a.close").click(function(){
  		$(".overlay").fadeOut(1000);
  	});

  	$("#guessButton").click(function(event) {
  		event.preventDefault();
  		var enteredNum = +$("#userGuess").val();
  		checkUserGuess(enteredNum, randomNum);		
  	});

  	function generateRandomNum() {
		return Math.round(Math.random() * 100);
	}
	
	function checkUserGuess(enteredNum, randomNum) {
		var counter = 0;

		if(enteredNum == "" || isNaN(enteredNum))
  		{
  			$("#feedback").text("Please enter a valid number");
  		}
  		else {
  			refreshGuessList(counter, enteredNum); // refresh the guess list

	  		if(randomNum != enteredNum) {	
	  			var guessDiff = Math.abs(randomNum - enteredNum);
		  		$("#feedback").text(generateFeedback(guessDiff));
	  		}
	  		else {
	  			$("#feedback").text("You guessed it RIGHT. Please click on new game to play again");
  			}
  		}
	}

	function refreshGuessList(counter, enteredNum) {
		counter++;
  		$("#count").text(counter);
  		$("#guessList").append("<li>" + enteredNum + "</li>");
  		$("#userGuess").val("");
	}

	function generateFeedback(guessDiff) {
		var message = "";

		if(guessDiff >= 1 && guessDiff <= 5) {
			message = "Your guess is hot!";
		}
		else if(guessDiff >= 6 && guessDiff <= 10) {
			message = "Your guess is hotter";
		}
		else if(guessDiff >= 11 && guessDiff <= 20) {
			message = "Your guess is warm";
		}
		else if(guessDiff >= 21 && guessDiff <= 30) {
			message = "Your guess is cold";
		}
		else if(guessDiff >= 31 && guessDiff <= 40) {
			message = "Your guess is colder";
		}
		else if(guessDiff >= 41) {
			message = "Your guess is very cold";
		}
		return message;
	}

	function clearAllFields() {
		$("#feedback").text("Make your Guess!");
		$("#userGuess").val("");
		$("#count").text(0);
		$("#guessList").find("li").remove();
	}
});


