import { ABOUT, CONTAINER_SELECTOR, FAVORITES, GIF_DETAILS, HOME, TRENDING, UPLOAD, UPLOADED } from '../common/constants.js';
import { loadSingleGif, loadTrendingGifS } from '../requests/request-service.js';
import { toAboutView } from '../views/about-view.js';
import { toFavoritesView } from '../views/favorites-view.js';
import { toHomeView } from '../views/home-view.js';
import { toSingleGifView } from '../views/gif-views.js';
import { q, setActiveNav } from './helpers.js';
import { getFavorites } from '../data/favorites.js';
import { toTrendingView } from '../views/trending-view.js';
import { toUploadedView } from '../views/uploaded-view.js';
import { toUploadView } from '../views/upload-view.js';
import { addDropZoneEvents } from '../index.js';

// public API
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
    default: return null;
  }
};

export const renderGifDetails = async (id = null) => {
  q(CONTAINER_SELECTOR).innerHTML = 'Loading ...';
  const gif = await loadSingleGif(id);
  q(CONTAINER_SELECTOR).innerHTML = toSingleGifView(gif);
};

// private functions

const renderHome = () => {
  q(CONTAINER_SELECTOR).innerHTML = toHomeView();
};

const renderTrending = async () => {
  q(CONTAINER_SELECTOR).innerHTML = 'Loading ...';
  const gifS = await loadTrendingGifS();
  q(CONTAINER_SELECTOR).innerHTML = toTrendingView(gifS);
};

const renderUploaded = () => {
  q(CONTAINER_SELECTOR).innerHTML = toUploadedView();
};

const renderUpload = () => {
  q(CONTAINER_SELECTOR).innerHTML = toUploadView();
  addDropZoneEvents();
};

const renderFavorites = () => {
  const favorites = getFavorites();
  const gifs = favorites.map((id) => loadSingleGif(id));

  q(CONTAINER_SELECTOR).innerHTML = toFavoritesView(gifs);
};

const renderAbout = () => {
  q(CONTAINER_SELECTOR).innerHTML = toAboutView();
};
