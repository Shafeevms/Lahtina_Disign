import { openModal } from '../modal.js';

const portfolioContainer = document.querySelector('.portfolio');

portfolioContainer.addEventListener('click', (e) => {
  if (e.target.hasAttribute('data-collection')) {
    const collection = e.target.dataset.collection;
    const title = e.target.textContent;

    openModal(collection, title);
  }
});
