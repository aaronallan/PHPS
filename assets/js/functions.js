$(document).ready(function () {
  console.log('page rendered');
});

$('li').on('click', function() {
  $(this).addClass('active');
  $('li').not(this).removeClass('active');
  console.log($(this).attr('value'));
  $('#content').load('views/view.html #' + $(this).attr('value'));
  return false;
});

// $('li.active').change(function() {
//   console.log($('li.active').val());
//   // $('#content').load('#' + $('li.active').val());

//   return false;
// });