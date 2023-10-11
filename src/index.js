import { HOME } from './common/constants.js';
import { q } from './events/helpers.js';
import { loadPage } from './events/navigation-events.js';
import { renderSearchItems } from './events/search-events.js';

document.addEventListener('DOMContentLoaded', () => {
  // add global listener
  document.addEventListener('click', (event) => {
    
  });

  // search events
  q('input#search').addEventListener('input', (e) => {
    renderSearchItems(e.target.value);
  });

  loadPage(HOME);
});
