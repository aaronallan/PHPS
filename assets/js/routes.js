console.log('available');

page('/#index', function(){
  console.log('index')
});

page('/#ceremonies', function () {
  console.log('ceremonies');
});

page.start();