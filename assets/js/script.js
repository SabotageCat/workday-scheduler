// variables
var todaysDate =  moment().format("dddd, MMMM Do YYYY");
var currentTime = moment().hour();
//get todays date and display
$("#currentDay").append(todaysDate);

// update time color coding
if (currentTime >= 9) {
    $("textarea").removeClass("present future past");
    $("#nine").addClass("present");
}
if (currentTime >= 10) {
    $("textarea").removeClass("present future past");
    $("#ten").addClass("present");
}
if (currentTime >= 11) {
    $("textarea").removeClass("present future past");
    $("#eleven").addClass("present");
}
if (currentTime >= 12) {
    $("textarea").removeClass("present future past");
    $("#twelve").addClass("present");
}
if (currentTime >= 13) {
    $("textarea").removeClass("present future past");
    $("#one").addClass("present");
}
if (currentTime >= 14) {
    $("textarea").removeClass("present future past");
    $("#two").addClass("present");
}
if (currentTime >= 15) {
    $("textarea").removeClass("present future past");
    $("#three").addClass("present");
}
if (currentTime >= 16) {
    $("textarea").removeClass("present future past");
    $("#four").addClass("present");
}
if (currentTime >= 17) {
    $("textarea").removeClass("present future past");
    $("#five").addClass("present");
}