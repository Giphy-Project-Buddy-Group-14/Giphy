// import { getGifsGeneralInfo, getGifById, searchGifs } from '../data/gifs.js';

import { API_URL, SVILENA_API_KEY } from "../common/constants.js";


// export const loadGifs = (categoryId = null) => {
//   const gifs = getGifsGeneralInfo(categoryId);

//   return gifs;
// };

export const loadTrendingGifS = () => {
  const trendingGifS = fetch(`${API_URL}/trending?api_key=${SVILENA_API_KEY}&limit=20`);
  return trendingGifS.then(response => response.json())
    .then(response => response.data)
    .catch((error) => {
      console.error(error);
    });
};

export const loadSingleGif = async (id) => {
  const gif = await fetch(`${API_URL}/${id}?api_key=${SVILENA_API_KEY}`)
  .then(response => response.json())
  .then(response => response.data)
  .catch(console.error);

  return gif;
};

// export const loadSearchGifs = (searchTerm = '') => {
//   const gifs = searchGifs(searchTerm);

//   return gifs;
// };
