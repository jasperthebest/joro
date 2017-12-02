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
		$('.nextMove').click(function(){
			$('.slickMove').slick('slickNext');
			return false;
		});
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
