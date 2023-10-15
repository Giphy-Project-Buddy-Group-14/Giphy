import { gifFileTypes } from '../common/constants.js';
import { loadUploadGif } from '../requests/request-service.js';

/**
 * Shorthand for document.querySelector
 * @param {string} selector
 * @returns {Element}
 */
export const q = (selector) => document.querySelector(selector);

/**
 * Shorthand for document.querySelectorAll
 * @param {string} selector
 * @returns {NodeLists<Element>}
 */
export const qs = (selector) => document.querySelectorAll(selector);

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


export const progressMove = async (fileReader, file) => {
  const counter = 0;
  const uploadedFileCounter = q('.uploaded-file__counter');
  uploadedFileCounter.innerHTML = `0%`;
};

export const fileValidate = (fileType, fileSize) => {
  const isImage = gifFileTypes.filter((type) =>
    fileType.indexOf(`image/${type}`) !== -1);

  const uploadedFileIconText = q('.uploaded-file__icon-text');
  uploadedFileIconText.innerHTML = isImage[0];

  if (isImage.length !== 0) {
    if (fileSize <= 100000000) { // 100MB
      return true;
    }
    return alert('Please Your File Should be 100 Megabytes or Less');
  } // Else File Type
  return alert('Please make sure to upload A GIF File Type');
};

