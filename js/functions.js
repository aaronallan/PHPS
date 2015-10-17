(function($) {
  $(document).on('ready', function (){
    
    // Hide / Show movile menu
    $('.hamburger, .mobile-menu ul li').on('click', function () {
      $('.mobile-menu').slideToggle();
    });

    // Show Full Page Modal
    $('.icon').on('click', function () {
      $('.modal').addClass('show');
      $(this).hide();
    });

    //Hide Full Page Modal
    $('.close').on('click', function () {
      $('.modal').removeClass('show');
      $('.icon').show();
    });

    // Handle Jumping Icon
    $('.visit-link').on('mouseover', function () {
      $('.icon').addClass('icon-bounce');
    }).on('mouseout', function () {
      $('.icon').removeClass('icon-bounce');
    });
  });
})(jQuery);
