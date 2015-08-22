(function(jQ) {
  jQ('.menu-item').on('click', function() {
    jQ(this).addClass('active');
    jQ('.menu-item').not(this).removeClass('active');
    console.log(jQ(this).attr('value'));
    jQ('#content').load('views/view.html #' + jQ(this).attr('value'));
    return false;
  });

  jQ('.hamburger').on('click', function () {
    jQ('.mobile-menu').slideToggle(300, function () {
      if (jQ('.mobile-menu').is(':visible')) {
        jQ('#content').addClass('mobile-menu-open');
      } else {
        jQ('#content').removeClass('mobile-menu-open');
      }
    });


  });
})(jQuery) 
