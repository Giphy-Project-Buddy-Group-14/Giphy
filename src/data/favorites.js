// eslint-disable-next-line no-undef
let favorites = JSON.parse(localStorage.getItem('favorites')) || [];

/**
 * Adds a GIF to the list of favorites.
 *
 * @param {string} gifId - The ID of the GIF.
 */
export const addFavorite = (gifId) => {
  if (!favorites.includes(gifId)) {
    favorites.push(gifId);
    updateLocalStorage();
  }
};

/**
 * Removes a GIF from the list of favorites.
 *
 * @param {string} gifId - The ID of the GIF to be removed.
 */
export const removeFavorite = (gifId) => {
  favorites = favorites.filter((id) => id !== gifId);
  updateLocalStorage();
};

/**
 * Retrieves the list of favorite GIFs.
 *
 * @returns {Array} - An array contains the favorites GIFs.
 */
export const getFavorites = () => [...favorites];

/**
 * Updates the local storage with the current list of favorites.
 */
const updateLocalStorage = () => {
  // eslint-disable-next-line no-undef
  localStorage.setItem('favorites', JSON.stringify(favorites));
};
