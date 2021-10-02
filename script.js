// show current day in header
var currentDay = $('#currentDay').html(moment().format('MMMM Do YYYY HH:mm'));

var currentHour = moment().hour();
console.log(currentHour);


var checkTime = function() {
   
    //get row and for each row compare the time and change the color
    var rowcounter = document.getElementsByClassName("row");
    console.log(rowcounter);
    
    for (let row in rowcounter) {
        console.log(row);
        rowTime = parseInt(row) + 9;
        console.log(rowTime);

        if (currentHour === rowTime) {
            console.log('present');
            $('textarea').addClass('present');
        } else if (currentHour < rowTime) {
            console.log('future');
            $('textarea').addClass('future');
        } else {
            console.log('past');
            $('textarea').addClass('past');
        }

    }
    
}

var loadDay = function() {
    checkTime();
}

//subsequent time checks
setInterval (function() {
    checkTime();
}, 3000000);

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

// //on click, save a task
// $('.saveBtn').click(function() {
//     //get form value
//     var taskText = $('#taskDescription').val();
//     var taskTime = $('#data-time').val();
//     if (taskText) {
//         createTask(taskText, taskTime);
        
//     }
//     saveDescription();
// });

// //on click into text area, add text
// $('.description').on('click', 'textarea', function() {
//     createDescription();
// });
// //enter text into textarea
// //save text to local storage
// //make persistent
// //edit text in description
// // $(".description").on("click", "textarea", function() {
// //     var text = $(this).text().trim();
// // });

// // //create a new textarea
// // var textInput = $("<textarea>").addClass("description").val(text);

// // //replace
// // $(this).replaceWith(textInput);