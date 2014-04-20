function isDay(currentTime) {
	var hour = currentTime.getHours();
	if ((hour >= 6) && (hour < 18)) {
		// It is day!
		return true;
	} else {
		// It is night!
		return false;
	}
}

function makeDay() {
	// Create Sky
	$("#object").removeClass("moon");
	$("body").removeClass("background-night").addClass("background-day");

	// Modify Text Style
	$("#clock").addClass("text-shadow-light white");
	$("timer").addClass("text-shadow-light white thin");
	$("#finishTime").addClass("text-shadow-light white");
}

function makeNight() {
	// Create Moon and Sky
	$("#object").addClass("moon");
	$("body").removeClass("background-day").addClass("background-night");

	// Modify Text Style
	$("#clock").removeClass("text-shadow-light white");
	$("#timer").removeClass("text-shadow-light white thin");
	$("#finishTime").removeClass("text-shadow-light white");

}