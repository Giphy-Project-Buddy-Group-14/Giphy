import {
  API_URL, SVILENA_API_KEY
} from "../common/constants.js";
import {
  q
} from "../events/helpers.js";

export const toTrendingView = () => {

  fetchTrendingGifS().then((data) => {
    const gifSHTML = data.map((gif) => {
      return `<img  src="${gif.images.fixed_height.url}" />`;
    }).join('\n');

    q('#trending').innerHTML = gifSHTML;
    console.log(data);
  });

  return `
  <div id="trending">
    <p>Trending</p>
  </div>
  `
};

const fetchTrendingGifS = () => {
  const trendingGifS = fetch(`${API_URL}/trending?api_key=${SVILENA_API_KEY}&limit=20`);
  return trendingGifS.then(response => response.json())
    .then(response => response.data)
    .catch((error) => {
      console.error(error);
    });
};