import { TIHOMIR_API_KEY, UPLOAD_URL } from '../common/constants.js';
import { getGifsGeneralInfo, getGifById, searchGifs } from '../data/gifs.js';

// Тука трябва да се ползват fetch() methods.
export const loadGifs = (categoryId = null) => {
  const gifs = getGifsGeneralInfo(categoryId);

  return gifs;
};

export const loadSingleGif = (id) => {
  const gif = getGifById(id);

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
      onProgress: onProgress,
    });

    return uploadRequest;
  } catch (error) {
    console.log(error);
    return error;
  }
};
