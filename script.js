// show current day in header
var currentDay = $('#currentDay').html(moment().format('MMMM Do YYYY HH:mm'));

var currentHour = moment().hour();
console.log(currentHour);



for (let i = 9; i <= 17; i++) {
  
    console.log(localStorage.getItem(i));
    $('#'+i).text(localStorage.getItem(i));
}

var checkTime = function() {
   
    // var rowcounter = document.getElementsByClassName("row");
    // console.log(rowcounter);
    //get row and for each row compare the time and change the color
    for (var i = 9; i < 18;i++) {
        // console.log(row);
        // rowTime = parseInt(row) + 9;
        // console.log(rowTime);
        
            // need to get a specific text area, currently changes them all
        if (currentHour === i) {
            console.log('present');
            $('#'+i).addClass('present');
        } else if (currentHour < i) {
            console.log('future');
            $('#'+i).addClass('future');
        } else {
            console.log('past');
            $('#'+i).addClass('past');
        }
    }
}

var loadDay = function() {
    //initial time check
    checkTime();
    
}

//subsequent time checks
setInterval (function() {
    checkTime();
}, 3000000);



$('.saveBtn').click(function(event) {
    console.log('button clicked');
    console.log(event.target);
    
    var textArea = $(event.target).prev();
    var key = textArea.data().time
    console.log(textArea.val(), textArea.data().time);
    //capture the text in that textarea and save to local storage
   localStorage.setItem(key, textArea.val());
});

loadDay();


















// // Declares a variable that holds the parsed to-do items retrieved from 'localStorage'
// // If there is nothing in 'localStorage', sets the 'description' to an empty array
// //on reload get any saved tasks from local storage and display them
// var description = JSON.parse(localStorage.getItem("description")) || [];

// //save tasks to local storage
// var saveDescription = function() {
//     localStorage.setItem("description",JSON.stringify(description));
// };

// var createDescription = function() {
//     //get the current element
    
//     //$('.description').text
//     //add to decription array
// };

