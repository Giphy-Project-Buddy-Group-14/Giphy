export const toAboutView = () => `
<div id="about">
  <div class="content">
    <h1>About the app</h1>
    <h2>Authors: Telerik Academy</h2>
    <h2>${new Date().toISOString().slice(0, 10)
      .split('-').reverse().join('/')}</h2>
  </div>
</div>
`;
