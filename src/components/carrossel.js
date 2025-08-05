document.addEventListener("DOMContentLoaded", function () {
  function iniciarSlider({ containerClass, itemClass, sempreCarrossel = false }) {
    const container = document.querySelector(containerClass);
    const items = container?.querySelectorAll(itemClass);
    const dotsContainer = container?.querySelector(".dots-slider");

    if (!container || !items || items.length <= 1) return;

    let index = 0;
    let intervalId;

    const isMobile = () => window.innerWidth <= 767;

    function criarDots() {
      if (!dotsContainer) return;
      dotsContainer.innerHTML = "";
      items.forEach((_, i) => {
        const dot = document.createElement("span");
        dot.classList.add("dot");
        if (i === 0) dot.classList.add("active");
        dotsContainer.appendChild(dot);
      });
    }

    function mostrarSlide(i) {
      items.forEach((el, idx) => {
        el.style.display = idx === i ? "flex" : "none";
      });

      if (dotsContainer) {
        const dots = dotsContainer.querySelectorAll(".dot");
        dots.forEach((dot, idx) => {
          dot.classList.toggle("active", idx === i);
        });
      }
    }

    function iniciarCarrossel() {
  const deveAtivar = sempreCarrossel || isMobile();

  if (!deveAtivar) {
    // Mantém o layout flex original | Isto que tava bugando o carrossel
    items.forEach((el) => {
      el.style.display = "flex"; // Mantém o flexbox 
    });
    if (dotsContainer) dotsContainer.style.display = "none";
    return;
  }

      criarDots();
      mostrarSlide(index);
      if (dotsContainer) dotsContainer.style.display = "flex";

      clearInterval(intervalId);
      intervalId = setInterval(() => {
        index = (index + 1) % items.length;
        mostrarSlide(index);
      }, 10000);
    }

    iniciarCarrossel();
    window.addEventListener("resize", iniciarCarrossel);
  }

  // Comentários SEMPRE carrossel
  iniciarSlider({
    containerClass: ".gr-comentarios-slider",
    itemClass: ".slider-comentario",
    sempreCarrossel: true
  });

  // Serviços - mobile
  iniciarSlider({
    containerClass: ".gr-servicos",
    itemClass: ".servico",
    sempreCarrossel: false
  });

  // Vitine - SEMPRE carrossel
  iniciarSlider({
    containerClass: ".gr-vitrine",
    itemClass: ".vitrine-item",
    sempreCarrossel: true
  })
});
