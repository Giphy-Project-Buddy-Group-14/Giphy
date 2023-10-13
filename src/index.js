import { HOME } from './common/constants.js';
import { q } from './events/helpers.js';
import { loadPage } from './events/navigation-events.js';
import { renderSearchItems } from './events/search-events.js';
import { renderFilePreview } from './events/upload-events.js';

document.addEventListener('DOMContentLoaded', () => {
  // add global listener
  document.addEventListener('click', (event) => {
    // nav events
    if (event.target.classList.contains('nav-link')) {
      loadPage(event.target.getAttribute('data-page'));
    }
  });

  // search events
  q('input#search').addEventListener('input', (e) => {
    renderSearchItems(e.target.value);
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

