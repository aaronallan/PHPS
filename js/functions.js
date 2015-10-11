(function($) {
  $(document).on('ready', function (){
    $('.hamburger, .mobile-menu ul li').on('click', function () {
      $('.mobile-menu').slideToggle();
    });
  });
})(jQuery);
