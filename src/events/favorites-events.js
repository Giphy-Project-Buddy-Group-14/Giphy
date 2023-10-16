
import { addFavorite, removeFavorite, getFavorites } from '../data/favorites.js';
import { q } from '../events/helpers.js'
import { EMPTY_HEART, FULL_HEART } from '../common/constants.js'

export const toggleFavoriteStatus = (gifId, gifUrl) => {
  const heartSpan = q(`span[data-gif-id="${gifId}"]`);
  if (heartSpan) { 
    const favorites = getFavorites();
    if (favorites.includes(gifId)) {
      removeFavorite(gifId);
      if (heartSpan.classList) {
        heartSpan.classList.remove('active');
      }
      heartSpan.innerHTML = EMPTY_HEART;
      const activeMenu = q('a.nav-link.active').textContent 
      if(activeMenu === 'Favorites'){
        heartSpan.closest('.gif').remove()
      }
    } else {
      addFavorite(gifId, gifUrl);
      if (heartSpan.classList) {
        heartSpan.classList.add('active');
      }
      heartSpan.innerHTML = FULL_HEART;
    }
  }
};

export const renderFavoriteStatus = (gifId) => {
  const favorites = getFavorites();

  return favorites.includes(gifId)
    ? `<span class="favorite active" data-gif-id="${gifId}">${FULL_HEART}</span>`
    : `<span class="favorite" data-gif-id="${gifId}">${EMPTY_HEART}</span>`;
};
