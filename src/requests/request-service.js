import { TIHOMIR_API_KEY, UPLOAD_URL } from '../common/constants.js';
import { getGifsGeneralInfo, getGifById, searchGifs } from '../data/gifs.js';
import { API_URL, SVILENA_API_KEY } from "../common/constants.js";


// Тука трябва да се ползват fetch() methods.
export const loadGifs = (categoryId = null) => {
  const gifs = getGifsGeneralInfo(categoryId);

  return gifs;
};

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
  return gif;
};

export const loadSearchGifs = (searchTerm = '') => {
  const gifs = searchGifs(searchTerm);

  return gifs;
};

export const loadUploadGif = async (reader, file, onProgress) => {
  const formContent = new FormData();
  formContent.append('file', file);

  try {
    const uploadRequest = await fetch(`https://${UPLOAD_URL}?api_key=${TIHOMIR_API_KEY}`, {
      method: 'POST',
      body: formContent,
      onProgress,
    });
    return uploadRequest;
  } catch (error) {
    console.log(error);
    return error;
  }
};
