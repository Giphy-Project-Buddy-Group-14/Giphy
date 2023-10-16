
let favorites = JSON.parse(localStorage.getItem('favorites')) || [];

export const addFavorite = (gifId, gifUrl) => {
  if (!favorites.includes(gifId)) {
    favorites.push(gifId);
    favorites.push(gifUrl);
    updateLocalStorage();
  }
};

export const removeFavorite = (gifId) => {
  let indexToRemove = favorites.indexOf(gifId);
  if (indexToRemove !== -1 && indexToRemove < favorites.length - 1) {
    favorites.splice(indexToRemove, 2); // Remove the element at indexToRemove and the next element
  }
  updateLocalStorage();
};

export const getFavorites = () => [...favorites];
const updateLocalStorage = () => {
  localStorage.setItem('favorites', JSON.stringify(favorites));
};
