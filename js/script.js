$(document).ready(function() {
  var x = 16;
  var grid = 0;
  $('#button').mouseup(function() {
    this.blur()
  });
  $('#gridContainer').hover(function fill() {
    $('.gridBox').mouseenter(function() {
      $(this).addClass('fill');
    });
  });
  var gridGen = function() {
    for (var i = 0; i < x * x; i++) {
    var $gridBox = $('<div class="gridBox"></div>');
    $('#gridContainer').append($gridBox);
    }
  };
  var boxSize = function() {
    if (x < 1 || x > 100 || isNaN(x) == true) {
      alert('Please enter a value between 1 and 100');
    }
      else {
      var size = 640 / x;
      $('.gridBox').css('width', size).css('height', size);
    }
  };
  $('#button').click(function() {
    $('.gridBox').remove();
    x = prompt('Enter a value between 1 and 100 for x,y dimensions');
    gridGen();
    boxSize();
  });
  gridGen();
  boxSize();
});
