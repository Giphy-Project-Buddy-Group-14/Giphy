import { toGifSimple } from './gif-views.js';

/**
 * Generates a view for displaying a random GIF when no matching GIFs are found.
 *
 * @param {Array} gifs - An array of GIFs to display.
 * @returns {string} - A string representing the HTML content of the random GIF view.
 */
export const toRandomGifView = (gifs) => `
<div id="random">
<h3>No gif found but we picked this random gif for you:</h3>
<div id="gif-grid">
  ${gifs.map(toGifSimple).join('\n') ||
    '<p>Upload some gifs to see them here</p>'
}
</div>
</div>
`;
