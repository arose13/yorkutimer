<?php
	$searchKeywords = "YorkU, york university, exam timer, York university exam timer";
?>
<!DOCTYPE html>
<html>
	<head>
		<meta charset="utf-8">
	    <meta name="viewport" content="width=device-width, initial-scale=1.0">
	    <meta name="description" content="Beautifully Simple Place To Enjoy Youtube.">
	    <meta name="og:image" content="http://klipset.com/img/klipset_fbIcon.png">
	    <meta name="keywords" content="<?php print(searchKeywords); ?>">
	    <meta name="revisit-after" content="14 days">
	    <meta name="author" content="Duobility">
	    <meta name="ROBOTS" content="All">
		<title>Exam Timer</title>
		<link rel="stylesheet" type="text/css" href="css/bootstrap.css">
	    <link href="https://fonts.googleapis.com/css?family=Droid+Sans|Lobster" rel='stylesheet' type='text/css'>
	    <link href='http://fonts.googleapis.com/css?family=Roboto:400,100,300,500|Roboto+Slab:400,100,300' rel='stylesheet' type='text/css'>
	    <link rel="stylesheet" type="text/css" href="css/colors.css">
	    <link rel="stylesheet" type="text/css" href="css/text.css">
	    <link rel="stylesheet" type="text/css" href="css/ui.css">
	    <link rel="stylesheet" type="text/css" href="css/shapes.css">
	</head>

	<body class="background-day">

		<!-- Main Ui -->
		<div id='container' class='user-container' style='padding-top:40px;'>
			<div id='object' class='center-div font-roboto-slab' style='padding-top:40px;'>
				<p id='clock' class='light text-shadow-light font-size-64 center-align white'></p>

				<!-- Input Timer -->
				<form class='form-inline center-align'>
					<input type='number' class='input-number-width' name='inputHour' placeholder='Hours'>
					<input type='number' class='input-number-width' name='inputMinute' placeholder='Mins'>
					<br/><br/>
					<button id='beginBtn' type='submit' class='btn btn-lg btn-primary shadow'>Begin</button>
				</form>

				<p id='timer' class='hide thin text-shadow-light font-size-128 center-align white'>1h30m</p>
				<p id='finishTime' class='light text-shadow-light font-size-64 center-align white'>7:30:45</p>
			</div>

			<!-- Credits -->
			<!-- <p><small>Stephen Anthony Rose + Toni Kunic</small></p> -->	
		</div>

		<script src="js/jquery-1.10.2.min.js"></script>
		<script src="yutimer.js"></script>
		<script src="daynightscript.js"></script>
		<script src="countdown.js"></script>
		<script src="js/bootstrap.js"></script>
		<script>
			$(document).ready( 
				function() {
			    loop = setInterval( function() {
			        currentTime = new Date();
			        $("#clock").text(getTime(currentTime));
			    }, 200);

			    // Day or Night Checker
			    if (isDay(new Date())) {
			    	console.log("it's day");
			    	makeDay();
			    } else {
			    	console.log("it's night");
			    	makeNight();
			    }
			    // End of Day or Night Checker

			    // Present User Input Interface
			    $('#inputModal').modal('show');
			});		
		</script>
	</body>
</html>