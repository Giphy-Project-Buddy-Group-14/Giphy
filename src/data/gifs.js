import { gifs, categories } from './gifs-data.js';

const findCategory = (categoryId) => {
  return categories.find((c) => c.id === categoryId) || { id: -1, name: '' };
};

// public API

export const getGifsGeneralInfo = (categoryId = null) => {
  const gifsFilter = categoryId ?
    (m) => m.genre === findCategory(categoryId).name :
    () => true;

  return gifs
      .filter(gifsFilter)
      .map((m) => ({
        id: m.id,
        title: m.title,
        genre: m.genre,
        year: m.year,
        poster: m.poster,
      }));
};

export const getGifsFullInfo = (categoryId = null) => {
  if (categoryId) {
    return gifs
        .filter((m) => m.genre === findCategory(categoryId).name);
  }

  return gifs;
};

export const getGifById = (gifId = 0) => gifs.find((m) => m.id === gifId);

export const searchGifs = (title = '') => title ?
  gifs.filter((m) => m.title.toLowerCase().includes(title.toLowerCase())) :
  gifs;

export const getCategory = (categoryId = null) => {
  return categories.find((c) => c.id === categoryId) || null;
};

export const getCategories = () => categories
    .map((category) => ({
      ...category,
      gifsCount: gifs.filter((m) => m.genre === category.name).length,
    }));
