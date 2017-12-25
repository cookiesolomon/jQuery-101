$('h1').css('color', 'blue');
$('.red-div').css('color', 'red');
$('li:first-child').css('color', 'green');
$('li:nth-child(2)').css('color', 'pink');
$('#brown-div').css('color', 'brown');

// $('button').click(function(){
//     alert($('#my-input').val());
//     $('#my-input').val("");

// });



$('button').click(function () {
    var item = $('#my-input').val();
    $('.students').append('<li>' + item + '</li>');
    $('#my-input').val("");

});

$('li').click(function () {
    $('.students').find('li').remove();
});


// $('.students').on('click', 'li', function (event) {

//     $('.students').find('li').remove();
// })

