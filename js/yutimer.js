function getTime(currentDate) {
	var hours = currentDate.getHours();
	var minutes = currentDate.getMinutes();
	var seconds = currentDate.getSeconds();
	var composedString = hours + ":" + minutes + ":" + seconds;
	return composedString;
}