document.addEventListener('DOMContentLoaded', function() {
  // Seções FAQ
  const sections = document.querySelectorAll('.faq-section');
  
  sections.forEach(section => {
    const header = section.querySelector('.section-header');
    
    header.addEventListener('click', () => {
      section.classList.toggle('active');
    });
  });
  
  // Perguntas individuais
  const questions = document.querySelectorAll('.faq-question');
  
  questions.forEach(question => {
    question.addEventListener('click', () => {
      const item = question.parentElement;
      item.classList.toggle('active');
    });
  });
});