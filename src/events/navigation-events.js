import { ABOUT, CATEGORIES, CONTAINER_SELECTOR, FAVORITES, HOME } from '../common/constants.js';
import { loadCategories, loadCategory, loadGifs, loadSingleGif } from '../requests/request-service.js';
import { toAboutView } from '../views/about-view.js';
import { toCategoriesView } from '../views/category-view.js';
import { toFavoritesView } from '../views/favorites-view.js';
import { toHomeView } from '../views/home-view.js';
import { toGifFromCategoryView, toSingleGifView } from '../views/gif-views.js';
import { q, setActiveNav } from './helpers.js';
import { getFavorites } from '../data/favorites.js';

// public API
export const loadPage = (page = '') => {
  switch (page) {
    case HOME:
      setActiveNav(HOME);
      return renderHome();

    case CATEGORIES:
      setActiveNav(CATEGORIES);
      return renderCategories();

    case FAVORITES:
      setActiveNav(FAVORITES);
      return renderFavorites();

    case ABOUT:
      setActiveNav(ABOUT);
      return renderAbout();

    /* if the app supports error login, use default to log mapping errors */
    default: return null;
  }
};

export const renderGifDetails = (id = null) => {
  const gif = loadSingleGif(id);

  q(CONTAINER_SELECTOR).innerHTML = toSingleGifView(gif);
};

export const renderCategory = (categoryId = null) => {
  const category = loadCategory(categoryId);
  const gifs = loadGifs(category.id);

  q(CONTAINER_SELECTOR).innerHTML = toGifFromCategoryView(category, gifs);
};

// private functions

const renderHome = () => {
  q(CONTAINER_SELECTOR).innerHTML = toHomeView();
};

const renderCategories = () => {
  const categories = loadCategories();

  q(CONTAINER_SELECTOR).innerHTML = toCategoriesView(categories);
};

const renderFavorites = () => {
  const favorites = getFavorites();
  const gifs = favorites.map((id) => loadSingleGif(id));

  q(CONTAINER_SELECTOR).innerHTML = toFavoritesView(gifs);
};

const renderAbout = () => {
  q(CONTAINER_SELECTOR).innerHTML = toAboutView();
};
