var $navbar = $('button.bar');
var $btn = $('nav.head-nav');

$navbar.on('click', function(){
  console.log('button clicked')
  $btn.toggleClass('btn-toggle');
})
