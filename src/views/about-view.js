/**
 * Generates the HTML content for the 'About' view.
 *
 * @returns {string} - The HTML template string for the 'About' view.
 */
export const toAboutView = () => `
<div id="about">
  <div class="content">
    
    <div class="cards">
      <div class="card">
        <div class="photo">
          <img src="./images/tihomir.jpg" width="400" height="400" />
          <div class="name">Tihomir Nikolov</div>
        </div>
        <div class="description">
        Software Engineer who thrives on the perfect blend of work and play, 
        relishing quality time with friends.
        </div>
      </div>

      <div class="card">
        <div class="photo">
          <img src="./images/sis.jpg" width="400" height="400" />
          <div class="name">Svilena Slavev</div>
        </div>
        <div class="description"S>
        I like long walks in the forest, JavaScript and HTML. 
        CSS ... not so much!
        ps. "You should always know where your towel is!"
        </div>
      </div>

      <div class="card">
        <div class="photo">
          <img src="./images/linkedin_pic.png" width="400" height="400" />
          <div class="name">Nikolay Hadzhiyski</div>
        </div>
        <div class="description"S>
        Javascript Software Engineer
        </div>
      </div>
    </div>
  </div>
</div>
`;
