function getTime(currentDate) {
	var hours = currentDate.getHours();
	var minutes = currentDate.getMinutes();
	var seconds = currentDate.getSeconds();
	var composedString = hours + ":" + prettySixty(minutes) + ":" + prettySixty(seconds);
	return composedString;
}

function prettySixty(t) {
	var time
	if(t < 10){
		time = "0" + t;
	} else {
		time = t;
	}
	return time;
}