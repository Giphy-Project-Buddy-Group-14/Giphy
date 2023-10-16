import { GIF_DETAILS, HOME } from './common/constants.js';
import { q } from './events/helpers.js';
import { loadPage } from './events/navigation-events.js';
// import { renderSearchItems } from './events/search-events.js';
import { renderFilePreview } from './events/upload-events.js';
import { searchGifs } from './requests/request-service.js';
import { toggleFavoriteStatus } from './events/favorites-events.js';
import { toSearchView } from './views/search-view.js';

document.addEventListener('DOMContentLoaded', () => {
  document.addEventListener('click', (event) => {


    if (event.target.getAttribute('data-gifId')) {
      const gifId = event.target.getAttribute('data-gifId');
      loadPage(GIF_DETAILS, gifId);
    }



    if (event.target.classList.contains('nav-link')) {
      loadPage(event.target.getAttribute('data-page'));
    }

    if (event.target.classList.contains('favorite')) {
      const gifId = event.target.getAttribute('data-gif-id');
      const gifUrl = q('#' + gifId).src;
      toggleFavoriteStatus(gifId, gifUrl);
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




  q('#search-btn').addEventListener('click', (event) => {
    const searchStr = q('input#search').value;
    searchGifs(searchStr)
      .then((data) => {
        const extractedFields = data.map((gif) => ({
          id: gif.id,
          url: gif.images.original.url,
        }));
        return extractedFields;
      })
      .then((gifs) => {
        return toSearchView(gifs, searchStr);
      })
      .then((imagesHtml) => {
        document.getElementById('container').innerHTML = imagesHtml;
      })
      .catch((error) => {
        console.error(error);
        document.getElementById('container').innerHTML =
          '<h1>Something went wrong...</h1>';
      });
    console.log('event.target', event.target);
  });

  q('input#search').addEventListener('keydown', (event) => {
    if (event.key === 'Enter') {
      const searchStr = event.target.value;

      searchGifs(searchStr)
        .then((data) => {
          const extractedFields = data.map((gif) => ({
            id: gif.id,
            url: gif.images.original.url,
          }));
          return extractedFields;
        })
        .then((gifs) => {
          return toSearchView(gifs, searchStr);
        })
        .then((imagesHtml) => {
          document.getElementById('container').innerHTML = imagesHtml;
        })
        .catch((error) => {
          console.error(error);
          document.getElementById('container').innerHTML =
            '<h1>Something went wrong...</h1>';
        });
    }
  });

  loadPage(HOME);
});

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
