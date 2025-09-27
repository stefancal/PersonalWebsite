const toggleBtn = document.getElementById('theme-toggle');

// Disabilito le transizioni durante il caricamento
document.documentElement.classList.add('no-transition');

// imposto subito il tema corretto leggendo da localStorage
let theme = localStorage.getItem("theme");

// se non c’è, uso "light" come default
if (!theme) {
  theme = 'light';
  localStorage.setItem('theme', 'light');
}

document.body.classList.add(theme + "-mode");

// appena la pagina è pronta, riattivo le transizioni
window.addEventListener('load', () => {
  document.documentElement.classList.remove('no-transition');
});

// toggle al click
toggleBtn.addEventListener('click', () => {
  if (document.body.classList.contains('light-mode')) {
    document.body.classList.replace('light-mode', 'dark-mode');
    localStorage.setItem('theme', 'dark');
  } else {
    document.body.classList.replace('dark-mode', 'light-mode');
    localStorage.setItem('theme', 'light');
  }
});
