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
  let counter = 0;
  const uploadedFileCounter = q('.uploaded-file__counter');
  uploadedFileCounter.innerHTML = `0%`;

  const counterIncrease = setInterval(() => {
    if (counter === 100) {
      clearInterval(counterIncrease);
    } else {
      counter += 10;
      uploadedFileCounter.innerHTML = `${counter}%`;
    }
  }, 100);

  const onProgress = (event) => {
    if (event.lengthComputable) {
      // Calculate the percentage based on the total and loaded bytes
      const percentage = (event.loaded / event.total) * 100;
      counter = Math.min(percentage, 100);
      uploadedFileCounter.innerHTML = `${counter.toFixed(2)}%`;
    }
  };

  try {
    await loadUploadGif(fileReader, file, onProgress);
    // Clear the progress bar
    clearInterval(counterIncrease);
    uploadedFileCounter.innerHTML = '100%';
  } catch (error) {
    console.log(error);
  }
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

