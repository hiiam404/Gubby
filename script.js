// Mostrar grade de executores
const executoresBtn = document.getElementById('executores-btn');
const executoresScreen = document.getElementById('executores-screen');
const homeScreen = document.getElementById('home-screen');
const voltarExecutores = document.getElementById('voltar-executores');

executoresBtn.addEventListener('click', function() {
  executoresBtn.classList.add('active');
  setTimeout(() => {
    executoresBtn.classList.remove('active');
    homeScreen.style.display = 'none';
    executoresScreen.style.display = 'block';
  }, 180);
});

voltarExecutores.addEventListener('click', function() {
  voltarExecutores.classList.add('active');
  setTimeout(() => {
    voltarExecutores.classList.remove('active');
    executoresScreen.style.display = 'none';
    homeScreen.style.display = 'block';
  }, 180);
});
