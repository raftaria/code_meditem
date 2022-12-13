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
const bigtype = document.querySelector('#big_type');
const smalltype = document.querySelector('#small_type');
const product_summary = document.querySelector("#product_summary");

const btn = document.querySelector("#btn_test");
const var_input = document.querySelectorAll('input');
console.log(var_input.length);
const arr_id = [
  "회사명(한글)", "사업자 등록번호", "회사명(영문)",
  "설립일", "대표자", "홈페이지", "대표 이메일", "대표 전화번호", "FAX 번호",
  "주소", "당담자 성명", "담당자 전화번호", "담당자 이메일", "담당자 직급",
  "제품명(한글)", "제품 버전", "제품명(영문)", "제조사/제조국", "개요 및 특성"
];

const testing = [
  "메디템", "20615045", "MedITem", "2022.08.12", "오기영", "www.meditem.co.kr", "meditem@konyang.ac.kr", "010-0000-0000", "041-733-2070",
  "대전광역시 서구 관저동로 158, 죽헌정보관 801", "한상현", "010-0000-0000", "tiger00831@naver.com", "PL",
  "메디템", "v0.9.0", "MedITEM", "한국"
]
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
bigtype.addEventListener('input', (e) => {
  localStorage.setItem("big_type", e.target.value);
});
smalltype.addEventListener('input', (e) => {
  localStorage.setItem("small_type", e.target.value);
});
product_summary.addEventListener('input', (e) => {
  localStorage.setItem("product_summary", e.target.value);
});

function testing1() {
  for(var i = 0; i < var_input.length - 1; i++) {
    var_input[i].value = testing[i];
  }
  product_summary.innerText = "이 제품은 ISO 23247 표준을 토대로 제작한 핵심성과지표(KPI)를 토대로 메디컬 트윈 개발 과정에 있어 안전성을 검사하고 평한다. 개발 중인 메디컬 트윈 소프트웨어가 국제 표준에 적합하여 상용화가 가능한지 검사하고 보고서를 제작해주는 것을 본 목적으로 한다.";
  project_status.value = "개발 진행 중";
}
function checkBlank() {
  const big_value = ["개인맞춤의학", "의료조직개선", "의약품, 의료기기개발"]
  const test_url = ["testpersonal.html", "testimprove.html", "testdevelop.html"]
  
  for(var i = 0; i < var_input.length; i++) {
    if(var_input[i].value === "") {
      alert("\'" + arr_id[i] + "\'" + " 칸이 비어있습니다.");
      return;
    }
  }
  if(project_status.value === "") {
    alert("개발 상황을 선택하세요");
    return;
  }
  for(var i = 0; i < big_value.length; i++) {
    if(bigtype.value === "") {
      alert("대분류를 선택하세요.");
      return;
    }
    else if(bigtype.value === big_value[i]) {
      if(smalltype.value === "소분류를 선택하세요") {
        alert("소분류를 선택하세요");
        return;
      }
      else if(product_summary.value === "") {
        alert("\'" + arr_id[18] + "\'" + " 칸이 비어있습니다.");
        return;
      }
      else {
        window.location.href = test_url[i];
      }
    }
  }
}

let today = new Date();
let year = today.getFullYear();
let month = today.getMonth() + 1;
let date = today.getDate();
localStorage.setItem('testDate', year + '.' + month + '.' + date);
