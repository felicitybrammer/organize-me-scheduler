// show current day in header
var currentDay = $('#currentDay').html(moment().format('MMMM Do YYYY HH:mm'));
var currentHour = moment().hour();

 // Declares a variable that holds the parsed to-do items retrieved from 'localStorage'
// If there is nothing in 'localStorage', sets the 'description' to an empty array
var description = JSON.parse(localStorage.getItem(".description")) || [];

var saveDescription = function(currentHour) {
    localStorage.setItem("description",JSON.stringify(description[currentHour - 9]));
};

var createDescription = function(_currentHour) {
    //get the current element
    $('.hour')
    //$('.description').text
    //add 
};

//on click, save a task
$('.saveBtn').click(function(description) {
    saveDescription(description.text);
});

//on click into text area, add text
$('.description').on('click', 'textarea', function() {
    createDescription();
});
//enter text into textarea
//save text to local storage
//make persistent
//edit text in description
// $(".description").on("click", "textarea", function() {
//     var text = $(this).text().trim();
// });

// //create a new textarea
// var textInput = $("<textarea>").addClass("description").val(text);

// //replace
// $(this).replaceWith(textInput);



var checkTime = function() {
   //var timeList = [];
   var time = $('#data-time');
    // get .hour text and convert to moment time
   //add custom id label to each hour block data-(i+9)
  
    //if .hour text is before current hour
    if (moment(time).isBefore(currentHour, 'hour')) {
        //add class .past to relevant text area
        $('<textarea>').addClass('.past');
    } else if (moment(time).isSame(currentHour, 'hour')) {
        $('<textarea>').addClass('.present');
    } else if (moment(time).isAfter(currentHour, 'hour')) {
        $('<textarea>').addClass('.future');
    }
    
}

var loadDay = function(_currentDay) {
    //clear previous items
    $('.description').empty();
    //initial time check
    checkTime();
}

//subsequent time checks
setInterval (function() {
    checkTime();
}, 3000000);

loadDay(currentDay);