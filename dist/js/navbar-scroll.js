//adding background blue on navbar
$(document).ready(function() {
    $(window).scroll(function() {
        $(this).scrollTop() > 120 ? $(".navbar").addClass("solid") : $(".navbar").removeClass("solid");
        $(this).scrollTop() == 0 ? $(".footer-button-back").addClass("d-none") : $(".footer-button-back").removeClass("d-none");
    })
});