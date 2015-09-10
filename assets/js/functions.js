(function($) {
  //Routes
  page.base('/phps');
  page('/', index);
  page('/about', about);
  page();

  function index () {
    console.log('index');
  }

  function about () {
    console.log('about');
  }

  //On Ready, load home view
  $(document).on('ready', function (){
    $('#content').load('views/view.html #index');
  });

  //On List Item Click, update menu and load appropriate section
  $('.menu-item').on('click', function() {
    $(this).addClass('active');
    $('.menu-item').not(this).removeClass('active');
    $('#content').load('views/view.html #' + $(this).attr('value'));
  });
  

  $('#weddingLink').on('click', function() {
    console.log('clicked');
    $('#content').load('views/view.html #ceremonies');
  });

  //Toggle Mobile Menu
  $('.hamburger, .mobile-menu ul li').on('click', function () {
    $('.mobile-menu').slideToggle();
  });
})(jQuery) 
