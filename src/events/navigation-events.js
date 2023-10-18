import {
  ABOUT,
  CONTAINER_SELECTOR,
  FAVORITES,
  GIF_DETAILS,
  HOME,
  ITEMS_PER_LOAD,
  TRENDING,
  UPLOAD,
  UPLOADED,
} from '../common/constants.js';
import {
  loadSingleGif,
  loadTrendingGifS,
  searchRandomGifs,
  loadKittyGifS,
} from '../requests/request-service.js';
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

// eslint-disable-next-line valid-jsdoc
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
 * Renders details of a specific GIF in the specified container.
 *
 * @async
 * @param {string|null} id - The ID of the GIF to load details for.
 */
export const renderGifDetails = async (id = null) => {
  q(CONTAINER_SELECTOR).innerHTML = 'Loading ...';
  const gif = await loadSingleGif(id);
  q(CONTAINER_SELECTOR).innerHTML = toSingleGifView(gif);
};

/**
 * Renders the Home page.
 */
let offset = 0;
export const renderHome = async (force) => {
  const gifS = await loadKittyGifS(ITEMS_PER_LOAD, offset, force);
  offset += ITEMS_PER_LOAD;

  q(CONTAINER_SELECTOR).innerHTML = toHomeView(gifS);
};

/**
 * Renders the Trending page.
 * @async
 */
const renderTrending = async () => {
  q(CONTAINER_SELECTOR).innerHTML = 'Loading ...';
  const gifS = await loadTrendingGifS();
  q(CONTAINER_SELECTOR).innerHTML = toTrendingView(gifS);
};

/**
 * Renders the Uploaded page
 */
export const renderUploaded = async () => {
  // eslint-disable-next-line no-undef
  const uploadedArr = JSON.parse(localStorage.getItem('uploadedGifs')) || [];

  const gifs = await Promise.all(
      uploadedArr.map(async (id) => {
        try {
          return await loadSingleGif(id);
        } catch (error) {
          console.error(error.message);
          return null;
        }
      }),
  );

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
 *
 * @async
 */
export const renderFavorites = async () => {
  const favorites = getFavorites();

  try {
    const favGifs = await Promise.all(
        favorites.map(async (id) => await loadSingleGif(id)),
    );

    q(CONTAINER_SELECTOR).innerHTML =
      favGifs.length === 0 ?
        toRandomGifView([await searchRandomGifs()]) :
        toFavoritesView(favGifs);
  } catch (error) {
    console.error(error.message);
  }
};

/**
 * Renders the About page.
 */
const renderAbout = () => {
  q(CONTAINER_SELECTOR).innerHTML = toAboutView();
};
