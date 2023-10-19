
# PURRRPL GIFS

PURRRPL GIFS is a web application for discovering and managing GIFs. Users can explore trending GIFs, upload their own GIFs, mark GIFs as favorites, and search for specific GIFs. This README provides an overview of the project, its structure, and instructions for running the application.

## Table of Contents
- [PURRRPL GIFS](#purrrpl-gifs)
  - [Table of Contents](#table-of-contents)
  - [Features](#features)
  - [Project Structure](#project-structure)
  - [Installation](#installation)
  - [Usage](#usage)
  - [Contributing](#contributing)

## Features
- **Home Page:** View a selection of trending GIFs.
- **Trending Page:** Explore the latest trending GIFs.
- **Uploaded Page:** Access GIFs that you have uploaded.
- **Favorites Page:** Manage your favorite GIFs.
- **About Page:** Learn more about the project and its creators.
- **Upload Functionality:** Upload your own GIFs to the platform.
- **Search Functionality:** Search for GIFs by keywords.
- **Details Page:** Get detailed information about a specific GIF.
- **Favorite Toggling:** Mark GIFs as favorites or remove them from your favorites.
- **Load More:** Load additional GIFs on the Home and Trending pages.

## Project Structure
The project is structured as follows:
- **HTML:** The main HTML file is `index.html`, which serves as the structure of the web application.
- **CSS:** Styles are defined in the `main.css` file, and the project also uses external CSS libraries.
- **JavaScript:** The functionality of the application is powered by JavaScript. JavaScript files are organized in the `src` directory, and various modules and event listeners handle different aspects of the application.
- **Images:** GIFs and other images used in the project are stored in the `images` directory.
- **Constants:** Common constants are defined in `common/constants.js`.
- **Helpers:** Utility functions and the `q` function (for querying elements) are in `events/helpers.js`.
- **Navigation Events:** The logic for navigation and rendering pages is in `events/navigation-events.js`.
- **Upload Events:** Uploading GIFs and preview functionality are handled in `events/upload-events.js`.
- **Request Service:** Functions for making requests to fetch GIF data are in `requests/request-service.js`.
- **Views:** The structure and rendering of search results are defined in `views/search-view.js`.

## Installation
To run the PURRRPL GIFS web application on your local machine, follow these steps:
1. Clone the repository to your local machine:

2. Git clone https://github.com/Giphy-Project-Buddy-Group-14/Giphy.git


## Usage
Upon opening the application, you can navigate between different pages using the navigation links in the header.

The "Home" and "Trending" pages display trending GIFs, and you can load more GIFs on these pages.
Use the "Upload" button to upload your own GIFs.
The search functionality allows you to search for GIFs by keywords and Enter button.
Mark GIFs as favorites by clicking the heart icon, and they will appear on the "Favorites" page.
Clicking on a GIF will take you to the details page for that GIF.
## Contributing
If you'd like to contribute to this project, please follow these steps:

-  Fork the repository to your GitHub account.
- Clone the forked repository to your local machine.
- Create a new branch for your feature or bug fix.
- Make your changes and commit them with descriptive commit messages.
- Push your changes to your fork on GitHub.
- Create a pull request to the main repository.
- Wait for the maintainers to review your pull request.


