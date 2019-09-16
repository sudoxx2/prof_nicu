$(document).ready(function(){
  $("#h1_section1").fadeIn(2500);
  
  $("#h2_role").fadeIn(2500);
  $("#see_proj_btn").fadeIn(2500);
  
});

$(window).on('resize', function () {
  $('.class1').toggleClass('class2', $(window).width() < 768);
  
  $('#size').text($(window).width())
}).trigger('resize')