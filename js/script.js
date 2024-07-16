//! <!-- =================== SINGERS =================== -->
$('#singer div').hide();
$('.singer-one').show();

//! <!-- =================== COUNT =================== -->
function countDownTo(targetDate) {

    let endTime = new Date(targetDate);
    endTime = (endTime.getTime() / 1000);

    let now = new Date();
    now = (now.getTime() / 1000);

    timeDiff = (endTime - now);

    let secondsPerDay = 24 * 60 * 60;
    let secondsPerHour = 3600;

    let days = Math.floor(timeDiff / secondsPerDay);
    let hours = Math.floor((timeDiff - (days * secondsPerDay)) / secondsPerHour);
    let minutes = Math.floor((timeDiff - (days * secondsPerDay) - (hours * secondsPerHour)) / 60);
    let seconds = Math.floor((timeDiff - (days * secondsPerDay) - (hours * secondsPerHour) - (minutes * 60)))

    $("#days").html(`${days} D`);
    $("#hours").html(`${hours} h`);
    $("#minutes").html(`${minutes} m`);
    $('#seconds').html(`${seconds} s`)


    setInterval(function () { countDownTo(targetDate); }, 1000);

}


window.onload = function () {
    countDownTo("10 october 2021 9:56:00");
}


$(document).ready(function () {
    //! <!-- =============== SINGERS =================== -->
    $('#singer h3').on('click', function () {
        $(this).siblings('h3').next('div').slideUp("slow");

        $(this).next().slideToggle("slow")
    })


});