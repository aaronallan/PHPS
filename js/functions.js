(function($) {
  $(document).on('ready', function (){

    // Hide / Show movile menu
    $('.hamburger, .mobile-menu ul li').on('click', function () {
      $('.mobile-menu').slideToggle();
    });

    // Show Info Modal
    $('.icon').on('click', function () {
      $('.modal').addClass('show');
      $(this).hide();
    });

    //Hide Info Modal
    $('.close').on('click', function () {
      $('.modal').removeClass('show');
      $('.icon').show();
      $('.icon').focus();
    });

    // Show History Modal
    $('.continue-reading').on('click', function () {
      $('.history-modal').addClass('show');
    });

    // On Window Change begin listening for click
    $(window).bind( 'hashchange', function(e) {
      var anchor = document.location.hash;
      if( anchor === '#about' ) {
        // Show History Modal
        $('.continue-reading').on('click', function () {
          console.log('clicked');
          $('.history-modal').addClass('show');
        });
      }
    });

    //Hide History Modal
    $('.history-wrapper').on('click', function () {
      $('.history-modal').removeClass('show');
    });

    // Handle Jumping Icon
    $('.visit-link').on('mouseover', function () {
      $('.icon').addClass('icon-bounce');
    }).on('mouseout', function () {
      $('.icon').removeClass('icon-bounce');
    });

    $(document).keyup(function(e) {
        if (e.keyCode == 27 && $('.history-modal').hasClass('show')) {
         $('.history-modal').removeClass('show');
        }
        if (e.keyCode == 27 && $('.modal').hasClass('show')) {
         $('.modal').removeClass('show');
        }
      });
    });

})(jQuery);
