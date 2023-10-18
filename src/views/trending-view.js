import {
  toGifSimple
} from './gif-views.js';

/**
 * Generates an HTML view for displaying a list of trending GIFs.
 *
 * @param {Array} gifs - An array of GIFs to display in the trending view.
 * @returns {string} - The HTML content representing the trending GIFs view.
 */
export const toTrendingView = (gifs) => `
<div id="gif-grid">
${gifs.map(toGifSimple).join('\n')}
</div>
  `;
