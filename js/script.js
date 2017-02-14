$(document).ready(function() {
  $(function() {

    for (var i = 0; i < 256; i++) {
      var $gridBox = $('<div class="gridBox"></div>');
      $('#gridContainer').append($gridBox);
    }
  })
  $('.gridBox').hover(function() {
    $(this).removeClass('gridBox');
    $(this).addClass('fill')
  })
});
