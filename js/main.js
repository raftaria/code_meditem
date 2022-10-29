// Wrap every letter in a span
var textWrapper1 = document.querySelector('.text_1');
var textWrapper2 = document.querySelector('.text_2');
var textWrapper3 = document.querySelector('.text_3');
var textWrapper4 = document.querySelector('.text_4');

textWrapper1.innerHTML = textWrapper1.textContent.replace(/\S/g, "<span class='letter'>$&</span>");
textWrapper2.innerHTML = textWrapper2.textContent.replace(/\S/g, "<span class='letter'>$&</span>");
textWrapper3.innerHTML = textWrapper3.textContent.replace(/\S/g, "<span class='letter'>$&</span>");
textWrapper4.innerHTML = textWrapper4.textContent.replace(/\S/g, "<span class='letter'>$&</span>");

anime.timeline({loop: false})
  .add({
    targets: '.text_1 .letter',
    opacity: [0, 1],
    easing: "easeInOutQuad",
    duration: 100,   // 나중에 수정 할까 생각 중
    delay: (el, i) => 150 * (i+1)
  }).add({
    targets: '.text_2 .letter',
    opacity: [0, 1],
    easing: "easeInOutQuad",
    duration: 100,   // 나중에 수정 할까 생각 중
    delay: (el, i) => 150 * (i+1)
  }).add({
    targets: '.text_3 .letter',
    opacity: [0, 1],
    easing: "easeInOutQuad",
    duration: 100,   // 나중에 수정 할까 생각 중
    delay: (el, i) => 150 * (i+1)
  }).add({
    targets: '.text_4 .letter',
    opacity: [0, 1],
    easing: "easeInOutQuad",
    duration: 100,   // 나중에 수정 할까 생각 중
    delay: (el, i) => 150 * (i+1)
  }).add({
      targets: '.text_1 .text_2 .text_3 .text_4',
      opacity: 0,
      duration: 1000,
      easing: "easeOutExpo",
      delay: 1000
  });