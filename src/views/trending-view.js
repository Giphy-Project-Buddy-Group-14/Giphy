/**
 * Generates an HTML view for displaying a list of trending GIFs.
 *
 * @param {Array} gifS - An array of GIFs to display in the trending view.
 * @returns {string} - The HTML content representing the trending GIFs view.
 */
export const toTrendingView = (gifS) => {
  const gifSHTML = gifS
    .map((gif) => {
      return `<div class="gif-item" data-gifId="${gif.id}">
    <img src="${gif.images.fixed_height.url}" data-gifId="${gif.id}" />
    <div class="gif-info" data-gifId="${gif.id}">${
        (gif.user && gif.user.description) || '-'
      }</div>
  </div>`;
    })
    .join('\n');

  return `
  <div id="gif-grid">
    ${gifSHTML}
  </div>`;
};
