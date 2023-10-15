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
  <h1>${gif.title}</h1>
  <div class="content">
    ${toGifDetailed(gif)}
  </div>
</div>
`;
// Тука трябва да се направят корекции понеже е за филмите

export const toGifSimple = (gifUrl) => `
<div class="gif">
  <img src="${gifUrl}"><br>
</div>
`;

const toGifDetailed = (gif) => `
<div class="gif-detailed">
  <div class="poster">
    <img src="${gif.images.original.url}">
  </div>
  <div class="gif-info">
    <p>
      <img src="${gif.user.avatar_url}" width="50" hight="50"/>
    </p>
    <p>User: ${gif.user.display_name}</p>
    <p>Description: ${gif.user.description}</p>
    <p>Profile GiPhy: ${gif.user.profile_url}</p>
    <p>Profile Instagram: ${gif.user.instagram_url}</p>
    <p>Rating: ${gif.user.rating}</p>
  </div>
</div>
`;
