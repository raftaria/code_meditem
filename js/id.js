function twinType(e) {
  var dft = ["대분류를 선택하세요"];
  var persnalizedMedicine = ["소분류를 선택하세요", "가상장기", "게놈의학", "개인화된 건강정보", "전신스캔", "개개인 요구에 맞춘 약 처방", "수술 계획"];
  var improve = ["소분류를 선택하세요", "간병인 경험 향상", "효율적인 운영", "중환자 치료 개선", "가치기반 헬스케어", "공급망 관리", "병원 건설 속도 개선", "콜센터 상호작용"];
  var pharmaceutical = ["소분류를 선택하세요", "의료기기 소프트웨어", "의약품 위험성 구분", "新 생산 라인 시뮬레이션", "장치 가동 시간 향상", "사후 시장 동향 파악", "인간 가변성 시뮬레이션", "실험실의 디지털 트윈", "약 배달 개선"];
  var small_type = document.getElementById('small_type');

  if(e.value == "개인맞춤의학") {
    var d = persnalizedMedicine;
  } else if(e.value == "의료조직개선") {
    var d = improve;
  } else if(e.value == "의약품, 의료기기개발") {
    var d = pharmaceutical;
  } else {
    var d = dft;
  }

  small_type.options.length = 0;
  
  for(x in d) {
    var opt = document.createElement("option");
    opt.value = d[x];
    opt.innerHTML = d[x];
    small_type.appendChild(opt);
  }
}

// 다른 페이지로 파라미터 넘기기.. ㅋ...
const ko_busi = document.querySelector('#ko_busi');
const en_busi = document.querySelector('#en_busi');
const busi_number = document.querySelector('#busi_number');
const busi_establish = document.querySelector('#busi_establish');
const busi_represent = document.querySelector('#busi_represent');
const busi_homepage = document.querySelector('#busi_homepage');
const busi_email = document.querySelector('#busi_email');
const busi_pnum = document.querySelector('#busi_pnum');
const busi_fax = document.querySelector('#busi_fax');
const busi_address = document.querySelector('#busi_address');
const charge_name = document.querySelector('#charge_name');
const charge_num = document.querySelector('#charge_num');
const charge_email = document.querySelector('#charge_email');
const charge_posi = document.querySelector('#charge_posi');
const ko_product = document.querySelector('#product_name_ko');
const en_product = document.querySelector('#product_name_en');
const product_version = document.querySelector('#product_version');
const product_country = document.querySelector('#product_country');
const project_status = document.querySelector('#project_status');
const big_type = document.querySelector('#big_type');
const small_type = document.querySelector('#small_type');
const product_summary = document.querySelector("#product_summary");
const btn = document.querySelector("#btn_test");

ko_busi.addEventListener('input', (e) => {
  localStorage.setItem("ko_busi", e.target.value);
});
en_busi.addEventListener('input', (e) => {
  localStorage.setItem("en_busi", e.target.value);
});
busi_number.addEventListener('input', (e) => {
  localStorage.setItem("busi_number", e.target.value);
});
busi_establish.addEventListener('input', (e) => {
  localStorage.setItem("busi_establish", e.target.value);
});
busi_represent.addEventListener('input', (e) => {
  localStorage.setItem("busi_represent", e.target.value);
});
busi_homepage.addEventListener('input', (e) => {
  localStorage.setItem("busi_homepage", e.target.value);
});
busi_email.addEventListener('input', (e) => {
  localStorage.setItem("busi_email", e.target.value);
});
busi_pnum.addEventListener('input', (e) => {
  localStorage.setItem("busi_pnum", e.target.value);
});
busi_fax.addEventListener('input', (e) => {
  localStorage.setItem("busi_fax", e.target.value);
});
busi_address.addEventListener('input', (e) => {
  localStorage.setItem("busi_address", e.target.value);
});
charge_name.addEventListener('input', (e) => {
  localStorage.setItem("charge_name", e.target.value);
});
charge_email.addEventListener('input', (e) => {
  localStorage.setItem("charge_email", e.target.value);
});
charge_num.addEventListener('input', (e) => {
  localStorage.setItem("charge_num", e.target.value);
});
charge_posi.addEventListener('input', (e) => {
  localStorage.setItem("charge_posi", e.target.value);
});
ko_product.addEventListener('input', (e) => {
  localStorage.setItem("ko_product", e.target.value);
});
en_product.addEventListener('input', (e) => {
  localStorage.setItem("en_product", e.target.value);
});
product_version.addEventListener('input', (e) => {
  localStorage.setItem("product_version", e.target.value);
});
product_country.addEventListener('input', (e) => {
  localStorage.setItem("product_country", e.target.value);
});
project_status.addEventListener('input', (e) => {
  localStorage.setItem("project_status", e.target.value);
});
big_type.addEventListener('input', (e) => {
  localStorage.setItem("big_type", e.target.value);
});
small_type.addEventListener('input', (e) => {
  localStorage.setItem("small_type", e.target.value);
});
product_summary.addEventListener('input', (e) => {
  localStorage.setItem("product_summary", e.target.value);
});
