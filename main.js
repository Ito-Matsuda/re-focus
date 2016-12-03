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
	alert(obj);
	
}

function start(){

}


$( document ).ready(function() {
	$("#next-step-section").remove();
	$("#current-point-section").remove();
	$("#timer-section").remove();
});