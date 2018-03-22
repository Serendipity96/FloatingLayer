$('#button').on('click', function () {
    $('#float').show();
    $('.bg').show();
    $(document).one('click', function () {
        $('#float').hide();
        $('.bg').hide();
    });
});

$('#container').on('click', function (ev) {
    ev.stopPropagation()
});