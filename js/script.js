$(document).ready(function() {
  $(function() {

    for (var i = 0; i < 256; i++) {
      var $gridBox = $('<div class="gridBox"></div>');
      $('#gridContainer').append($gridBox);
    }
  })
  $('#gridContainer').hover(function() {
    $('.gridBox').mouseenter(function() {
      $(this).addClass('fill');
    });
  })
  $('#button').click(function() {
    $('.gridBox').removeClass('fill');
    

  })
});
