const menuBtn = document.getElementById('menuBtn');
const backdrop = document.querySelector('.backdrop');
const backdropDiv = document.getElementById('backdropDiv');
const modal = document.getElementById('menu');

menuBtn.addEventListener('click', (e) => {
  menuBtn.classList.toggle('open');
  setTimeout(() => {
    modal.classList.toggle('flex');
    modal.classList.toggle('hidden');
  }, 200);

  if (menuBtn.classList.contains('open')) {
    backdropDiv.style.display = 'block';
    backdrop.style.opacity = '1';
  } else {
    setTimeout(() => {
      backdrop.style.opacity = '0';
    }, 300);
    setTimeout(() => {
      backdropDiv.style.display = 'none';
    }, 500);
  }
});
