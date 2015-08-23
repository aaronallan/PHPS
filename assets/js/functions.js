(function(jQ) {
  jQ(document).on('ready', function (){
    jQ('#content').load('views/view.html #' + jQ(this).attr('value'));
  });
  
  jQ('.menu-item').on('click', function() {
    jQ(this).addClass('active');
    jQ('.menu-item').not(this).removeClass('active');
    jQ('#content').load('views/view.html #' + jQ(this).attr('value'));
  });

  jQ('.hamburger').on('click', function () {
    jQ('.mobile-menu').slideToggle();
  });
})(jQuery) 
