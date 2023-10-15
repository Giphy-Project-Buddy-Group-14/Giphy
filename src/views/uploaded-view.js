import { toGifSimple } from './gif-views.js';

export const toUploadedView = (gifs) => `
<div id="uploaded">
<h1>Your uploaded Gifs:</h1>
<div class="content">
  ${gifs.map(toGifSimple).join('\n') || '<p>Upload some gifs to see them here</p>'}
</div>
</div>
`;
