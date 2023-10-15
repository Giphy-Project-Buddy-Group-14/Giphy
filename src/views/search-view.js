import { toGifSimple } from './gif-views.js';

// Тука също трябва да се пренапише
export const toSearchView = (movies, searchTerm) => `
<div id="movies">
  <h1>Movies found for "${searchTerm}":</h1>
  <div class="content">
    ${movies.map(toGifSimple).join('\n') || '<p>Add some movies to favorites to see them here.</p>'}
  </div>
</div>
`;
