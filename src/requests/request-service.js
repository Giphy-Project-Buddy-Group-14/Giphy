import { API_KEY } from '../common/api_key.js';

const GIPHY_API_BASE_URL = 'https://api.giphy.com/v1/gifs';

export const loadTrendingGifs = async () => {
  try {
    const response = await fetch(
      `${GIPHY_API_BASE_URL}/trending?api_key=${API_KEY}`
    );

    if (response.ok) {
      const data = await response.json();

      return data.data;
    } else {
      throw new Error('Failed to load trending GIFs');
    }
  } catch (error) {
    console.error(error);
    return [];
  }
};

export const searchGifs = async (searchTerm) => {
  try {
    const response = await fetch(
      `${GIPHY_API_BASE_URL}/search?q=${searchTerm}&api_key=${API_KEY}&limit=10`
    );
    if (response.ok) {
      const data = await response.json();
      return data.data;
    } else {
      throw new Error('Failed to search GIFs');
    }
  } catch (error) {
    console.error(error);
    return [];
  }
};

export const searchRandomGifs = async () => {
  try {
    const response = await fetch(
      `${GIPHY_API_BASE_URL}/random?api_key=${API_KEY}`
    );
    if (response.ok) {
      const data = await response.json();
      return data.data;
    } else {
      throw new Error('Failed to search GIFs');
    }
  } catch (error) {
    console.error(error);
    return [];
  }
};

export const loadSingleGif = async (gifId) => {
  try {
    const response = await fetch(
      `${GIPHY_API_BASE_URL}/${gifId}?api_key=${API_KEY}`
    );
    if (response.ok) {
      const data = await response.json();
      return data.data;
    } else {
      throw new Error('Failed to load the GIF');
    }
  } catch (error) {
    console.error(error);
    return null;
  }
};
