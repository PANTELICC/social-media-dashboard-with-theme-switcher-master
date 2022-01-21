const toggle = document.querySelector('#toggle');
const ime = document.querySelector('.header .two h4');
function clickHandler() {
  if (this.checked) {
    document.body.classList.remove("light");
    document.body.classList.add("dark");
    ime.innerHTML = 'Dark theme';
  } else {
    document.body.classList.remove("dark");
    document.body.classList.add("light");
    ime.innerHTML = 'Light theme';

  }
}
toggle.addEventListener('click', clickHandler);