const ko_busi = localStorage.getItem("ko_busi");
const en_busi = localStorage.getItem('en_busi');
const busi_number = localStorage.getItem('busi_number');
const busi_establish = localStorage.getItem('busi_establish');
const busi_represent = localStorage.getItem('busi_represent');
const busi_homepage = localStorage.getItem('busi_homepage');
const busi_email = localStorage.getItem('busi_email');
const busi_pnum = localStorage.getItem('busi_pnum');
const busi_fax = localStorage.getItem('busi_fax');
const busi_address = localStorage.getItem('busi_address');
const charge_name = localStorage.getItem('charge_name');
const charge_num = localStorage.getItem('charge_num');
const charge_email = localStorage.getItem('charge_email');
const charge_posi = localStorage.getItem('charge_posi');
const ko_product = localStorage.getItem('ko_product');
const en_product = localStorage.getItem('en_product');
const product_version = localStorage.getItem('product_version');
const product_country = localStorage.getItem('product_country');
const project_status = localStorage.getItem('project_status');
const big_type = localStorage.getItem('big_type');
const small_type = localStorage.getItem('small_type');
const product_smmary = localStorage.getItem("product_summary");

console.log("ko_busi: " + ko_busi)
console.log("en_busi: " + en_busi)
console.log("busi_number: " + busi_number)
console.log("busi_establish: " + busi_establish)
console.log("busi_represent: " + busi_represent)
console.log("busi_homepage: " + busi_homepage)
console.log("busi_email: " + busi_email)
console.log("busi_pnum: " + busi_pnum)
console.log("busi_fax: " + busi_fax)
console.log("busi_address: " + busi_address)
console.log("charge_name: " + charge_name)
console.log("charge_num: " + charge_num)
console.log("charge_email: " + charge_email)
console.log("charge_posi: " + charge_posi)
console.log("ko_product: " + ko_product)
console.log("en_product: " + en_product)
console.log("product_version: " + product_version)
console.log("product_country: " + product_country)
console.log("project_status: " + project_status)
console.log("big_type: " + big_type)
console.log("small_type: " + small_type)
console.log("product_smmary: " + product_smmary)

function aaa()   {
  document.querySelectorAll('.busi_name')[0].innerText = ko_busi;
  document.querySelectorAll('.busi_name')[1].innerText = ko_busi;
  document.querySelectorAll('.busi_address')[0].innerText = busi_address;
  document.querySelectorAll('.busi_address')[1].innerText = busi_address;
  document.querySelectorAll('.product_name')[0].innerText = ko_product;
  document.querySelectorAll('.product_name')[1].innerText = ko_product;
  document.querySelector('.product_country').innerText = product_country;
  document.querySelector('.product_summary').innerText = product_smmary;
  document.querySelector('.busi_represent').innerText = busi_represent;
  document.querySelector('.busi_establish').innerText = busi_establish;
  document.querySelector('.busi_number').innerText = busi_number;
  document.querySelector('.busi_pnum').innerText = busi_pnum;
  document.querySelector('.busi_fax').innerText = busi_fax;
  document.querySelector('.charge_email').innerText = charge_email;
  document.querySelector('.busi_home').innerText = busi_homepage;

  document.querySelectorAll('.product_version')[0].innerText = product_version;
  document.querySelectorAll('.product_version')[1].innerText = product_version;
  document.querySelector('.product_status').innerText = project_status;
  document.querySelector('.big_type').innerText = big_type;
  document.querySelector('.small_type').innerText = small_type;
}
  
const isYes = localStorage.getItem('isYes');
const isNo = localStorage.getItem('isNo');
const iso_1 = localStorage.getItem('iso_1');
const iso_2 = localStorage.getItem('iso_2');
const iso_3 = localStorage.getItem('iso_3');
const iso_4 = localStorage.getItem('iso_4');
const irb = localStorage.getItem('irb');
const rule = localStorage.getItem('rule');
const kgcp = localStorage.getItem('kgcp');
const data_guide = localStorage.getItem('data_guide');

function bar(){
  const ctx = document.getElementById('bChart');
  const bChart = new Chart(ctx, {
    type: 'bar',
    data: {
      labels: ['Yes', 'No'], //x축값
      datasets: [{
        label: '애앵', //그래프 이름
        data: [Number(isYes), Number(isNo)], //막대값
        backgroundColor: [ //도형 색상
          'rgba(0, 76, 152, 0.2)',
          'rgba(207, 207, 207, 0.5)'
        ],
        borderColor: [ //도형 테두리 색상
          'rgba(207, 207, 207, 1)',
          'rgba(0, 76, 152, 1)'
        ],
        borderWidth: 1 //테두리 굵기
      }] 
    },
    options: {
      legend: {
        display: false
      },
      title: {
        display: true,
        text: ('전체 응답 수'),
        fontSize: 20
      },
      responsive: true, // 크기를 원하는대로 줄 수 있는 설정
      scales: {
        yAxes: [{
          ticks: {
            min: 0,
            max: 100
          }
        }]
      }
    }
  });
}

function bar1(){
  const ctx = document.getElementById('myChart');
  const myChart = new Chart(ctx, {
    type: 'bar',
    data: {
      labels: ['iso_1', 'iso_2', 'iso_3', 'iso_4', 'irb', 'rule', 'kgcp', 'data_guide'], //x축값
      datasets: [{
        // label: '문항별', //그래프 이름
        data: [Number(iso_1), Number(iso_2), Number(iso_3), Number(iso_4), Number(irb), Number(rule), Number(kgcp), Number(data_guide)], //막대값
        backgroundColor: [ //도형 색상
          'rgba(158, 6, 190, 0.5)',
          'rgba(36, 184, 183, 0.5)',
          'rgba(153, 92, 18, 0.5)',
          'rgba(57, 229, 255, 0.5)',
          'rgba(16, 230, 6, 0.5)',
          'rgba(131, 25, 155, 0.5)',
          'rgba(68, 26, 171, 0.5)',
          'rgba(92, 32, 223, 0.5)'
        ],
        borderColor: [ //도형 테두리 색상
          'rgba(128, 120, 252, 0.5)',
          'rgba(241, 132, 34, 0.5)',
          'rgba(85, 21, 22, 0.5)',
          'rgba(94, 32, 84, 0.5)',
          'rgba(203, 246, 78, 0.5)',
          'rgba(217, 52, 102, 0.5)',
          'rgba(179, 138, 72, 0.5)',
          'rgba(103, 254, 31, 0.5)'
        ],
        borderWidth: 1 //테두리 굵기
      }] 
    },
    options: {
      legend: {
        display: false
      },
      title: {
        display: true,
        text: ('문항별 응답 수'),
        fontSize: 20
      },
      responsive: true, // 크기를 원하는대로 줄 수 있는 설정
      scales: {
        yAxes: [{
          ticks: {
            min: 0,
            max: 30
          }
        }]
      }
    }
  });
}