var READY = "START";
var RUNNING = "STOP";
var loop;

$(document).ready(function () {
	$(document).keypress(function (event) {
		if (event.which == 13 || event.which == 32) handleOnlyButton();
	});

	$("#onlybutton").click(handleOnlyButton);
});

function handleOnlyButton() {
	var state = $("#onlybutton").val();
	if (state == READY) {
		startCountdown();
	} else if (state == RUNNING) {
		stopCountdown();
	}
}

function startCountdown() {
	var entered_seconds = getEnteredSeconds();
	if (isNaN(entered_seconds) || entered_seconds < 1) {
		returnError("error in given time.");
	} else {
		var target_time = new Date();
		target_time.setTime(target_time.getTime() + (entered_seconds * 1000));
		var time_difference = 0;
		loop = setInterval(function () {
			var time_difference = (target_time - new Date()) / 1000;
			setEnteredSeconds(time_difference);

			if (time_difference < 1) {
				stopCountdown()
				setEnteredSeconds(0);
				$("#notification").text("DONE!");
			}

			// FIXME
			$("#time-difference").text(time_difference);
			$("#target-time").text(target_time.toLocaleString());


		}, 200);
		setState($("#onlybutton"), RUNNING);
	}
}

function stopCountdown() {
	clearInterval(loop);
	setState($("#onlybutton"), READY);
}

function setState(button, state) {
	button.val(state);
	button.removeClass();
	button.addClass(state);
	button.text(state);
	console.log("setting state to: " + state);
};

function getEnteredSeconds() {
	var sum = parseInt($("#hours").val()) * 3600;
	sum += parseInt($("#minutes").val()) * 60;
	sum += parseInt($("#seconds").val());

	// may return NaN!
	return sum;
};

function setEnteredSeconds(seconds) {
	var leftover = seconds;
	var hours = Math.floor(leftover / 3600);
	$("#hours").val(hours < 10 ? "0" + hours : hours);
	leftover = leftover % 3600;
	var minutes = Math.floor(leftover / 60)
	$("#minutes").val(minutes < 10 ? "0" + minutes : minutes);
	leftover = leftover % 60;
	var seconds = Math.floor(leftover)
	$("#seconds").val(seconds < 10 ? "0" + seconds : seconds);
}

function returnError(msg) {
	console.log(msg);
	$("#notification").text("ERROR IN INPUT");
}
