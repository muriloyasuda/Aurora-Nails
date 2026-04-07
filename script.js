// ===== DATAS OCUPADAS (BACKEND) =====
fetch('/ocupados')
  .then(res => res.json())
  .then(agendamentos => {
    const datasOcupadas = agendamentos.map(a => a.data);

    flatpickr("#data", {
      dateFormat: "Y-m-d",
      disable: datasOcupadas,
      minDate: "today"
    });
  });

// ===== FORMULÁRIO =====
document.getElementById('agendamento').addEventListener('submit', function(e){
  e.preventDefault();

  const nome = encodeURIComponent(document.getElementById('nome').value);
  const servico = encodeURIComponent(document.getElementById('servico').value);
  const data = encodeURIComponent(document.getElementById('data').value);
  const hora = encodeURIComponent(document.getElementById('hora').value);

  // WhatsApp
  const mensagem = `Olá! Vim pelo site e gostaria de agendar: ${servico} %0ANome: ${nome}%0AData: ${data}%0AHora: ${hora}`;
  window.open(`https://wa.me/5542999117242?text=${mensagem}`, '_blank');

  // Backend
  fetch('/agendar', {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify({ nome, servico, data, hora })
  });
});

// ===== ESTRELAS =====
const starsContainer = document.getElementById("stars");

for (let i = 0; i < 50; i++) {
  let star = document.createElement("span");
  star.style.top = Math.random() * 100 + "%";
  star.style.left = Math.random() * 100 + "%";
  star.style.animationDuration = (Math.random() * 2 + 1) + "s";
  starsContainer.appendChild(star);
}

const nav = document.querySelector('nav');
const navToggle = document.querySelector('.nav-toggle');
const links = document.querySelectorAll('nav a');

function toggleNav() {
  nav.classList.toggle('active');
  navToggle.classList.toggle('active'); // transforma em X
}

// Fecha menu ao clicar em qualquer link
links.forEach(link => {
  link.addEventListener('click', () => {
    nav.classList.remove('active');
    navToggle.classList.remove('active');
  });
});
// Navegação entre seções
const nav = document.querySelector('nav');
const navToggle = document.querySelector('.nav-toggle');
const navLinks = document.querySelectorAll('nav a');

// Toggle menu
navToggle.addEventListener('click', () => {
  nav.classList.toggle('active');
});

// Fecha menu ao clicar em um link
navLinks.forEach(link => {
  link.addEventListener('click', () => {
    nav.classList.remove('active');
  });
});
