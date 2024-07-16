//! <!-- ============= SIDEBAR =================== -->
function loopForNavItems(top, left) {
    for (let i = 0; i < 4; i++) {
        $(".side-bar a").eq(i).animate({
            top: `${top}px`,
            left: `${left}rem`
        }, (i + 4) * 100)
    }
}

function closeNav() {
    loopForNavItems(300, -17);
    $(".side-bar").animate({ left: "-17rem" }, 1000);
    $("#openBtn").animate({ left: "0rem" }, 1000);

}

function openNav() {
    $("#openBtn").animate({ left: "17rem" }, 1000);
    $(".side-bar").animate({ left: "0rem" }, 1000, function () {
        loopForNavItems(0, 0)
    });
}

//! <!-- ================= SINGERS =================== -->
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

//! <!-- ================= CONTACT =================== -->
const regex = {
    name: /^[a-zA-Z ]+$/,
    email: /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/,

    validateInput: function (regex, input) {
        return regex.test(input.val());
    },

    nameValidation: function () {
        const input = $("#nameInput");
        if (this.validateInput(this.name, input)) {
            input.addClass('is-valid').removeClass('is-invalid');
            $("#nameAlert").addClass('d-none');
            return true;
        } else {
            input.addClass('is-invalid').removeClass('is-valid');
            $("#nameAlert").removeClass('d-none');
            return false;
        }
    },

    emailValidation: function () {
        const input = $("#emailInput");
        if (this.validateInput(this.email, input)) {
            input.addClass('is-valid').removeClass('is-invalid');
            $("#emailAlert").addClass('d-none');
            return true;
        } else {
            input.addClass('is-invalid').removeClass('is-valid');
            $("#emailAlert").removeClass('d-none');
            return false;
        }
    },
    calculateChars: function (msgLength) {
        const maxLength = 100;
        let remainedChars = maxLength - msgLength;
        $("#remainedChars").html(`${remainedChars}`);
        if (msgLength > maxLength) {
            $("#remainedChars").text(`Your available character finished! - ${remainedChars}`);
            return false;
        } else if (msgLength < 1) {
            $("#remainedChars").text(`Please, write your message! - ${remainedChars}`);
            return false;
        } else {
            return true;
        }
    },

    init: function () {
        $("#nameInput").on('keyup', this.validateAll.bind(this));
        $("#emailInput").on('keyup', this.validateAll.bind(this));
        $("textarea").on('keyup', this.validateAll.bind(this));
    },

    validateAll: function () {

        const allValid = this.nameValidation() && this.emailValidation() && this.calculateChars($("textarea").val().length);

        const submitBtn = $("#submitBtn");
        if (allValid) {
            submitBtn.removeAttr("disabled");
        } else {
            submitBtn.attr("disabled", true);
        }
    }
};



window.onload = function () {
    //? <!-- =============== COUNT =================== -->
    countDownTo("25 october 2023 11:58:00");
}


$(document).ready(function () {
    //? <!-- ============= SIDEBAR =================== -->
    $("#openBtn").on('click', openNav);
    $("#closeBtn").on('click', closeNav);


    //? <!-- ============= SINGERS =================== -->
    $('#singer h3').on('click', function () {
        $(this).siblings('h3').next('div').slideUp("slow");

        $(this).next().slideToggle("slow")
    })

    regex.init();
});