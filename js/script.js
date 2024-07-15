$('#singer div').hide();
$('.singer-one').show();

$(document).ready(function () {

    $('#singer h3').on('click', function () {
        $(this).siblings('h3').next('div').slideUp("slow");

        $(this).next().slideToggle("slow")
    })


});


