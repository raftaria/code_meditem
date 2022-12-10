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

// 문항 랜덤 체크
function randomCheck(num) {
  var ansNodeList = document.getElementsByName(num);
  ansNodeList[parseInt(Math.random() * 3)].checked = true;
}
// 모든 문항 체크 함수
function allCheck() {
  const questionListDevelop = [];
  for(var i = 0; i < 152; i++) {
    questionListDevelop[i] = i + 1;
  }
  
  for(let i = 0; i < questionListDevelop.length; i++) {
    randomCheck(questionListDevelop[i]);
  }
}