import { TIHOMIR_API_KEY, UPLOAD_URL } from '../common/constants.js';
import { getGifsGeneralInfo, getGifById, searchGifs } from '../data/gifs.js';
import { API_URL, SVILENA_API_KEY } from "../common/constants.js";
import { q } from '../events/helpers.js';


// Тука трябва да се ползват fetch() methods.
export const loadGifs = (categoryId = null) => {
  const gifs = getGifsGeneralInfo(categoryId);

  return gifs;
};

export const loadTrendingGifS = () => {
  const trendingGifS = fetch(`${API_URL}/trending?api_key=${SVILENA_API_KEY}&limit=50`);
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

export const loadSearchGifs = (searchTerm = '') => {
  const gifs = searchGifs(searchTerm);

  return gifs;
};


export const loadUploadGif = (file) => {
  return new Promise((resolve, reject) => {
    const formContent = new FormData();
    formContent.append('file', file);

    const xhr = new XMLHttpRequest();

    const uploadedFileCounter = q('.uploaded-file__counter');
    uploadedFileCounter.innerHTML = `0%`;

    xhr.upload.addEventListener('progress', (event) => {
      uploadedFileCounter.innerHTML = `${Math.round((event.loaded / event.total) * 99)}%`;
    });

    xhr.addEventListener('load', () => {
      if (xhr.status >= 200 && xhr.status < 300) {
        resolve(xhr.responseText);
        uploadedFileCounter.innerHTML = `100%`;
      } else {
        reject(new Error(`Request failed with status ${xhr.status}`));
      }
    });

    xhr.open('post', `https://${UPLOAD_URL}?api_key=${TIHOMIR_API_KEY}`);
    xhr.send(formContent);
  });
};
