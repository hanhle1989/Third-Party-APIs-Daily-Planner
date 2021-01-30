var m = moment();
var currentDate = m.format("MMM Do YYYY");
var currentHour = moment().hours();

var saveBtn = $(".saveBtn");

let timeBlock = ["#9", "#10", "#11", "#12", "#13", "#14", "#15", "#16", "#17"];
    for (let i = 0; i < timeBlock.length; i++) {
        var savedEvent = $(".saved-event")
        $(timeBlock[i]).val(localStorage.getItem(timeBlock[i]));
    };

    
$(document).ready(function () {

    //retrieve and display current date//
    $("#currentDay").text("Today's Date: " + currentDate);
    
        for (var i = 9; i <= 17; i++) {
            var hour = "#" + i
            var scheduleHour = $(hour).attr("hour-value");
            var scheduleHour = parseInt(scheduleHour);

            if (scheduleHour === currentHour) {
                $(hour).addClass("present");
            }

            else if (scheduleHour > currentHour) {
                $(hour).addClass("future");
            }

            else if (scheduleHour < currentHour) {
                $(hour).addClass("past");
            }

        };
    }

);

saveBtn.on("click", function () {
    var click = $(this).attr("hour-value");
    var inputField = "#" + click;
    var eventInput = $(inputField).val();
    localStorage.setItem(inputField, eventInput);
});