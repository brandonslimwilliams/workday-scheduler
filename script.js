var date = moment().format("MMM Do YY"); 
$('#currentDay').html(date);

$(document).ready(function(){
    //click listener for button 
$(".saveB").on("click", function(event) {
    //define text and time variables 
    var text = $(this).siblings("planning").val();
    var time = $(this).parent().attr('id')

    //items to be saved to localStorage
    localStorage.setItem(text, time)

})

function currentTime() {
    //variable for the time now with moment.js
    var timeNow = moment().hours();

    //loop over the timeblocks and compare it with the timeNow variable 
    

}

})