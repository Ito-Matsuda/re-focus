/*
This should interact with the html file
TODO    - Implement the timer -with momentjs?-
        - Implement as a chrome extension
        - Bring up a desktop notification when they should take a break
*/
//Global Variables
var timeLeft = 1;
var obj;
var nextStep;
var cpoint;
/*
Purpose of setTimer is to set the initial timer that
every "x" minutes, you will get a popup / notification
asking if you are focusing.
*/
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
    $("#objective-section").fadeOut();
    $("#objective-section").addClass("hidden");
    $("#next-step-section").fadeIn();
}

function secondField(){
	nextStep = document.getElementById("next-step").value;
	$("#next-step-section").fadeOut();
    $("#next-step-section").addClass("hidden");
    $("#current-point-section").fadeIn();
}

function thirdField(){
	cpoint = document.getElementById("current-point").value;
	$("#current-point-section").fadeOut();
    $("#current-point-section").addClass("hidden");
    $("#timer-section").fadeIn();

    document.getElementById("first").append(obj);
    document.getElementById("second").append(nextStep);
    document.getElementById("third").append(cpoint);
}

function start(){
    // Provides short, medium, long, super-long
    var timeChosen = document.getElementById("timer").value;
    if (timeChosen == "short"){
        timeLeft = 15;
    }
    else if (timeChosen == "medium"){
        timeLeft = 30;
    }
    else if (timeChosen == "long"){
        timeLeft = 45;
    }
    else if (timeChosen == "super-long"){
        timeLeft = 60;
    }
}
