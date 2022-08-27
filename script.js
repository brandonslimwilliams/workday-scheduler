var date = moment().format("MMM Do YY");
$("#currentDay").html(date);

$(document).ready(function () {
  //click listener for button
  $(".saveB").on("click", function (event) {
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

currentTime();
})
