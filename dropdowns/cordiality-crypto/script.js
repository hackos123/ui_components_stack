let dropdown = document.querySelector('.dropdown');
let button = document.querySelector('.dropdown-btn');
let menu = document.querySelector('.dropdown-content');

button.addEventListener('click', () => {
  let expanded = button.getAttribute('aria-expanded') === 'true' || false;
  if (expanded) {
    menu.classList.add('close');
    menu.classList.remove('open');
  } else {
    menu.classList.add('open');
    menu.classList.remove('close');
  }
  button.setAttribute('aria-expanded', !expanded);
});

document.addEventListener('click', (e) => {
  if (!dropdown.contains(e.target)) {
    menu.classList.remove('open');
    menu.classList.add('close');
    button.setAttribute('aria-expanded', false);
  }
});
