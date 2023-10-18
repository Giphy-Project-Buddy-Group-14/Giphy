import { toGifSimple } from './gif-views.js';

// eslint-disable-next-line valid-jsdoc
/**
 * Generates a view for displaying favorite GIFs or a random GIF if there are no favorites
 *
 * @async
 * @returns {Promise<string>} - A string representing the HTML content of the favorites view.
 *
 */
export const toFavoritesView = (gifs) => `
<div id="favorites">
<h1>Your favorite Gifs:</h1>
<div id="gif-grid">
  ${gifs.map(toGifSimple).join('\n')}
</div>
</div>
`;

