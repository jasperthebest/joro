	/* Ready function */
	window.onbeforeunload = function() {
		window.scrollTo(0,0);
	}
	$(function() {
		/* Body Animate */
		$('body').animate({'opacity':1}, 1500);
		/* BG intro */
		$('[data-bg]').each(function(){
		var curBg = $(this).data('bg');
		$(this).css({'background-image':'url('+curBg+')','filter':'progid:DXImageTransform.Microsoft.AlphaImageLoader(src='+curBg+',sizingMethod=scale)'});
		});
		/* Scroll Animation */ 
		$('*[data-animated]').addClass('animated');
			function animated_contents() {
			$(".animated:appeared").each(function (i) {
				var $this    = $(this),
					animated = $(this).data('animated');
				setTimeout(function () {
					$this.addClass(animated);
				}, 70 * i);
			});
		}
		/* Slick Slider */
		$('.slickMove').slick({
		  autoplay: false,
		  autoplaySpeed: 6000,
		  dots: false,
		  infinite: false,
		  pauseOnHover: false,
		  slidesToShow: 1,
		  slidesToScroll: 1,
		  adaptiveHeight: true,
		  arrows: false
		});
		$('.bgSlide').slick({
		  autoplay: true,
		  autoplaySpeed: 3500,
		  dots: false,
		  infinite: false,
		  fade: true,
		  pauseOnHover: false,
		  slidesToShow: 1,
		  slidesToScroll: 1,
		  arrows: false
		});
		$(".workingSlide").slick({
		  autoplay: false,
		  autoplaySpeed: 3500,
		  dots: false,
		  infinite: true,
		  fade: true,
		  pauseOnHover: false,
		  slidesToShow: 1,
		  slidesToScroll: 1,
		  arrows: true,
		  adaptiveHeight: true,
		  prevArrow: '<a href="javascript:void(0);" class="slick-prev slick-arrow"><img src="images/arrowforwardyellow.png" alt="Prev Slide"></a>',
		  nextArrow: '<a href="javascript:void(0);" class="slick-next slick-arrow"><img src="images/arrowforwardyellow.png" alt="Next Slide"></a>'
		});
		$('.nextMove').click(function(){
			$('.slickMove').slick('slickNext');
			return false;
		});
		/* Click Outside Submenu Close */
		$(document).mouseup(function (e) {
		    var container = $(".workHere");
		    if (!container.is(e.target) && container.has(e.target).length === 0) {
 		        $('.workPopup').removeClass('active');
		    }
		});
		/* Open Pop Up Working Stills */
		$('.workMore').click(function(){
			var dataopen = $(this).data('open');
			$('#'+dataopen).addClass('active');
			$('.workingSlide').slick('setPosition');
			return false;
		});
		/* Team Show Face */
		$('#face0').show();
		$('.rhombus > div > div').click(function(){
			if(!$(this).hasClass('active')) {
				var dataid = $(this).data('click');
				$('.rhombus > div > div').removeClass('active');
				$(this).addClass('active');
				$('.faceList').slideUp();
				$('#'+dataid).slideDown();
			}
		});
		$('#nav-icon').click(function(){
			$(this).toggleClass('active');
			$('.fixMenu').slideToggle();
			return false;
		});
		$('.fixMenu ul li a').click(function(){
			var num = $(this).data('indexslide');
			$('#nav-icon').toggleClass('active');
			$('.fixMenu').slideToggle();
			var slider = $('.slickMove');
			slider[0].slick.slickGoTo(parseInt(num));
			return false;
		});
		/* Video */
		var videosrc = $('.playTrailer').siblings('iframe').attr('src');
		$('.playTrailer').click(function(){
			$('.trailerPart').addClass('hide');
			$('.trailerPart iframe').attr('src', videosrc+'&autoplay=1');
			return false;
		});
		$('.backSlide').click(function(){
			if($('.slickMove').slick('slickCurrentSlide') != 0) {
	        $('.slickMove').slick('slickPrev');
	      	} else {
	        $("html, body").animate({ scrollTop: "0" }, 1000);
	      	}
			return false;
		});
		/*
		$('.closeVid').click(function(){
			$('.videoArea span').removeClass('hide');
			$('.videoArea iframe').attr('src', '');
			$('.videoArea iframe').attr('src', videosrc);
			return false;
		});
		*/
		/* Init Function */
		animated_contents();
		$(window).scroll(function() {
			animated_contents();
		});
	});

	/* Scroll */
	$(window).scroll(function() {
		if($(window).scrollTop() >= $('.slickMove').offset().top) {
			$('#nav-icon, .backSlide').addClass('show');
		} else {
			$('#nav-icon, .backSlide').removeClass('show');
		}
	});
	
	/* Resize */
	if(!Modernizr.touch) {
	$(window).resize(function(){

		/* Init Function */
	});
	}

	/* Orientation  */
	$(window).on("orientationchange",function(){

		/* Init Function */
	});
