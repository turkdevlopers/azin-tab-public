;(function($){
    "use strict"
	
	
	var nav_offset_top = $('header').height() + 50;
    /*-------------------------------------------------------------------------------
	  Navbar
	-------------------------------------------------------------------------------*/

	//* Navbar Fixed
    function navbarFixed(){
        if ( $('.header-area').length ){
            $(window).scroll(function() {
                var scroll = $(window).scrollTop();
                if (scroll >= nav_offset_top ) {
                    $(".header-area").addClass("navbar-fixed");
                } else {
                    $(".header-area").removeClass("navbar-fixed");
                }
            });
        };
    };
    navbarFixed();


	$('.main-menu .navbar-nav li a[href^="#"]:not([href="#"]').on('click', function(event) {
        var $anchor = $(this);
        $('html, body').stop().animate({
            scrollTop: $($anchor.attr('href')).offset().top - 70
        }, 1500);
        event.preventDefault();
    });

	// Activate scrollspy to add active class to navbar items on scroll
	$(window).on('load', function() {
		$('body').scrollspy({
			target: '#mainNav',
			offset: 70
		});
	});


	/*----------------------------------------------------*/
    /*  Parallax Effect js
    /*----------------------------------------------------*/
	function parallaxEffect() {
    	$('.bg-parallax').parallax();
	}
	parallaxEffect();


	$(document).ready(function() {
		$('.popup-youtube, .popup-vimeo, .popup-gmaps').magnificPopup({
			disableOn: 700,
			type: 'iframe',
			mainClass: 'mfp-fade',
			removalDelay: 160,
			preloader: false,

			fixedContentPos: false
		});
	});


	/*----------------------------------------------------*/
    /*  MailChimp Slider
    /*----------------------------------------------------*/
    function mailChimp(){
        $('#mc-embed-signup').find('form').ajaxChimp();
    }
    mailChimp();

	$('select').niceSelect();



	/*----------------------------------------------------*/
    /*  Testimonials Slider
    /*----------------------------------------------------*/
    function testimonials_slider(){
        if ( $('.testi-slider').length ){
            $('.testi-slider').owlCarousel({
                loop:true,
                margin: 30,
                items: 2,
                nav: false,
                autoplay: true,
                smartSpeed: 1500,
                dots:false,
                responsiveClass: true,
                responsive: {
                    0: {
                        items: 1,
                    },
                    768: {
                        items: 2,
                    },
                }
            })
        }
    }
    testimonials_slider();


	/*----------------------------------------------------*/
    /*  Testimonials Slider
    /*----------------------------------------------------*/
    function screenshot_slider(){
        if ( $('.screenshot-inner').length ){
            $('.screenshot-inner').owlCarousel({
                loop:true,
                margin: 30,
                items: 4,
                nav: false,
                autoplay: true,
                smartSpeed: 1500,
                dots:false,
                responsiveClass: true,
                responsive: {
                    0: {
                        items: 2,
                    },
                    576: {
                        items: 4,
                    },
                }
            })
        }
    }
    screenshot_slider();
	
	

	

})(jQuery)