//This should interact with the html file

//Global Variables
var timeLeft = 1;

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
	var obj = document.getElementById("objective").value;
    $("#objective-section").fadeOut();
    $("#objective-section").addClass("hidden");
    $("#next-step-section").fadeIn();
}

function secondField(){
	var nextStep = document.getElementById("next-step").value;
	$("#next-step-section").fadeOut();
    $("#next-step-section").addClass("hidden");
    $("#current-point-section").fadeIn();
}

function thirdField(){
	var cpoint = document.getElementById("current-point").value;
	$("#current-point-section").fadeOut();
    $("#current-point-section").addClass("hidden");
    $("#timer-section").fadeIn();
}

function start(){

}