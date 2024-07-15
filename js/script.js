

$(document).ready(function () {

    $('#singer div').hide();
    $('.singer-one').show();

    $('#singer h3').on('click', function () {
        $('#singer div').slideUp("slow");
        $(this).next().slideToggle("slow")
    })


});


