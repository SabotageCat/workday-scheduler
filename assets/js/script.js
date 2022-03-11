// variables
var todaysDate =  moment().format("dddd, MMMM Do YYYY");
var currentHour = moment().hour();
var schedulerHour = $("textarea");

//get todays date and display
$("#currentDay").append(todaysDate);

// update time color coding
setInterval(colorHours, 60000);
    
var colorHours = function() {
    for (var i = 0; i < schedulerHour.length; i++) {
        debugger;
        if (currentHour == schedulerHour[i].id) {
            $(schedulerHour[i]).removeClass("past future");
            $(schedulerHour[i]).addClass("present");
        } else if (currentHour > schedulerHour[i].id) {
            $(schedulerHour[i]).removeClass("present future");
            $(schedulerHour[i]).addClass("past");
        } else {
            $(schedulerHour[i]).removeClass("past present");
            $(schedulerHour[i]).addClass("future");
        }
    }
};


colorHours();