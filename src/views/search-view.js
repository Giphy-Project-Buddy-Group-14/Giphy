import { toGifSimple } from './gif-views.js';

/**
 * Generates a search view with GIFs and a search term.
 *
 * @param {Array} gifs - An array of GIF objects.
 * @param {string} searchTerm - The search term used to find the GIFs.
 * @returns {string} - The HTML representation of the search view.
 */

export const toSearchView = (gifs, searchTerm) => {
  return `
    <div id="search-view">
      <h1>GIFs found for "${searchTerm}"</h1>
      <div id="gif-grid">
        ${
  gifs.map(toGifSimple).join('\n') ||
          '<p>Add some GIFs to favorites</p>'
}
      </div>
    </div>
  `;
};
