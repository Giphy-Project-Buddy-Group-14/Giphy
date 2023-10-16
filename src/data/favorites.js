let favorites = JSON.parse(localStorage.getItem('favorites')) || [];

/**
 * Adds a GIF to the list of favorites.
 *
 * @param {string} gifId - The ID of the GIF.
 * @param {string} gifUrl - The URL of the GIF.
 */
export const addFavorite = (gifId, gifUrl) => {
  if (!favorites.includes(gifId)) {
    favorites.push(gifId);
    favorites.push(gifUrl);
    updateLocalStorage();
  }
};

/**
 * Removes a GIF from the list of favorites.
 *
 * @param {string} gifId - The ID of the GIF to be removed.
 */
export const removeFavorite = (gifId) => {
  let indexToRemove = favorites.indexOf(gifId);
  if (indexToRemove !== -1 && indexToRemove < favorites.length - 1) {
    favorites.splice(indexToRemove, 2);
  }
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
  localStorage.setItem('favorites', JSON.stringify(favorites));
};
