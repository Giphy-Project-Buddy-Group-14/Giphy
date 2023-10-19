import { API_KEY } from '../common/constants.js';
import { API_URL } from '../common/constants.js';
import { q } from '../events/helpers.js';
import { UPLOAD_URL } from '../common/constants.js';


const GIPHY_API_BASE_URL = 'https://api.giphy.com/v1/gifs';

/**
 * Loads trending GIFs from Giphy API.
 *
 * @async
 * @returns {Promise</Array>} - A Promise that resolves to an array of trending GIFs.
 */

export const loadTrendingGifs = async () => {
  try {
    const response = await fetch(
        `${GIPHY_API_BASE_URL}/trending?api_key=${API_KEY}&rating=g`,
    );
    if (response.ok) {
      const data = await response.json();
      return data.data;
    }
  } catch (error) {
    console.error(error);
  }
};

/**
 * Search for GIFs using the Giphy API.
 *
 * @async
 * @param {string} searchTerm - The search term to look for GIFs.
 * @returns {Promise<Array>} - a promise that resolves to an array of matching GIFs.
 */
export const searchGifs = async (searchTerm) => {
  try {
    const response = await fetch(
        // eslint-disable-next-line max-len
        `${GIPHY_API_BASE_URL}/search?q=${searchTerm}&api_key=${API_KEY}&limit=10&rating=g`,
    );
    if (response.ok) {
      const data = await response.json();
      return data.data;
    }
    throw new Error('Failed to search GIFs');
  } catch (error) {
    console.error(error);
  }
};

/**
 * Searches for a random GIF using the Giphy API.
 *
 * @async
 * @returns {Promise<Array>} - A promise that resolves to an array containing a single random GIF.
 */
export const searchRandomGifs = async () => {
  try {
    const response = await fetch(
        `${GIPHY_API_BASE_URL}/random?api_key=${API_KEY}&rating=g`,
    );
    if (response.ok) {
      const data = await response.json();
      return data.data;
    }
    throw new Error('Failed to search GIFs');
  } catch (error) {
    console.error(error);
  }
};

/**
 * Loads trending GIFs from an external data source.
 *
 * @returns {Promise<Array>} - A promise that resolves to an array to trending GIFs.
 */
export const loadTrendingGifS = async () => {
  try {
    // eslint-disable-next-line max-len
    const response = await fetch(`${API_URL}/trending?api_key=${API_KEY}&limit=50&rating=g`);
    const data = await response.json();
    return data.data;
  } catch (error) {
    console.error(error);
  }
};

/**
 * Loads kitty GIFs from an external data source.
 *
 * @returns {Promise<Array>} - A promise that resolves to an array to trending GIFs.
 */
let loadedKittens = [];
export const loadKittyGifS = async (limit, offset, forceLoadMore) => {
  if (!forceLoadMore && loadedKittens.length !== 0) {
    return loadedKittens;
  }

  try {
    // eslint-disable-next-line max-len
    const response = await fetch(`${GIPHY_API_BASE_URL}/search?q=cats&api_key=${API_KEY}&limit=${limit}&offset=${offset}&rating=g`);
    const data = await response.json();

    loadedKittens = loadedKittens.concat(data.data);
    return loadedKittens;
  } catch (error) {
    console.error(error);
  }
};

/**
 * Loads a single GIF by ID.
 *
 * @async
 * @param {string} id - The ID of the GIF to load.
 * @returns {Promise<Object|null>} - A promise that resolves to the loaded GIF or null if not found.
 */
export const loadSingleGif = async (id) => {
  try {
    const response = await fetch(`${API_URL}/${id}?api_key=${API_KEY}`);
    const data = await response.json();
    return data.data;
  } catch (error) {
    console.error(error);
  }
};

/**
 * Uploads a GIF file.
 *
 * @param {File} file - The GIF file to upload.
 * @returns {Promise</string>} - A promise that resolves to the response text.
 */
export const loadUploadGif = (file) => {
  return new Promise((resolve, reject) => {
    const formContent = new FormData();
    formContent.append('file', file);

    // eslint-disable-next-line no-undef
    const xhr = new XMLHttpRequest();

    const uploadedFileCounter = q('.uploaded-file__counter');
    uploadedFileCounter.innerHTML = `0%`;

    xhr.upload.addEventListener('progress', (event) => {
      uploadedFileCounter.innerHTML = `${Math.round(
          (event.loaded / event.total) * 99,
      )}%`;
    });

    xhr.addEventListener('load', () => {
      if (xhr.status >= 200 && xhr.status < 300) {
        resolve(xhr.responseText);
        uploadedFileCounter.innerHTML = `100%`;
      } else {
        reject(new Error(`Request failed with status ${xhr.status}`));
      }
    });

    xhr.open('post', `https://${UPLOAD_URL}?api_key=${API_KEY}`);
    xhr.send(formContent);
  });
};
