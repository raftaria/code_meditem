// 진행바
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

// 문항 랜덤 체크 (시연할 때 시간 단축용)
function randomCheck(num) {
  var ansNodeList = document.getElementsByName(num);
  ansNodeList[parseInt(Math.random() * 3)].checked = true;
}
// 모든 문항 체크 함수 (시연할 때 시간 단축용)
function allCheck() {
  const questionListPersonal = [];  // 문항수
  for(var i = 0; i < 163; i++) {
    questionListPersonal[i] = i + 1;
  }

  for(let i = 0; i < questionListPersonal.length; i++) {
    randomCheck(questionListPersonal[i]);
  }
}

// 점수 계산하기
function calculate(num) {
  var score = 999;
  var ansNodeList = document.getElementsByName(num);
  
  ansNodeList.forEach((node) => {
    if(node.checked)  {
      score = node.value;
    }
  });
  return Number(score);
}


// iso-1, iso-2, iso-3, iso-4, IRB, 생명윤리법, KGCP, 보건의료 데이터 활용 가이드라인

function toReport() {
  var count_answer = document.querySelectorAll('.answer_wrap');
  console.log(count_answer.length); // 개수 확인용
  var yes = 0;
  var no = 0;
  var iso_1 = 0;
  var iso_2 = 0;
  var iso_3 = 0;
  var iso_4 = 0;
  var irb = 0;
  var rule = 0;
  var data_guide = 0;

  iso1List = []   // ISO-1: 1~30번
  for(var i = 0; i < 30; i++) {
    iso1List[i] = i + 1;
  }

  for(var i = 0; i < iso1List.length; i++) {  // 30번까지 계산. 이후 나머지 부분(iso-2, iso-3, ...)도 계산해야 함
    let score = calculate(iso1List[i]);

    if(score === 999) {   // 빈 문항이 있을 때 종료 (score가 바뀌지 않아 999가 출력된 것이 빈 문항이 있다는 의미)
      alert("모든 항목을 체크해주세요!");
      return;
    }
    yes += score;   // yes 개수 계산
  }
  console.log(yes); // yes 개수 출력
}