const buttons = document.querySelectorAll('.accordion__header');

Array.from(buttons).forEach(btn => {
  btn.addEventListener('click', (e) => {
    e.preventDefault();
    const content = e.target.nextElementSibling;
    content.classList.toggle('close');
  })
})
