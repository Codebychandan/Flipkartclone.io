const rightBtn = document.querySelector('#right-button');
const rightBtn2 = document.querySelector('#right-button2');
const rightBtn3 = document.querySelector('#right-button3');
// alert(rightBtn2)
const leftBtn = document.querySelector('#left-button');
const leftBtn2 = document.querySelector('#left-button2');
const leftBtn3 = document.querySelector('#left-button3');

rightBtn.onclick= function(event) {
  const conent = document.querySelector('#content');
  conent.scrollLeft += 300;
  event.preventDefault();
};

rightBtn2.onclick= function(event) {
  const conent = document.querySelector('#content2');
  conent.scrollLeft += 600;
  event.preventDefault();
};

rightBtn3.onclick= function(event) {
  const conent = document.querySelector('#content3');
  conent.scrollLeft += 600;
  event.preventDefault();
};

leftBtn.onclick=  function(event) {
  const conent = document.querySelector('#content');
  conent.scrollLeft -= 300;
  event.preventDefault();
};
leftBtn2.onclick=  function(event) {
  const conent = document.querySelector('#content2');
  conent.scrollLeft -= 500;
  event.preventDefault();
};
leftBtn3.onclick=  function(event) {
  const conent = document.querySelector('#content3');
  conent.scrollLeft -= 500;
  event.preventDefault();
};