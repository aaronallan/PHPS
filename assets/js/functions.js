(function(jQ) {
  //On Ready, load home view
  jQ(document).on('ready', function (){
    jQ('#content').load('views/view.html #index');
  });

  //On List Item Click, update menu and load appropriate section
  jQ('.menu-item').on('click', function() {
    jQ(this).addClass('active');
    jQ('.menu-item').not(this).removeClass('active');
    jQ('#content').load('views/view.html #' + jQ(this).attr('value'));
  });
  
  var ceremonies = 'ceremonies';

  function fakeLink(destination) {
    console.log(destination);
    jQ('#content').load('views/view.html #' + destination);
  };

  //Toggle Mobile Menu
  jQ('.hamburger, .mobile-menu ul li').on('click', function () {
    jQ('.mobile-menu').slideToggle();
  });
})(jQuery) 
