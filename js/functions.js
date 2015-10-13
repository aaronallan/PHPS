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
  });
})(jQuery);
