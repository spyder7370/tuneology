$('.song-link ').click(function() {
	var url = $(this).data('url');
	window.location.href = url;
	return false;
});

let carousel = $('#albumCarousel');
let buttons = $('.firstCarouselButtons');
buttons.css('marginTop', carousel.height() / 2.5);
