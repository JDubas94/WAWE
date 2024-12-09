$(function(){

  $(".menu__header a").on("click", function (event) {
		event.preventDefault();
		var id  = $(this).attr('href'),
			top = $(id).offset().top;
		$('body,html').animate({scrollTop: top}, 1500);
	});


    $('.menu__btn, .menu__header a').on('click', function(){
      $('.header__top-inner').toggleClass('header__top--active');
    });

    $('.slider-blog__items').slick({
      dots: true,
      arrows: false,
    });

    var mixer = mixitup('.gallery__content');
});
Fancybox.bind("[data-fancybox]", {
    
  });