import { renderFavoriteStatus } from '../events/favorites-events.js';

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
export const toGifSimple = (gif) => `
<div class="gif-item" data-gifId="${gif.id}">
    <img src="${gif.images.fixed_height.url}" data-gifId="${gif.id}" />
    <div class="gif-info" data-gifId="${gif.id}">
      <div class="gif-info-description">${(gif.user && gif.user.description) || ''}</div>
    </div>
    <div class="gif-info-heart">${renderFavoriteStatus(gif.id)}</div>
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
  ${gif.user ?
    `
    <p><img src="${gif.user.avatar_url}" width="50" hight="50"/></p>
    <p>User: ${gif.user.display_name}</p>
    <p>Description: ${gif.user.description}</p>
    <p>Profile GiPhy: ${gif.user.profile_url}</p>
    <p>Profile Instagram: ${gif.user.instagram_url}</p>
    ${gif.user.rating ? `< p > Rating : ${gif.user.rating}</p> ` : ''}
    ` :
    ''
  }
  </div >
</div >
  `;
