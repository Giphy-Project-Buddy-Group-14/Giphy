import { renderFavoriteStatus } from '../events/favorites-events.js';

/**
 * Generates an HTML view for displaying a list of GIFs from a specific category.
 *
 * @param {object} category - The category for which to display GIFs.
 * @param {Array} gifs - An array of GIFs to display.
 * @returns {string} - The HTML content representing the category's GIFs view.
 */
export const toGifFromCategoryView = (category, gifs) => `
<div id="gifs">
  <h1>${category.name} gifs:</h1>
  <div class="content">
    ${gifs.map(toGifSimple).join('\n')}
  </div>
</div>
`;

/**
 * Generates an HTML view for displaying a single GIF.
 *
 * @param {object} gif - The GIF to display.
 * @returns {string} - The HTML content representing the single GIF view.
 */
export const toSingleGifView = (gif) => `
<div id="gifs">
  <h1>${gif.title}</h1>
  <div class="content">
    ${toGifDetailed(gif)}
  </div>
</div>
`;

/**
 * Generates an HTML view for displaying a single GIF in the context of uploads.
 *
 * @param {object} gif - The GIF to display.
 * @returns {string} - The HTML content representing the simple GIF view for uploads.
 */
export const toGifSimpleForUploads = (gif) => `
<div class="gif-item" data-gifId="${gif.id}">
    <img src="${gif.images.fixed_height.url}" data-gifId="${gif.id}" />
    <div class="gif-info" data-gifId="${gif.id}">${
  (gif.user && gif.user.description) || ''
}</div>
  </div> 
`;

/**
 * Generates an HTML view for displaying a simple GIF with favorites status.
 *
 * @param {object} gif - The GIF to display.
 * @returns {string} - The HTML content representing the simple GIF view with favorite status.
 */
export const toGifSimple = (gif) => `
<div class="gif">
  <img id="${gif.id}" src="${gif.url}" alt="">
  ${renderFavoriteStatus(gif.id)}
</div>
`;

/**
 * Generates an HTML view for displaying detailed information about a GIF.
 *
 * @param {object} gif - The GIF to display.
 * @returns {string} - The HTML content representing the detailed GIF view with user information.
 */
const toGifDetailed = (gif) => `
<div class="gif-detailed">
  <div class="poster">
    <img src="${gif.images.original.url}">
  </div>
  <div class="gif-info">
  ${
    gif.user
      ? `
    <p><img src="${gif.user.avatar_url}" width="50" hight="50"/></p>
    <p>User: ${gif.user.display_name}</p>
    <p>Description: ${gif.user.description}</p>
    <p>Profile GiPhy: ${gif.user.profile_url}</p>
    <p>Profile Instagram: ${gif.user.instagram_url}</p>
    <p>Rating: ${gif.user.rating}</p>
    `
      : ''
  }
  </div>
</div>
`;
