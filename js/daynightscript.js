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