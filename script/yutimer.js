$(document).ready( function() {
    var browser_time = new Date();
    var current_time = new Date(Math.floor($.trim($("#current-time").text()) / 1000));
    
    $("#hear").text(current_time);
    
    loop = setInterval( function() {
        current_time = new Date()
        $("#bigtime").text(current_time.toLocaleString());
        $("#milis").text(current_time.getTime());
    }, 200);
});
