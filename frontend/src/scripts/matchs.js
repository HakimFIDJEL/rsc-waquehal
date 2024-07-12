$(document).ready(function()
{

    const matchToComeSlick = $('#matchsToCome__slick');
    const matchLastSlick = $('#matchsLast__slick');

    matchToComeSlick.slick({
        infinite: false,
        slidesToShow: 3,
        slidesToScroll: 3,
        dots: false,
        prevArrow: $('.matchsToCome .left'),
        nextArrow: $('.matchsToCome .right'),

        responsive: [
            {
                breakpoint: 1350,
                settings: {
                    slidesToShow: 2,
                    slidesToScroll: 2
                }
            },
            {
                breakpoint: 600,
                settings: {
                    slidesToShow: 1,
                    slidesToScroll: 1
                }
            }
        ]
    });
    
    matchLastSlick.slick({
        infinite: false,
        slidesToShow: 3,
        slidesToScroll: 3,
        dots: false,
        prevArrow: $('.matchsLast .left'),
        nextArrow: $('.matchsLast .right'),
        responsive: [
            {
                breakpoint: 1350,
                settings: {
                    slidesToShow: 2,
                    slidesToScroll: 2
                }
            },
            {
                breakpoint: 600,
                settings: {
                    slidesToShow: 1,
                    slidesToScroll: 1
                }
            }
        ]
    });

    



});