const buttons = document.querySelectorAll('.accordion__header');

Array.from(buttons).forEach(btn => {
  btn.addEventListener('click', (e) => {
    const parent = e.target.closest('.accordion__item');
    const content = parent.querySelector('.accordion__body');
    content.classList.toggle('close');
  })
});
