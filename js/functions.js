(function($) {
  $(document).on('ready', function (){
    $('.hamburger, .mobile-menu ul li').on('click', function () {
      $('.mobile-menu').slideToggle();
    });

    $('.icon').on('click', function () {
      $('.modal').addClass('show');
      $(this).hide();
    });
    $('.close').on('click', function () {
      $('.modal').removeClass('show');
      $('.icon').show();
    });

    $('.visit-link').on('mouseover', function () {
      $('.icon').addClass('icon-bounce');
    });
    $('.visit-link').on('mouseout', function () {
      $('.icon').removeClass('icon-bounce');
    });
  });
})(jQuery);
