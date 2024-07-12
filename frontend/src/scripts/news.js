$(document).ready(function()
{
    const newsSlick = $('.news__wrapper');

    newsSlick.slick({
        infinite: false,
        slidesToShow: 1,
        slidesToScroll: 1,
        dots: true,
        dotsClass: 'buttons',
        prevArrow: $('.news__arrows__buttons .left'),
        nextArrow: $('.news__arrows__buttons .right'),

        // responsive for phone remove dots
        responsive: [
            {
                breakpoint: 600,
                settings: {
                    dots: false
                }
            }
        ]

       
    });

    $('.news__wrapper .buttons').appendTo('.news__arrows__buttons .buttons__container');

});