var date = moment().format("MMM Do YY");
$("#currentDay").html(date);

$(document).ready(function () {
  //click listener for button
  $(".saveB").on("click", function () {
    //define text and time variables
    var text = $(this).siblings("planning").val();
    var time = $(this).parent().attr("id");

    //items to be saved to localStorage
    localStorage.setItem(text, time);

});

function currentTime() {
  //variable for the time now with moment.js
  var timeNow = moment().hours();

  //loop over the timeblocks and compare it with the timeNow variable
  $(".time-block").each(function () {
    var blockTime = parseInt($(this).attr("id").split("hour")[1]);

    //check current time and add appropriate classes
    if (blockTime < timeNow) {
      $(this).addClass("past");
    } else if (blockTime === timeNow) {
        $(this).removeClass('past');
        $(this).addClass('present');
        
    }else {
        $(this).removeClass('past');
        $(this).removeClass('present');
        $(this).addClass('future');
    }
  });
}

//get Items from localStorage 
$("#hour-9 .planning").val(localStorage.getItem("hour-9"));
$("#hour-10 .planning").val(localStorage.getItem("hour-10"));
$("#hour-11 .planning").val(localStorage.getItem("hour-11"));
$("#hour-12 .planning").val(localStorage.getItem("hour-12"));
$("#hour-13 .planning").val(localStorage.getItem("hour-13"));
$("#hour-14 .planning").val(localStorage.getItem("hour-14"));
$("#hour-15 .planning").val(localStorage.getItem("hour-15"));
$("#hour-16 .planning").val(localStorage.getItem("hour-16"));
$("#hour-17 .planning").val(localStorage.getItem("hour-17"));

currentTime();
})
