// Animação suave de entrada para as imagens da galeria
document.addEventListener('DOMContentLoaded', function() {
  const images = document.querySelectorAll('.gallery-item');
  images.forEach((img, index) => {
    img.style.opacity = '0';
    img.style.transform = 'translateY(20px)';
    setTimeout(() => {
      img.style.transition = 'opacity 0.5s ease, transform 0.5s ease';
      img.style.opacity = '1';
      img.style.transform = 'translateY(0)';
    }, index * 100);
  });
});

// Efeito de hover nos botões de redes sociais
const socialButtons = document.querySelectorAll('.social-button');
socialButtons.forEach(button => {
  button.addEventListener('mouseover', () => {
    button.style.transform = 'translateY(-5px) scale(1.05)';
  });
  button.addEventListener('mouseout', () => {
    button.style.transform = 'translateY(0) scale(1)';
  });
});

// Adicionar efeito de destaque às dicas de cuidados
const careTips = document.querySelectorAll('.care-tips li');
careTips.forEach(tip => {
  tip.addEventListener('mouseover', () => {
    tip.style.color = '#ff69b4';
    tip.style.fontWeight = 'bold';
  });
  tip.addEventListener('mouseout', () => {
    tip.style.color = '';
    tip.style.fontWeight = '';
  });
});

// Efeito de brilho nas imagens
function createSparkle(event) {
  const sparkle = document.createElement('div');
  sparkle.className = 'sparkle';
  const x = event.offsetX;
  const y = event.offsetY;
  sparkle.style.left = `${x}px`;
  sparkle.style.top = `${y}px`;
  sparkle.style.animation = `sparkle 0.5s linear`;
  event.target.appendChild(sparkle);
  setTimeout(() => {
    sparkle.remove();
  }, 500);
}

const galleryItems = document.querySelectorAll('.gallery-item');
galleryItems.forEach(item => {
  item.addEventListener('mousemove', createSparkle);
});

// Adicionar funcionalidade ao botão "Agende seu horário"
document.getElementById('scheduleButton').addEventListener('click', function(e) {
  e.preventDefault();
  alert('Obrigado pelo seu interesse! Por favor, entre em contato conosco via WhatsApp para agendar seu horário.');
  window.open('https://wa.me/82999749395', '_blank');
});