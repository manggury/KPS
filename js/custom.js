$(function () {
    $('.visual_wrap').slick({
        arrows: true,
    });

    $('.header .xi-bars').on('click', function (e) {
        e.preventDefault();
        $('.header .gnb').toggleClass('on');
    })

});