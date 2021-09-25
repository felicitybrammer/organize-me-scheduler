
//get p element with id currenDay

var currentDay = $('#currentDay').html(moment().format('MMMM Do YYYY HH:mm'));

//add text
// var currentDay = moment().format('MMMM Do YYYY');
// console.log(currentDay);

//enter text into description
//dayjs().format('MMMM Do YYYY');


//edit text in description
$(".description").on("click", "textarea", function() {
    var text = $(this).text().trim();
});

//create a new textarea
var textInput = $("<textarea>").addClass("description").val(text);

//replace
$(this).replaceWith(textInput);




//check current time
//if in past, apply styling to textarea element
//if now, apply styling
//if future, apply styling