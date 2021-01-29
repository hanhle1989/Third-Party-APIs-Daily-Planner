var m = moment();
var currentDate = m.format("MMM Do YYYY");
var currentHour = moment().hours();

var saveBtn = $(".saveBtn");

let timeBlock = ["#9am", "#10am", "#11am", "#12pm", "#1pm", "#2pm", "#3pm", "#4pm", "#5pm"];
    for (let i = 0; i < timeBlock.length; i++) {
        var savedEvent = $(".saved-event")
        $(timeBlock[i]).val(localStorage.getItem(timeBlock[i]));
    };

    
$(document).ready(function () {

    //retrieve and display current date//
    $("#currentDay").text("Today's Date: " + currentDate);
    
        for (var i = 1; i <= 12; i++) {
            var scheduleHour = $("#" + i + "Row").attr("hour-data");
            var hour = "#" + i
            var scheduleHour = parseInt(hour);
            
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
    var eventInput = $(click).val();
    localStorage.setItem(click, eventInput);
});