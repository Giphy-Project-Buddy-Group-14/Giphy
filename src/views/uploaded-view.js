import { toGifSimpleForUploads } from './gif-views.js';

export const toUploadedView = (gifs) => `
<div id="uploaded">
<h1>Your uploaded Gifs:</h1>
<div id="gif-grid">
  ${gifs.map(toGifSimpleForUploads).join('\n') || '<p>Upload some gifs to see them here</p>'}
</div>
</div>
`;
