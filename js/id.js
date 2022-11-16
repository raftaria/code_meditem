function twinType(e) {
  var dft = ["대분류를 선택하세요"];
  var persnalizedMedicine = ["소분류를 선택하세요", "가상장기", "게놈의학", "개인화된 건강정보", "전신스캔", "개개인 요구에 맞춘 약 처방", "수술 계획"];
  var improve = ["소분류를 선택하세요", "간병인 경험 향상", "효율적인 운영", "중환자 치료 개선", "가치기반 헬스케어", "공급망 관리", "병원 건설 속도 개선", "콜센터 상호작용"];
  var pharmaceutical = ["소분류를 선택하세요", "의료기기 소프트웨어", "의약품 위험성 구분", "新 생산 라인 시뮬레이션", "장치 가동 시간 향상", "사후 시장 동향 파악", "인간 가변성 시뮬레이션", "실험실의 디지털 트윈", "약 배달 개선"];
  var target = document.getElementById('small_type');

  if(e.value == "persnal") {
    var d = persnalizedMedicine;
  } else if(e.value == "improve") {
    var d = improve;
  } else if(e.value == "development") {
    var d = pharmaceutical;
  } else {
    var d = dft;
  }

  target.options.length = 0;
  
  for(x in d) {
    var opt = document.createElement("option");
    opt.value = d[x];
    opt.innerHTML = d[x];
    target.appendChild(opt);
  }
}