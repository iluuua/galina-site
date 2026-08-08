// Мобильное меню
const burger = document.getElementById('burger');
const nav = document.getElementById('nav');
burger.addEventListener('click', () => {
  const open = nav.classList.toggle('open');
  burger.setAttribute('aria-expanded', open);
});
nav.addEventListener('click', e => {
  if (e.target.tagName === 'A') {
    nav.classList.remove('open');
    burger.setAttribute('aria-expanded', 'false');
  }
});

// Просмотр фото
document.querySelector('.gal').addEventListener('click', e => {
  const img = e.target.closest('img');
  if (!img) return;
  const lb = document.createElement('div');
  lb.className = 'lb';
  lb.innerHTML = `<img src="${img.src}" alt="${img.alt}">`;
  lb.addEventListener('click', () => lb.remove());
  document.body.appendChild(lb);
});
document.addEventListener('keydown', e => {
  if (e.key === 'Escape') document.querySelector('.lb')?.remove();
});
