/////////////////////////////////////////////////////
///////// 3D CAROUSEL INDICATOR NAVIGATIONS /////////
/////////////////////////////////////////////////////

$('#button-right').click(function() {
  $('.slider').children().addClass('left').removeClass('right').first().appendTo('.slider');
});

$('#button-left').click(function() {
  $('.slider').children().addClass('right').removeClass('left').last().prependTo('.slider');
});
