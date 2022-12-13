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


// 점수 계산하기
function calculate(num) {
  var score = 999;
  var ansNodeList = document.getElementsByName(num);
  ansNodeList.forEach((node) => {
    if (node.checked) {
      score = node.value;
    }
  });
  return score;
}

// iso-1, iso-2, iso-3, iso-4, IRB, 생명윤리법, KGCP, 보건의료 데이터 활용 가이드라인

function toReport() {
  var count_answer = document.querySelectorAll(".answer_wrap");
  console.log(count_answer.length); // 개수 확인용
  var isYes = 0;
  var isNo = 0;
  var isNone = 0;
  var sum = 0;
  var iso_1 = 0;
  var iso_2 = 0;
  var iso_3 = 0;
  var iso_4 = 0;
  var irb = 0;
  var rule = 0;
  var kgcp = 0;
  var data_guide = 0;

  iso1List = []; // ISO-1: 1~26번
  for (var i = 0; i < 26; i++) {
    iso1List[i] = i + 1;
  }
  for (var i = 0; i < iso1List.length; i++) {
    let score = calculate(iso1List[i]);

    if (score === 999) {
      // 빈 문항이 있을 때 종료 (score가 바뀌지 않아 999가 출력된 것이 빈 문항이 있다는 의미)
      alert("모든 항목을 체크해주세요!");
      return;
    } else if (score === "1") {
      isYes += 1;
      iso_1 += 1;
    } else if (score === "-1") {
      isNo += 1;
    } else {
      isNone += 1;
    }
    sum += Number(score); // score 총합 계산
  }

  iso2List = []; // ISO-2: 27~53번
  for (var i = 0; i < 27; i++) {
    iso2List[i] = i + 27;
  }
  for (var i = 27; i <= 53; i++) {
    let score = calculate(iso2List[i - 27]);

    if (score === 999) {
      // 빈 문항이 있을 때 종료 (score가 바뀌지 않아 999가 출력된 것이 빈 문항이 있다는 의미)
      alert("모든 항목을 체크해주세요!");
      return;
    } else if (score === "1") {
      isYes += 1;
      iso_2 += 1;
    } else if (score === "-1") {
      isNo += 1;
    } else {
      isNone += 1;
    }
    sum += Number(score); // score 총합 계산
  }

  iso3List = []; // ISO-3: 54~71번
  for (var i = 0; i < 18; i++) {
    iso3List[i] = i + 54;
  }
  for (var i = 54; i <= 71; i++) {
    let score = calculate(iso3List[i - 54]);

    if (score === 999) {
      // 빈 문항이 있을 때 종료 (score가 바뀌지 않아 999가 출력된 것이 빈 문항이 있다는 의미)
      alert("모든 항목을 체크해주세요!");
      return;
    } else if (score === "1") {
      isYes += 1;
      iso_3 += 1;
    } else if (score === "-1") {
      isNo += 1;
    } else {
      isNone += 1;
    }
    sum += Number(score); // score 총합 계산
  }

  iso4List = []; // ISO-4: 72~88번
  for (var i = 0; i < 17; i++) {
    iso4List[i] = i + 72;
  }
  for (var i = 72; i <= 88; i++) {
    let score = calculate(iso4List[i - 72]);

    if (score === 999) {
      // 빈 문항이 있을 때 종료 (score가 바뀌지 않아 999가 출력된 것이 빈 문항이 있다는 의미)
      alert("모든 항목을 체크해주세요!");
      return;
    } else if (score === "1") {
      isYes += 1;
      iso_4 += 1;
    } else if (score === "-1") {
      isNo += 1;
    } else {
      isNone += 1;
    }
    sum += Number(score); // score 총합 계산
  }

  irbList = []; // IRB: 89~93번
  for (var i = 0; i < 5; i++) {
    irbList[i] = i + 89;
  }
  for (var i = 89; i <= 93; i++) {
    let score = calculate(irbList[i - 89]);

    if (score === 999) {
      // 빈 문항이 있을 때 종료 (score가 바뀌지 않아 999가 출력된 것이 빈 문항이 있다는 의미)
      alert("모든 항목을 체크해주세요!");
      return;
    } else if (score === "1") {
      isYes += 1;
      irb += 1;
    } else if (score === "-1") {
      isNo += 1;
    } else {
      isNone += 1;
    }
    sum += Number(score); // score 총합 계산
  }

  ruleList = []; // 생명윤리법: 94~102번
  for (var i = 0; i < 9; i++) {
    ruleList[i] = i + 94;
  }
  for (var i = 94; i <= 102; i++) {
    let score = calculate(ruleList[i - 94]);

    if (score === 999) {
      // 빈 문항이 있을 때 종료 (score가 바뀌지 않아 999가 출력된 것이 빈 문항이 있다는 의미)
      alert("모든 항목을 체크해주세요!");
      return;
    } else if (score === "1") {
      isYes += 1;
      rule += 1;
    } else if (score === "-1") {
      isNo += 1;
    } else {
      isNone += 1;
    }
    sum += Number(score); // score 총합 계산
  }

  kgcpList = []; // KGCP: 103~124번
  for (var i = 0; i < 22; i++) {
    kgcpList[i] = i + 103;
  }
  for (var i = 103; i <= 124; i++) {
    let score = calculate(kgcpList[i - 103]);

    if (score === 999) {
      // 빈 문항이 있을 때 종료 (score가 바뀌지 않아 999가 출력된 것이 빈 문항이 있다는 의미)
      alert("모든 항목을 체크해주세요!");
      return;
    } else if (score === "1") {
      isYes += 1;
      kgcp += 1;
    } else if (score === "-1") {
      isNo += 1;
    } else {
      isNone += 1;
    }
    sum += Number(score); // score 총합 계산
  }

  dataList = []; // 보건의료 데이터 활용 가이드라인: 125~152번
  for (var i = 0; i < 28; i++) {
    dataList[i] = i + 125;
  }
  for (var i = 125; i <= 152; i++) {
    let score = calculate(dataList[i - 125]);

    if (score === 999) {
      // 빈 문항이 있을 때 종료 (score가 바뀌지 않아 999가 출력된 것이 빈 문항이 있다는 의미)
      alert("모든 항목을 체크해주세요!");
      return;
    } else if (score === "1") {
      isYes += 1;
      data_guide += 1;
    } else if (score === "-1") {
      isNo += 1;
    } else {
      isNone += 1;
    }
    sum += Number(score); // score 총합 계산
  }

  console.log("isYes: ", isYes, "isNo: ", isNo, "isNone: ", isNone); // yes 개수 출력
  console.log(iso_1, iso_2, iso_3, iso_4, irb, rule, kgcp, data_guide);
  console.log("총합: ", sum);
  localStorage.setItem('isYes', isYes);
  localStorage.setItem('isNo', isNo);
  localStorage.setItem('iso_1', iso_1);
  localStorage.setItem('iso_2', iso_2);
  localStorage.setItem('iso_3', iso_3);
  localStorage.setItem('iso_4', iso_4);
  localStorage.setItem('irb', irb);
  localStorage.setItem('rule', rule);
  localStorage.setItem('kgcp', kgcp);
  localStorage.setItem('data_guide', data_guide);
  location.href = 'result.html';
}
