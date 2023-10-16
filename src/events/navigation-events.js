import { ABOUT, CONTAINER_SELECTOR, FAVORITES, GIF_DETAILS, HOME, TRENDING, UPLOAD, UPLOADED } from '../common/constants.js';
import { loadSingleGif, loadTrendingGifS, searchRandomGifs } from '../requests/request-service.js';
import { toAboutView } from '../views/about-view.js';
import { toFavoritesView } from '../views/favorites-view.js';
import { toHomeView } from '../views/home-view.js';
import { toSingleGifView } from '../views/gif-views.js';
import { q, setActiveNav } from './helpers.js';
import { toTrendingView } from '../views/trending-view.js';
import { toUploadedView } from '../views/uploaded-view.js';
import { toUploadView } from '../views/upload-view.js';
import { addDropZoneEvents } from '../index.js';
import { getFavorites } from '../data/favorites.js';
import { toRandomGifView } from '../views/random-gif-view.js';

/**
 * Loads a specific page based on the provided page and optional ID.
 *
 * @param {string} page - The page identifier.
 * @param {string|null} id - Optional ID for GIF details page.
 * @returns Renders the pages
 */
export const loadPage = (page = '', id = null) => {
  switch (page) {
    case HOME:
      setActiveNav(HOME);
      return renderHome();

    case TRENDING:
      setActiveNav(TRENDING);
      return renderTrending();

    case UPLOADED:
      setActiveNav(UPLOADED);
      return renderUploaded();

    case UPLOAD:
      setActiveNav(UPLOAD);
      return renderUpload();

    case FAVORITES:
      setActiveNav(FAVORITES);
      return renderFavorites();

    case ABOUT:
      setActiveNav(ABOUT);
      return renderAbout();

    case GIF_DETAILS:
      return renderGifDetails(id);
    /* if the app supports error login, use default to log mapping errors */
    default:
      return null;
  }
};

/**
 * Renders the GIFs details ot the page.
 *
 * @param {string|null} id - ID of the GIF to be displayed.
 */
export const renderGifDetails = async (id = null) => {
  q(CONTAINER_SELECTOR).innerHTML = 'Loading ...';
  const gif = await loadSingleGif(id);
  q(CONTAINER_SELECTOR).innerHTML = toSingleGifView(gif);
};

/**
 * Renders the Home page.
 */
const renderHome = () => {
  q(CONTAINER_SELECTOR).innerHTML = toHomeView();
};

/**
 * Renders the Trending page.
 */
const renderTrending = async () => {
  q(CONTAINER_SELECTOR).innerHTML = 'Loading ...';
  const gifS = await loadTrendingGifS();
  q(CONTAINER_SELECTOR).innerHTML = toTrendingView(gifS);
};

/**
 * Renders the Uploaded page
 */
const renderUploaded = async () => {
  const uploadedArr = JSON.parse(localStorage.getItem('uploadedGifs')) || [];

  const gifs = await Promise.all(
    uploadedArr.map(async (id) => {
      try {
        return await loadSingleGif(id);
      } catch (error) {
        console.error(error.message);
        return null;
      }
    })
  );
  console.log(gifs);
  q(CONTAINER_SELECTOR).innerHTML = toUploadedView(gifs);
};

/**
 * Renders the Upload page.
 */
const renderUpload = () => {
  q(CONTAINER_SELECTOR).innerHTML = toUploadView();
  addDropZoneEvents();
};

/**
 * Renders the Favorites page.
 */
export const renderFavorites = async () => {
  const favorites = getFavorites();

  try {
    const favGifs = await Promise.all(favorites.map(async (id) => await loadSingleGif(id)));

    q(CONTAINER_SELECTOR).innerHTML = favGifs.length === 0 ?
      toRandomGifView([await searchRandomGifs()]) :
      toFavoritesView(favGifs);
  } catch (error) {
    console.log(error.message);
  }

};

/**
 * Renders the About page.
 */
const renderAbout = () => {
  q(CONTAINER_SELECTOR).innerHTML = toAboutView();
};
