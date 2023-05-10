$(document).ready(function(){
  $('a[href^="#"]').on('click', function(event) {
    var target = $(this.getAttribute('href'));
    if( target.length ) {
        event.preventDefault();
        $('html, body').stop().animate({
            scrollTop: target.offset().top - 50
        }, 2000);
    }
  });
});

$(document).ready(function() {
  $(window).scroll(function() {
    if ($(this).scrollTop() < 600) {
      $(".left-menu").fadeOut();
      $(".top-menu").fadeIn();
    } else {
      $(".left-menu").fadeIn();
      $(".top-menu").fadeOut();
    }
  });
});
