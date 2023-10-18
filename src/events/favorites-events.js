import {
  addFavorite,
  removeFavorite,
  getFavorites,
} from '../data/favorites.js';
import { q } from '../events/helpers.js';
import { EMPTY_HEART, FULL_HEART } from '../common/constants.js';

/**
 * Toggle the favorite status of a GIF.
 *
 * @param {string} gifId - The ID of the GIF.
 * @param {string} gifUrl - The URL of the GIF.
 */

export const toggleFavoriteStatus = (gifId) => {
  const heartSpan = q(`span[data-gif-id="${gifId}"]`);
  if (heartSpan) {
    const favorites = getFavorites();
    if (favorites.includes(gifId)) {
      removeFavorite(gifId);
      if (heartSpan.classList) {
        heartSpan.classList.remove('active');
      }
      heartSpan.innerHTML = EMPTY_HEART;
    } else {
      addFavorite(gifId);
      if (heartSpan.classList) {
        heartSpan.classList.add('active');
      }
      heartSpan.innerHTML = FULL_HEART;
    }
  }
};

/**
 * Renders the favorite status of a GIF as an HTML element.
 *
 * @param {string} gifId - The ID of the GIF.
 * @returns {string} - The HTML string representing the favorite status.
 */
export const renderFavoriteStatus = (gifId) => {
  const favorites = getFavorites();

  return favorites.includes(gifId) ?
    `<span class="favorite active" data-gif-id="${gifId}">
    ${FULL_HEART}</span>` :
    `<span class="favorite" data-gif-id="${gifId}">${EMPTY_HEART}</span>`;
};
