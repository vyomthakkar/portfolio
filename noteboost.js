const nav = document.querySelector('#navigation');

function showNav(){
    nav.classList.add('show');
}

function hidewNav(){
    nav.classList.remove('show');
}
var target = 100;
document.addEventListener('scroll', () => {
  if (window.scrollY > target) {
    showNav();
  } else {
      hidewNav();
  }
  // currPos = window.scrollY;
});