$(document).ready(function(){
  // Slider
  $('.slider').slider({
    full_width: true,
    indicators: false,
    height: 850,
  });
  // /Slider

  // ScrollFire
  var options = [
    {
      selector: '#Servicios', offset: 400, callback: function(el) { Materialize.showStaggeredList($(el)); }
    }];
  Materialize.scrollFire(options);
  // /ScrollFire

  // Parallax
  $('.parallax').parallax();
  // /Parallax
  $('.scrollspy').scrollSpy();
  $('.carousel').carousel();
});
