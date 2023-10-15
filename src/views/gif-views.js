import { renderFavoriteStatus } from '../events/favorites-events.js';

export const toGifFromCategoryView = (category, gifs) => `
<div id="gifs">
  <h1>${category.name} gifs:</h1>
  <div class="content">
    ${gifs.map(toGifSimple).join('\n')}
  </div>
</div>
`;

export const toSingleGifView = (gif) => `
<div id="gifs">
  <h1>${gif.title} (${gif.year})</h1>
  <div class="content">
    ${toGifDetailed(gif)}
  </div>
</div>
`;
// Тука трябва да се направят корекции понеже е за филмите

export const toGifSimple = (gif) => `
<div class="gif">
  <h1>${gif.title}</h1>
  <h2>${gif.year}</h2>
  <img src="${gif.poster}"><br>
  <button class="view-gif-btn" data-gif-id="${gif.id}">View details</button>
  ${renderFavoriteStatus(gif.id)}
</div>
`;

const toGifDetailed = (gif) => `
<div class="gif-detailed">
  <div class="poster">
    <img src="${gif.poster}">
  </div>
  <div class="gif-info">
    <p>Genre: ${gif.genre}</p>
    <p>Director: ${gif.director}</p>
    <p>Staring: ${gif.stars.join(', ')}</p>
    <p>Plot: ${gif.description}</p>
  </div>
</div>
`;
