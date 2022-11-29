// Progress Bar
$(function() {
  var $progress = $('#test_progress');
  var $wrapper = $('.test_wrap');

  $wrapper.find('.choice').prop('checked', false);

  var total = $wrapper.find('.question_wrap').length;

  $wrapper.on('change', '.choice', function() {
    var checked = $wrapper.find('.choice:checked').length;
    $progress.val(Number(checked * 100 / total));
  });
});