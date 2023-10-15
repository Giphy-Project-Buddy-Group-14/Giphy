import {
  API_URL,
  SVILENA_API_KEY
} from "../common/constants.js";
import {
  q
} from "../events/helpers.js";

export const toTrendingView = (gifS) => {
  const gifSHTML = gifS.map((gif) => {
    return `<img class="gif-item" data-id="${gif.id}" src="${gif.images.fixed_height.url}" />`;
  }).join('\n');

return `
  <div id="trending">
    ${gifSHTML}
  </div>`
};