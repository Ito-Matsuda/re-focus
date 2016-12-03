//This should interact with the html file

//Global Variables
var duration;

/*
Purpose of setTimer is to set the initial timer that
every "x" minutes, you will get a popup / notification
asking if you are focusing.
*/
function setTimer(sel){
 	// Takes time from a drop-down menu from the index.html file
 	if (sel.value == "short") {
 		duration = 15;
 	}
 	else if (sel.value == "medium"){
 		duration = 30;
 	}
 	else if (sel.value == "long"){
 		duration = 45;
 	}
 	else if (sel.value == "super-long"){
 		duration = 60;
 	}
 	//Wait for start button
}

function start(){

}


$( document ).ready(function() {
	$("#next-step-section").remove();
	$("#current-point-section").remove();
	$("#timer-section").remove();
});