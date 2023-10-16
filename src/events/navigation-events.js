import { ABOUT, CONTAINER_SELECTOR, FAVORITES, HOME, TRENDING, UPLOAD, UPLOADED } from '../common/constants.js';
import { toAboutView } from '../views/about-view.js';
import { toFavoritesView } from '../views/favorites-view.js';
import { toHomeView } from '../views/home-view.js';
import { toSingleGifView } from '../views/gif-views.js';
import { q, setActiveNav } from './helpers.js';
import { toTrendingView } from '../views/trending-view.js';
import { toUploadView } from '../views/upload-view.js';
import { addDropZoneEvents } from '../index.js';

// public API
export const loadPage = (page = '') => {
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

    /* if the app supports error login, use default to log mapping errors */
    default: return null;
  }
};

export const renderGifDetails = (id = null) => {
  const gif = loadSingleGif(id);

  q(CONTAINER_SELECTOR).innerHTML = toSingleGifView(gif);
};

// private functions

const renderHome = () => {
  q(CONTAINER_SELECTOR).innerHTML = toHomeView();
};

const renderTrending = () => {
  q(CONTAINER_SELECTOR).innerHTML = toTrendingView();
};

const renderUploaded = () => {
  q(CONTAINER_SELECTOR).innerHTML = toUploadedView();
};

const renderUpload = () => {
  q(CONTAINER_SELECTOR).innerHTML = toUploadView();
  addDropZoneEvents();
};

const renderFavorites = () => {
  toFavoritesView()
    .then((html) => {
      q(CONTAINER_SELECTOR).innerHTML = html
    });
};

const renderAbout = () => {
  q(CONTAINER_SELECTOR).innerHTML = toAboutView();
};
