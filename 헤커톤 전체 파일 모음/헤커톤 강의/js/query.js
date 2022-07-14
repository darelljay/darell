$('#coca').mouseenter(() => {
    $('#logo').attr('src', './images/logo/cocacolaLogo.png');
    $('#circle').css('background-color', 'red');
    $('#btn').css('background-color', 'red');
    $('#facebook').css('background-color', 'red');
    $('#instagram').css('background-color', 'red');
    $('#twitter').css('background-color', 'red');

    $('#coca').css('transform', 'translateY(-50px)');
    $('#fanta').css('transform', 'translateY(0px)');
    $('#sprite').css('transform', 'translateY(0px)');
});

$('#fanta').mouseenter(() => {
    $('#logo').attr('src', './images/logo/FantaLogo.png');
    $('#circle').css('background-color', '#6610f2');
    $('#btn').css('background-color', '#6610f2');
    $('#facebook').css('background-color', '#6610f2');
    $('#instagram').css('background-color', '#6610f2');
    $('#twitter').css('background-color', '#6610f2');

    $('#coca').css('transform', 'translateY(0px)');
    $('#fanta').css('transform', 'translateY(-50px)');
    $('#sprite').css('transform', 'translateY(0px)');
});

$('#sprite').mouseenter(() => {
    $('#logo').attr('src', './images/logo/spriteLogo.png');
    $('#circle').css('background-color', '#28a745');
    $('#btn').css('background-color', '#28a745');
    $('#facebook').css('background-color', '#28a745');
    $('#instagram').css('background-color', '#28a745');
    $('#twitter').css('background-color', '#28a745');

    $('#coca').css('transform', 'translateY(0px)');
    $('#fanta').css('transform', 'translateY(0px)');
    $('#sprite').css('transform', 'translateY(-50px)');
});

