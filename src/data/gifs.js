import { gifs, categories } from './gifs-data.js';

/**
 * Finds category by its ID
 *
 * @param {number} categoryId - The ID of the category to find.
 * @returns {Object} - The found category or an empty object if not found.
 */
const findCategory = (categoryId) => {
  return categories.find((c) => c.id === categoryId) || { id: -1, name: '' };
};

/**
 * Retrieves general information about GIFs, optionally filtered by category.
 *
 * @param {number|null} categoryId - The ID of the category to filter by, or null to retrieve all GIFs.
 * @returns {Array} - An array of objects containing general GIF information.
 */
export const getGifsGeneralInfo = (categoryId = null) => {
  const gifsFilter = categoryId
    ? (m) => m.genre === findCategory(categoryId).name
    : () => true;

  return gifs.filter(gifsFilter).map((m) => ({
    id: m.id,
    title: m.title,
    genre: m.genre,
    year: m.year,
    poster: m.poster,
  }));
};

/**
 * Retrieve all information about GIFs.
 *
 * @param {number|null} categoryId - The ID of the category to filter by, or null to retrieve all GIFs.
 * @returns {Array} - An array of object containing full GIFs information.
 */
export const getGifsFullInfo = (categoryId = null) => {
  if (categoryId) {
    return gifs.filter((m) => m.genre === findCategory(categoryId).name);
  }

  return gifs;
};

/**
 * Retrieve a GIF by its ID.
 *
 * @param {number} gifId - The ID of the GIF to retrieve.
 * @returns {Object} - The found GIF or null if not found.
 */
export const getGifById = (gifId = 0) => gifs.find((m) => m.id === gifId);

/**
 * Retrieves category by its ID.
 *
 * @param {number|null} categoryId - The ID of the category to retrieve, or null to indicate no category found.
 * @returns {Object|null} - The found category or null if not found.
 */
export const getCategory = (categoryId = null) => {
  return categories.find((c) => c.id === categoryId) || null;
};

/**
 * Retrieves information about all categories, including the number of GIFs
 *
 * @returns {Array} - An array of object representing categories with the count of GIFs in each.
 */
export const getCategories = () =>
  categories.map((category) => ({
    ...category,
    gifsCount: gifs.filter((m) => m.genre === category.name).length,
  }));
