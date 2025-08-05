// Menu Mobile - Toggle
const menuToggle = document.querySelector('.menu-toggle');
const menu = document.querySelector('.menu');

menuToggle.addEventListener('click', () => {
  menuToggle.classList.toggle('active');
  menu.classList.toggle('open');
});

// Scroll Suave para os Links do Menu
const menuLinks = document.querySelectorAll('.menu a');

menuLinks.forEach(link => {
  link.addEventListener('click', (e) => {
    e.preventDefault(); // Evita o pulo brusco

    // Fecha o menu após clicar (opcional)
    menu.classList.remove('open');
    menuToggle.classList.remove('active');

    // Rola até a seção correta
    const targetId = link.getAttribute('href');
    const targetSection = document.querySelector(targetId);
    
    if (targetSection) {
      targetSection.scrollIntoView({
        behavior: 'smooth', // Animação suave
        block: 'start'     // Alinha no topo da seção
      });
    }
  });
});