export const toAboutView = () => `
<div id="about">
  <div class="content">
    <h2>About the app</h2>
    <h2>Authors: Telerik Academy</h2>
    <h3>${new Date().toISOString().slice(0, 10)
      .split('-').reverse().join('/')}</h3>
  </div>
</div>
`;
