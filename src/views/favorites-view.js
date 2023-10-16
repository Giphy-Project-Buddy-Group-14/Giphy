import { getFavorites } from '../data/favorites.js';
import { searchRandomGifs } from '../requests/request-service.js';
import { toGifSimple } from './gif-views.js';

/**
 * Generates a view for displaying favorite GIFs or a random GIF if there are no favorites
 * 
 * @async
 * @returns {Promise<string>} - A string representing the HTML content of the favorites view.
 * 
 */
export async function toFavoritesView() {
  const favorites = getFavorites();

  function arrayToObjects(arr) {
    const objects = [];
    for (let i = 0; i < arr.length; i += 2) {
      if (i + 1 < arr.length) {
        const gifId = arr[i];
        const gifUrl = arr[i + 1];

        const gifObject = { id: gifId, url: gifUrl };
        objects.push(gifObject);
      }
    }
    return objects;
  }

  const gifs = arrayToObjects(favorites);
  if (gifs.length > 0) {
    return `
      <div id="favorites">
        <p>Favorite</p>
          <div class="content">
          ${gifs.map(toGifSimple).join('\n')}
          </div>  
      </div>
    `;
  }

  try {
    let dataJson = await searchRandomGifs();
    let randomFavoritesUrl = dataJson.images.original.url;
    return `
      <div id="favorites">
        <p>Favorite</p>
        <div class="content">
          <img id="random" src="${randomFavoritesUrl}" />
        </div>  
      </div>
    `;
  } catch (error) {
    console.error(error);
  }
}
