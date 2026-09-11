'use strict';
const form = document.querySelector('.filters');
const kind = document.querySelector('#kind');
const region = document.querySelector('#region');
const cards = [...document.querySelectorAll('.card')];
const count = document.querySelector('#count');
const empty = document.querySelector('#empty');

function filterGallery() {
  let visible = 0;
  for (const card of cards) {
    card.hidden = (kind.value !== 'all' && card.dataset.kind !== kind.value)
      || (region.value !== 'all' && card.dataset.region !== region.value);
    if (!card.hidden) visible += 1;
  }
  count.textContent = `${visible} of ${cards.length} views`;
  empty.hidden = visible !== 0;
}

form.addEventListener('submit', event => event.preventDefault());
kind.addEventListener('change', filterGallery);
region.addEventListener('change', filterGallery);
document.querySelector('#reset').addEventListener('click', () => {
  kind.value = 'all';
  region.value = 'all';
  filterGallery();
});
form.hidden = false;
filterGallery();
