// Preloader 
jQuery(window).on('load', function() {
    jQuery("#status").fadeOut();
    jQuery("#preloader").delay(350).fadeOut("slow");
});
     // ===== Scroll to Top ==== 
     $(window).scroll(function() {
        if ($(this).scrollTop() >= 100) {
            $('#return-to-top').fadeIn(200);
        } else {
            $('#return-to-top').fadeOut(200);
        }
    });
    $('#return-to-top').on('click', function() {
        $('body,html').animate({
            scrollTop: 0
        }, 500);
    });
// search

$('#search_button').on("click", function (e) {
    $('#search_open').slideToggle();
    e.stopPropagation();
});

$(document).on("click", function (e) {
    if (!(e.target.closest('#search_open'))) {
        $("#search_open").slideUp();
    }
});

//  

$('#search_button1').on("click", function (e) {
    $('#search_open1').slideToggle();
    e.stopPropagation();
});

$(document).on("click", function (e) {
    if (!(e.target.closest('#search_open1'))) {
        $("#search_open1").slideUp();
    }
});

// gallery

$('.portfolio_img_text').magnificPopup({
    delegate: '.img-link',
    type: 'image',
    tLoading: 'Loading image #%curr%...',
    mainClass: 'mfp-img-mobile',
    gallery: {
        enabled: true,
        navigateByImgClick: true,
        preload: [0, 1]
    },
    image: {
        tError: '<a href="%url%">The image #%curr%</a> could not be loaded.',
        titleSrc: function (item) {
            return item.el.attr('title') + '<small></small>';
        }
    }
});
$('.portfolio_img_icon').magnificPopup({
    delegate: '.img-link',
    type: 'image',
    tLoading: 'Loading image #%curr%...',
    mainClass: 'mfp-img-mobile',
    gallery: {
        enabled: true,
        navigateByImgClick: true,
        preload: [0, 1]
    },
    image: {
        tError: '<a href="%url%">The image #%curr%</a> could not be loaded.',
        titleSrc: function (item) {
            return item.el.attr('title') + '<small></small>';
        }
    }
});

// testimonial-slider

$('.testimonial-slider .owl-carousel').owlCarousel({
    loop: true,
    margin: 20,
    dots: true,
    nav: false,
    autoplay: false,
    navText: ['<i class="fa fa-angle-left"></i>', '<i class="fa fa-angle-right"></i>'],
    smartSpeed: 1200,
    responsive: {
       0: {
             items: 1
       },
       350: {
             items: 1
       },
       600: {
             items: 1
       },
       767: {
             items: 1
       },
       1200: {
             items: 2
       }
      
    }
 })

//  news slider

$('.news-slider .owl-carousel').owlCarousel({
    loop: true,
    margin: 0,
    dots: false,
    nav: true,
    autoplay: true,
    navText: ['<i class="fa fa-angle-left"></i>', '<i class="fa fa-angle-right"></i>'],
    smartSpeed: 1200,
    responsive: {
       0: {
             items: 1
       },
       350: {
             items: 1
       },
       600: {
             items: 1
       },
       767: {
             items: 1
       },
       1200: {
             items: 1
       },
       1300: {
             items: 1
       }
    }
 })

//  counter

$('.sport-about-main-wrapper').on('inview', function(event, visible, visiblePartX, visiblePartY) {
    if (visible) {
          $(this).find('.timer').each(function () {
             var $this = $(this);
             $({ Counter: 0 }).animate({ Counter: $this.text() }, {
                duration: 2000,
                easing: 'swing',
                step: function () {
                      $this.text(Math.ceil(this.Counter));
                }
             });
          });
          $(this).off('inview');
    }
 });

//  match review

$(document).ready(function(){
    $('.match-review-strip-wrapper').click(function() {
    // Toggle the clicked div
    $(this).find('.review-show-wrapper').toggle();
    
    // Hide other divs
    $('.match-review-strip-wrapper').not(this).find('.review-show-wrapper').hide();
 });
});

$(document).ready(function () {
    $(".sidebar-toggle , .sidebar-close").on('click', function () {
        $("#right-sidebar").toggleClass("open")
    });
});

(function ($) {
    $(document).ready(function () {

        $('#cssmenu li.active').addClass('open').children('ul').show();
        $('#cssmenu li.has-sub>a').on('click', function () {
            $(this).removeAttr('href');
            var element = $(this).parent('li');
            if (element.hasClass('open')) {
                element.removeClass('open');
                element.find('li').removeClass('open');
                element.find('ul').slideUp(200);
            } else {
                element.addClass('open');
                element.children('ul').slideDown(200);
                element.siblings('li').children('ul').slideUp(200);
                element.siblings('li').removeClass('open');
                element.siblings('li').find('li').removeClass('open');
                element.siblings('li').find('ul').slideUp(200);
            }
        });

    });
})(jQuery);

// menu fixed
$(window).scroll(function () {
    var window_top = $(window).scrollTop() + 1;
    if (window_top > 100) {
        $('.menu-items-wrapper').addClass('menu-fixed animated fadeInDown');
    } else {
        $('.menu-items-wrapper').removeClass('menu-fixed animated fadeInDown');
    }
});

// toggle cross btn js
$(".toggle-main-wrapper , #toggle_close").on("click", function () {
    $("#sidebar").toggleClass("open")
});

$(document).ready(function () {
    $(".click-toggle").on('click', function () {
        $(".click-toggle").toggleClass("main");
    });
});

// $(document).ready(function () {
//     $(".login-btn").on('click', function () {
//         $(".user-text").slideToggle();
//     });
//     $('body').on('click', function (e) {
//         if (!$('.login-btn').is(e.target) &&
//             $('.login-btn').has(e.target).length === 0 &&
//             $('.open').has(e.target).length === 0
//         ) {
//             $('.user-text').slideUp();
//         }
//     });
// });

$(document).ready(function() {
    $('.youtube, .popup-vimeo, .popup-gmaps').magnificPopup({
        disableOn: 700,
        type: 'iframe',
        mainClass: 'mfp-fade',
        removalDelay: 160,
        preloader: false,

        fixedContentPos: false
    });
});

	// slider js //

    var swiper = new Swiper('.swiper-container', {
        pagination: {
          el: '.swiper-pagination',
          type: 'fraction',
        },
        navigation: {
          nextEl: '.swiper-button-next',
          prevEl: '.swiper-button-prev',
        },
      });
      