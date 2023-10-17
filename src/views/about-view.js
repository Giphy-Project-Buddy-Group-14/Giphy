/**
 * Generates the HTML content for the 'About' view.
 *
 * @returns {string} - The HTML template string for the 'About' view.
 */
export const toAboutView = () => `
<div id="about">
  <div class="content">
    <h1>About the app</h1>
    <h3>${new Date()
    .toISOString()
    .slice(0, 10)
    .split('-')
    .reverse()
    .join('/')}</h3>

    <div class="cards">
      <div class="card">
        <div class="photo">
          <img src="./images/bg.png" width="400" height="200" />
          <div class="name">John Smith</div>
        </div>
        <div class="description"S>
         Lorem lipsum dolor sit ement, lorem lipsum dolor sit ement, lorem lipsum dolor sit ement ...
        </div>
      </div>

      <div class="card">
        <div class="photo">
          <img src="./images/bg.png" width="400" height="200" />
          <div class="name">John Smith</div>
        </div>
        <div class="description"S>
        Lorem lipsum dolor sit ement, lorem lipsum dolor sit ement, lorem lipsum dolor sit ement ...
        </div>
      </div>

      <div class="card">
        <div class="photo">
          <img src="./images/bg.png" width="400" height="200" />
          <div class="name">John Smith</div>
        </div>
        <div class="description"S>
        Lorem lipsum dolor sit ement, lorem lipsum dolor sit ement, lorem lipsum dolor sit ement ...
        </div>
      </div>
    </div>
  </div>
</div>
`;
