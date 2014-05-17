function getTime(currentDate) {
	var hours = currentDate.getHours();
	var minutes = currentDate.getMinutes();
	var seconds = currentDate.getSeconds();
	var composedString = prettyHour(hours) + ":" + prettySixty(minutes) + ":" + prettySixty(seconds);
	return composedString;
}

function prettyHour(t) {
	var time;
	if(t > 12){
		time = t - 12;
	} else {
		time = t;
	}
	return time;
}

function prettySixty(t) {
	var time;
	if(t < 10){
		time = "0" + t;
	} else {
		time = t;
	}
	return time;
}