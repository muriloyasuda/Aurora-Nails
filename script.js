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

// Toggle do menu mobile
const nav = document.querySelector('nav');
const navToggle = document.querySelector('.nav-toggle');
const navLinks = document.querySelectorAll('nav a');

navToggle.addEventListener('click', () => {
  nav.classList.toggle('active');
});

// Fecha o menu quando clica em algum link
navLinks.forEach(link => {
  link.addEventListener('click', () => {
    // Só fecha se estiver ativo
    if (nav.classList.contains('active')) {
      nav.classList.remove('active');
    }
  });
});
// Navegação entre seções
const paginas = document.querySelectorAll('.pagina');

document.querySelectorAll('.nav-link').forEach(link => {
  link.addEventListener('click', () => {
    paginas.forEach(p => p.classList.remove('ativa'));
    document.getElementById(link.dataset.target).classList.add('ativa');

    // Fecha menu mobile ao clicar em link
    document.querySelector('nav').classList.remove('active');
  });
});

// Voltar para home
function voltarHome() {
  paginas.forEach(p => p.classList.remove('ativa'));
  document.getElementById('home').classList.add('ativa');

  // Fecha menu mobile ao clicar em home
  document.querySelector('nav').classList.remove('active');
}
