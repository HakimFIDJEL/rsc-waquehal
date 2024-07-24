(function($) {
    "use strict";

    var tpj = jQuery;
    var revapi24;
	
	
  // Preloader 
    jQuery(window).on('load', function() {
        jQuery("#status").fadeOut();
        jQuery("#preloader").delay(350).fadeOut("slow");
    });
	
	
	 // on ready function
    jQuery(document).ready(function($) {


function quick_search(){
	'use strict';
	/* Quik search in header on click function */
	var quikSearch = $("#quik-search-btn");
	var quikSearchRemove = $("#quik-search-remove");
	
	quikSearch.on('click',function() {
		$('.dez-quik-search').animate({'width': '100%' });
		$('.dez-quik-search').delay(500).css({'left': '0'  });
    });
    
	quikSearchRemove.on('click',function() {
        $('.dez-quik-search').animate({'width': '0%' ,  'right': '0'  });
		$('.dez-quik-search').css({'left': 'auto'  });
    });	
	/* Quik search in header on click function End*/
}
quick_search();

 
 
 /**** select2 js ****/
	
	$(".myselect").select2();
	

			// slider js //

        (function($) {

            //Function to animate slider captions 
            function doAnimations(elems) {
                //Cache the animationend event in a variable
                var animEndEv = 'webkitAnimationEnd animationend';

                elems.each(function() {
                    var $this = $(this),
                        $animationType = $this.data('animation');
                    $this.addClass($animationType).one(animEndEv, function() {
                        $this.removeClass($animationType);
                    });
                });
            }

            //Variables on page load 
            var $myCarousel = $('#carousel-example-generic'),
                $firstAnimatingElems = $myCarousel.find('.carousel-item:first').find("[data-animation ^= 'animated']");

            //Initialize carousel 
            $myCarousel.carousel();

            //Animate captions in first slide on page load 
            doAnimations($firstAnimatingElems);

            //Pause carousel  
            $myCarousel.carousel('pause');


            //Other slides to be animated on carousel slide event 
            $myCarousel.on('click slide.bs.carousel', function(e) {
                var $animatingElems = $(e.relatedTarget).find("[data-animation ^= 'animated']");
                doAnimations($animatingElems);
            });


        })(jQuery);
		
		
		//************* mover over ************//
		
			var windowWidth = $(window).width();

$('.slider-area').mousemove(function(event){
  var moveX = (($(window).width() / 2) - event.pageX) * 0.1;
  var moveY = (($(window).height() / 2) - event.pageY) * 0.1;
  $('.lr_banner_content_inner_wrapper h3').css('left', moveX + 'px');
  $('.lr_banner_content_inner_wrapper h3').css('bottom', moveY + 'px');
  $('.lr_banner_content_inner_wrapper h2').css('bottom', moveY + 'px');
  $('.lr_banner_content_inner_wrapper h4').css('margin-left', -moveX + 'px');
});
	
	
	//************* time counter ***********//
		
	var deadline = 'august 13 2023 11:59:00 GMT-0400';
		function time_remaining(endtime){
			var t = Date.parse(endtime) - Date.parse(new Date());
			var seconds = Math.floor( (t/1000) % 60 );
			var minutes = Math.floor( (t/1000/60) % 60 );
			var hours = Math.floor( (t/(1000*60*60)) % 24 );
			var days = Math.floor( t/(1000*60*60*24) );
			return {'total':t, 'days':days, 'hours':hours, 'minutes':minutes, 'seconds':seconds};
		}
		function run_clock(id,endtime){
			var clock = document.getElementById(id);
			
			// get spans where our clock numbers are held
			var days_span = clock.querySelector('.days');
			var hours_span = clock.querySelector('.hours');
			var minutes_span = clock.querySelector('.minutes');
			var seconds_span = clock.querySelector('.seconds');

			function update_clock(){
				var t = time_remaining(endtime);
				
				// update the numbers in each part of the clock
				days_span.innerHTML = t.days;
				hours_span.innerHTML = ('0' + t.hours).slice(-2);
				minutes_span.innerHTML = ('0' + t.minutes).slice(-2);
				seconds_span.innerHTML = ('0' + t.seconds).slice(-2);
				
				if(t.total<=0){ clearInterval(timeinterval); }
			}
			update_clock();
			var timeinterval = setInterval(update_clock,1000);
		}
		run_clock('clockdiv',deadline);	
		
			
			//show hide login form js
	$('#menu_toggle_icon').on("click", function(e) {
		$('#menu_open').slideToggle();
		e.stopPropagation(); 
	});

	$(document).on("click", function(e){
		if(!(e.target.closest('#menu_open'))){	
			$("#menu_open").slideUp();   		
		}
   });
   
   $(".rotate").on("click", function () {
    $(this).toggleClass("down");
})
   
			

 //* Isotope js
    function protfolioIsotope(){
        if ( $('.protfolio_area, .portfolio_grid').length ){ 
            // Activate isotope in container
            $(".protfoli_inner, .portfoli_inner").imagesLoaded( function() {
                $(".protfoli_inner, .portfoli_inner").isotope({
                    layoutMode: 'masonry',  
                }); 
            });  
            
            // Add isotope click function 
            $(".protfoli_filter li").on('click',function(){
                $(".protfoli_filter li").removeClass("active");
                $(this).addClass("active"); 
                var selector = $(this).attr("data-filter");
                $(".protfoli_inner, .portfoli_inner").isotope({
                    filter: selector,
                    animationOptions: {
                        duration: 450,
                        easing: "linear",
                        queue: false,
                    }
                });
                return false;
            });  
        };
    }; 
 protfolioIsotope (); 

 
			 //------------ counter-section------------// 

    $('.counter_section').on('inview', function(event, visible, visiblePartX, visiblePartY) {
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
	
	
			//*********** vertical slider ***********//	 	
				$(".album-slider").bxSlider({
					minSlides: 1,
					maxSlides: 10,
					slideWidth: 350,
					ticker: true,
					tickerHover: true,
					speed: 20000,
					useCSS: false,
					pager:false,
					infiniteLoop: false
					
					});
	

				/*------------scroll bar-------------*/
				
			$("#tg-playerscrollbar").mCustomScrollbar({
				axis:"y",
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
	

 });

})(jQuery);	