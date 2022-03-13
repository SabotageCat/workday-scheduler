// variables
var events = [];
var todaysDate =  moment().format("dddd, MMMM Do YYYY");
var currentHour = moment().hour();
var schedulerHour = $("textarea");
//get todays date and display
$("#currentDay").append(todaysDate);

// update time color coding
var colorHours = function() {
    for (var i = 0; i < schedulerHour.length; i++) {
        if (currentHour == schedulerHour[i].closest(".row").id) {
            $(schedulerHour[i]).removeClass("past future");
            $(schedulerHour[i]).addClass("present");
        } else if (currentHour > schedulerHour[i].closest(".row").id) {
            $(schedulerHour[i]).removeClass("present future");
            $(schedulerHour[i]).addClass("past");
        } else {
            $(schedulerHour[i]).removeClass("past present");
            $(schedulerHour[i]).addClass("future");
        }
    }
};

//saveButton clicked after adding/editing text in timeblock
$(".saveBtn").click(function() {
  //get textarea value and id
  var eventText = $(this).closest(".row").children("textarea").val();
  var eventHour = $(this).closest(".row").attr("id");
  //parse eventHour to match to obj.id
  eventHour = JSON.parse(eventHour);
  //update events array
  var currentEvents = events.map(obj => {
    if (obj.id == eventHour) {
        return {...obj, text : eventText};
    }
    return obj;
});
events = currentEvents;
  //save event to localStorage
  saveUserEvent();
});

var saveUserEvent = function() {
    //stringify and save to localStorage
    localStorage.setItem("events", JSON.stringify(events));
};

var loadUserEvents = function() {
    //parse and load from localStorage
    events = JSON.parse(localStorage.getItem("events"));

    // if nothing in localStorage, create a new object to track all timeblock arrays
    if (!events) {
        events = [
            {id: 9, text: ''},
            {id: 10, text: ''},
            {id: 11, text: ''},
            {id: 12, text: ''},
            {id: 13, text: ''},
            {id: 14, text: ''},
            {id: 15, text: ''},
            {id: 16, text: ''},
            {id: 17, text: ''},
        ];
    }
    // loop through each array object and display onto the browser
    for (var i = 0; i < events.length; i++) {
        var timeBlock = schedulerHour[i].closest(".row");
        if (timeBlock.id == events[i].id) {
            schedulerHour[i].innerText = events[i].text;
        }
        
    }
};

// load userEvents on load
loadUserEvents();
// color-code timeblocks by hour
colorHours();
