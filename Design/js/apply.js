$(document).ready(function() {
    $('#apply').click(function() {
        $('.form_mask').fadeIn(100);
        $('.apply_form').slideDown(200);
    })
    $('.apply_close').click(function() {
        $('.form_mask').fadeOut(100);
        $('.apply_form').slideUp(200);
    })
})