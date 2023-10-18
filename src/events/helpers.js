import { gifFileTypes } from '../common/constants.js';
import { loadUploadGif } from '../requests/request-service.js';

/**
 * Shorthand for document.querySelectorAll.
 *
 * @param {string} selector - The CSS selector to query the DOM.
 * @returns {NodeListOf<Element>} - A list of elements that match the selector.
 */

export const q = (selector) => document.querySelector(selector);

/**
 * Shorthand for document.querySelectorAll
 * @param {string} selector
 * @returns {NodeLists<Element>}
 */
export const qs = (selector) => document.querySelectorAll(selector);

/**
 * Set the active navigation link based on the current page.
 *
 * @param {string} page - The current page to set as active.
 */

export const setActiveNav = (page) => {
  const navs = qs('a.nav-link');

  Array
      .from(navs)
      .forEach((element) => element
          .getAttribute('data-page') === page ?
      element.classList.add('active') :
      element.classList.remove('active'),
      );
};

/**
 * Validate the file type and size.
 *
 * @param {string} fileType - The type of the file.
 * @param {number} fileSize - The size of the file in bytes.
 * @returns {boolean} - True if the file is valid, false otherwise.
 */
export const fileValidate = (fileType, fileSize) => {
  const isImage = gifFileTypes.filter((type) =>
    fileType.indexOf(`image/${type}`) !== -1);

  const uploadedFileIconText = q('.uploaded-file__icon-text');
  uploadedFileIconText.innerHTML = isImage[0];

  if (isImage.length !== 0) {
    if (fileSize <= 100000000) { // 100MB
      return true;
    }
    // eslint-disable-next-line no-alert
    return alert('Please Your File Should be 100 Megabytes or Less');
  } // Else File Type
  // eslint-disable-next-line no-alert
  return alert('Please make sure to upload A GIF File Type');
};

