
document.querySelector('form').addEventListener('submit', (e) => {
    e.preventDefault();
    alert('Mensagem enviada com sucesso!');
  });
  
document.querySelectorAll('header nav ul li a').forEach(link => {
    link.addEventListener('click', event => {
      event.preventDefault();
      const target = document.querySelector(link.getAttribute('href'));
      target.scrollIntoView({ behavior: 'smooth', block: 'start' });
    });
  });
  
  const observer = new IntersectionObserver(entries => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.classList.add('visible');
      }
    });
  });
  
  document.querySelectorAll('section').forEach(section => {
    section.classList.add('hidden');
    observer.observe(section);
  });
  
  const form = document.querySelector('form');
  form.addEventListener('submit', event => {
    event.preventDefault(); 
    alert('Obrigado por entrar em contato! Retornarei o mais breve possível.');
    form.reset(); 
  });
  
const foto = document.querySelector('.foto');

const fotoObserver = new IntersectionObserver(entries => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            foto.classList.add('visible');
        }
    });
});

fotoObserver.observe(foto);

document.addEventListener('DOMContentLoaded', () => {
  const smoothScrollLinks = document.querySelectorAll('a[href^="#"]');

  smoothScrollLinks.forEach(link => {
      link.addEventListener('click', (event) => {
          event.preventDefault();
          const target = document.querySelector(link.getAttribute('href'));
          window.scrollTo({
              top: target.offsetTop - 50,
              behavior: 'smooth'
          });
      });
  });
});
