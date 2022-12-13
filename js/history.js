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
const testDate = localStorage.getItem('testDate');

console.log("ko_busi: " + ko_busi);
console.log("en_busi: " + en_busi);
console.log("busi_number: " + busi_number);
console.log("busi_establish: " + busi_establish);
console.log("busi_represent: " + busi_represent);
console.log("busi_homepage: " + busi_homepage);
console.log("busi_email: " + busi_email);
console.log("busi_pnum: " + busi_pnum);
console.log("busi_fax: " + busi_fax);
console.log("busi_address: " + busi_address);
console.log("charge_name: " + charge_name);
console.log("charge_num: " + charge_num);
console.log("charge_email: " + charge_email);
console.log("charge_posi: " + charge_posi);
console.log("ko_product: " + ko_product);
console.log("en_product: " + en_product);
console.log("product_version: " + product_version);
console.log("product_country: " + product_country);
console.log("project_status: " + project_status);
console.log("big_type: " + big_type);
console.log("small_type: " + small_type);
console.log("product_smmary: " + product_smmary);
console.log("test_date: " + testDate);

function searchData() {
  const sch_txt = document.querySelector(".sch_txt");
  const busi_name1 = document.querySelector('.busi_name2');
  const represntative = document.querySelector('.representative');
  const testDate1 = document.querySelector('.testDate');

  if(sch_txt.value === "메디템") {
    busi_name1.innerText = ko_busi;
    represntative.innerText = busi_represent;
    testDate1.innerText = testDate;
  }
}