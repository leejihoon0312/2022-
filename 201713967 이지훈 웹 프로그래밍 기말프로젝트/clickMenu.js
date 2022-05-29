
//DOM 사용
let toggleBtn = document.querySelector('.nav_toggle-btn');
let menu = document.querySelector('.nav_menu');
let navigation = document.querySelector('.navigation');
let icons = document.querySelector('.nav_buttons');
let logo = document.querySelector('.nav_logo');
let software = document.querySelector('.software');


toggleBtn.addEventListener('click', () => {
  menu.classList.toggle('active');
  navigation.classList.toggle('active');
  icons.classList.toggle('active');
  logo.classList.toggle('active');
  software.classList.toggle('active');
});



