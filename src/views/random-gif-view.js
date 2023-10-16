import { toGifSimple } from "./gif-views.js";

export const toRandomGifView = (gifs) => `
<div id="random">
<h3>No gif found but we picked this random gif for you:</h3>
<div id="gif-grid">
  ${gifs.map(toGifSimple).join('\n') ||
    '<p>Upload some gifs to see them here</p>'
    }
</div>
</div>
`;