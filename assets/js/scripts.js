$(function() {
  $('.main-menu a[href*="#"]:not([href="#"])').click(function() {
    $( "#menu-bar" ).prop( "checked", false );
    if (location.pathname.replace(/^\//,'') == this.pathname.replace(/^\//,'') && location.hostname == this.hostname) {
      var target = $(this.hash);
      target = target.length ? target : $('[name=' + this.hash.slice(1) +']');
      if (target.length) {
        $('html, body').animate({
          scrollTop: target.offset().top
        }, 1000);
        return false;
      }
    }
  });

  $('.popup').click(function(event) {
    event.preventDefault();
    var link = $(this).attr('href');
    $('.overlay .content .body iframe').remove();
    $('.overlay .content .body',).append('<iframe src="'+ link +'"></iframe>');
    $('.overlay').fadeIn("slow");
  });

  $('.overlay .close').click(function(event) {
    $('.overlay').fadeOut("slow", function() {
      $('.content .body iframe').remove();
    })
  })

});