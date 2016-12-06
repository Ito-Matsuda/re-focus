/*
This should interact with the html file
TODO    - Implement the timer -with momentjs?-
        - Implement as a chrome extension
        - Bring up a desktop notification when they should take a break
*/
//Global Variables
var timeLeft;
var obj;
var nextStep;
var cpoint;
var timer;
/*
Purpose of setTimer is to set the initial timer that
every "x" minutes, you will get a popup / notification
asking if you are focusing.
*/

// Add event listeners
var objListener = document.getElementById("objButton");
objListener.addEventListener("click", firstField);

var howStartListener = document.getElementById("howStartButton");
howStartListener.addEventListener("click", secondField);

var currentPntListener = document.getElementById("currentPntButton");
currentPntListener.addEventListener("click", thirdField);

var focusUpListener = document.getElementById("focusUpButton");
focusUpListener.addEventListener("click", start);

function setTimer(sel){
 	// Takes time from a drop-down menu from the index.html file
 	//Uses momentjs
 	if (sel.value == "short") {
 		timeLeft = moment.duration(15, 'minutes');
 	}
 	else if (sel.value == "medium"){
 		timeLeft = moment.duration(30, 'minutes');
 	}
 	else if (sel.value == "long"){
 		timeLeft = moment.duration(45, 'minutes');
 	}
 	else if (sel.value == "super-long"){
 		timeLeft = moment.duration(60, 'minutes');
 	}
 	//Wait for start button
}

function firstField(){
	obj = document.getElementById("objective").value;
	/* Disabling the button seems to get me past the previous error 
	   of the page continuosly refreshing */
	document.getElementById("objButton").disabled = true;
	alert("Made it to first");
    $("#objective-section").fadeOut();
    $("#objective-section").addClass("hidden");
    $("#next-step-section").fadeIn();
}

function secondField(){
	alert("got to second");
	nextStep = document.getElementById("next-step").value;
	document.getElementById("howStartButton").disabled = true;
	$("#next-step-section").fadeOut();
    $("#next-step-section").addClass("hidden");
    $("#current-point-section").fadeIn();
}

function thirdField(){
	alert("got to third");
	cpoint = document.getElementById("current-point").value;
	document.getElementById("currentPntButton").disabled = true;
	$("#current-point-section").fadeOut();
    $("#current-point-section").addClass("hidden");
    $("#timer-section").fadeIn();
    document.getElementById("first").append(obj);
    document.getElementById("second").append(nextStep);
    document.getElementById("third").append(cpoint);
}

function start(){
	alert("got to start")
    // Provides short, medium, long, super-long
    var timeChosen = document.getElementById("timer").value;
    if (timeChosen == "short"){
        timeLeft = moment.duration({minutes: 15, seconds:0});
    }
    else if (timeChosen == "medium"){
        timeLeft = moment.duration({minutes:30, seconds:0});
        alert("LOL");
    }
    else if (timeChosen == "long"){
        timeLeft = moment.duration({minutes:45, seconds:0});
    }
    else if (timeChosen == "super-long"){
        timeLeft = moment.duration({minutes:60, seconds:0});
    }
    //Need to have a timer, this runs every second, update display?
    document.getElementById("focusUpButton").disabled = true;
    timer = window.setInterval(tickTheTime, 1000);
}

function tickTheTime(){
    timeLeft.subtract(1, 's');

}



function countDown(){
    // Display idea --> could have something showing what the current time is and when you should take a break
    // this is in addition to the time remaining display
}