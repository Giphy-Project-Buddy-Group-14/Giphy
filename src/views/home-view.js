import {
  toGifSimple
} from './gif-views.js';

/**
 * Generates an HTML view for displaying a list of trending GIFs.
 *
 * @param {Array} gifs - An array of GIFs to display in the trending view.
 * @returns {string} - The HTML content representing the trending GIFs view.
 */
export const toHomeView = (gifs) => `
<div id="gif-grid">
${gifs.map(toGifSimple).join('\n')}
</div>
<br>
<div id="gif-grid">
  <!-- <button id="load-more-button-prev">prev</button> -->
  <button id="load-more-button-next">Load more</button>
</div>
 
  `;
