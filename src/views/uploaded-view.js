import { toGifSimple } from './gif-views.js';

/**
 * Generates an HTML view for displaying uploaded GIFs.
 *
 * @param {Array} gifs - An array of uploaded GIFs to display.
 * @returns {string} - The HTML content representing the uploaded GIFs view.
 */
export const toUploadedView = (gifs) => `
<div id="uploaded">
<h1>Your uploaded Gifs:</h1>
<div id="gif-grid">
  ${
  gifs.map(toGifSimple).join('\n') ||
    '<p>Upload some gifs to see them here</p>'
}
</div>
</div>
`;
