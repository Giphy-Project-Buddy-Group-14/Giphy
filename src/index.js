import { GIF_DETAILS, HOME } from './common/constants.js';
import { q } from './events/helpers.js';
import { loadPage, renderFavorites, renderHome } from './events/navigation-events.js';
import { renderFilePreview } from './events/upload-events.js';
import { searchGifs } from './requests/request-service.js';
import { toggleFavoriteStatus } from './events/favorites-events.js';
import { toSearchView } from './views/search-view.js';

// eslint-disable-next-line no-undef
document.addEventListener('DOMContentLoaded', () => {
  // eslint-disable-next-line no-undef
  document.addEventListener('click', async (event) => {
    if (event.target.getAttribute('data-gifId')) {
      const gifId = event.target.getAttribute('data-gifId');
      loadPage(GIF_DETAILS, gifId);
    }

    if (event.target.classList.contains('nav-link')) {
      loadPage(event.target.getAttribute('data-page'));
    }

    if (event.target.classList.contains('favorite')) {
      const gifId = event.target.getAttribute('data-gif-id');
      toggleFavoriteStatus(gifId);

      const selectedNavigationItem = q('a.nav-link.active');

      if (selectedNavigationItem && selectedNavigationItem.textContent === 'Favorites') {
        await renderFavorites();
      }
    }

    if (event.target.id === 'load-more-button-next') {
      renderHome(true);
    }
  });

  q('input#search').addEventListener('click', (event) => {
    const activeMenu = q('a.nav-link.active');
    if (activeMenu) {
      activeMenu.classList.remove('active');
    }
  });

  q('#logo-text').addEventListener('click', () => {
    loadPage(HOME);
  });

  const searchGIFs = async (searchStr) => {
    try {
      const gifs = await searchGifs(searchStr);
      const imagesHtml = await toSearchView(gifs, searchStr);
      // eslint-disable-next-line no-undef
      document.getElementById('container').innerHTML = imagesHtml;
    } catch (error) {
      console.error(error);
      // eslint-disable-next-line no-undef
      document.getElementById('container').innerHTML = '<h1>Something went wrong...</h1>';
    }
  };

  q('#search-btn').addEventListener('click', (event) => {
    const searchStr = q('input#search').value;
    searchGIFs(searchStr);
  });

  q('input#search').addEventListener('keydown', (event) => {
    if (event.key === 'Enter') {
      const searchStr = event.target.value;
      searchGIFs(searchStr);
    }
  });

  loadPage(HOME);
});

/**
 * Sets up event listeners for the drop zone used for uploading GIF files.
 */
export const addDropZoneEvents = () => {
  if (q('#dropZoon')) {
    // When (drop-zoon) has (dragover) Event
    q('#dropZoon').addEventListener('dragover', (event) => {
      event.preventDefault();
      q('#dropZoon').classList.add('drop-zoon--over');
    });

    // When (drop-zoon) has (dragleave) Event
    q('#dropZoon').addEventListener('dragleave', (event) => {
      q('#dropZoon').classList.remove('drop-zoon--over');
    });

    // When (drop-zoon) has (drop) Event
    q('#dropZoon').addEventListener('drop', (event) => {
      event.preventDefault();

      q('#dropZoon').classList.remove('drop-zoon--over');

      const file = event.dataTransfer.files[0];

      renderFilePreview(file);
    });

    // When (drop-zoon) has (click) Event
    q('#dropZoon').addEventListener('click', (event) => {
      q('#fileInput').click();
    });

    // When (fileInput) has (change) Event
    q('#fileInput').addEventListener('change', (event) => {
      const file = event.target.files[0];
      renderFilePreview(file);
    });
  }
};
