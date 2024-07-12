$(document).ready(function()
{
    const actuSlick = $('#actualites__slick');
    const matchSlick = $('#matchs__slick');
    const galerieSlick = $('#galeries__slick');
    const palmaresSlick = $('#palmares__slick');


    actuSlick.slick({
        infinite: false,
        slidesToShow: 1,
        slidesToScroll: 1,
        dots: false,
        prevArrow: $('.actualites .left'),
        nextArrow: $('.actualites .right'),
        responsive: [
            {
                breakpoint: 768,
                settings: {
                    slidesToShow: 1,
                    slidesToScroll: 1
                }
            }
        ]
    });

    matchSlick.slick({
        infinite: false,
        slidesToShow: 3,
        slidesToScroll: 3,
        dots: false,
        prevArrow: $('#home-matchs .left'),
        nextArrow: $('#home-matchs .right'),



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

    galerieSlick.slick({
        infinite: false,
        slidesToShow: 4,
        slidesToScroll: 4,
        dots: false,
        prevArrow: $('.galeries .left'),
        nextArrow: $('.galeries .right'),

        responsive: [
            {
                breakpoint: 1200,
                settings: {
                    slidesToShow: 3,
                    slidesToScroll: 3
                }
            },
            {
                breakpoint: 1000,
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
    
    palmaresSlick.slick({
        infinite: false,
        slidesToShow: 4,
        slidesToScroll: 4,
        dots: false,
        prevArrow: $('.palmares .left'),
        nextArrow: $('.palmares .right'),

        responsive: [
            {
                breakpoint: 1200,
                settings: {
                    slidesToShow: 3,
                    slidesToScroll: 3
                }
            },
            {
                breakpoint: 1000,
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
