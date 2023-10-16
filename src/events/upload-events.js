import { loadUploadGif } from '../requests/request-service.js';
import { fileValidate, q } from './helpers.js';

/**
 * Retrieves a file preview, validates the file, and initiates the upload process.
 *
 * @param {File} file - The File object to be previewed and uploaded.
 */
export const renderFilePreview = (file) => {
  const fileReader = new FileReader();
  const fileType = file.type;
  const fileSize = file.size;

  if (fileValidate(fileType, fileSize)) {
    q('#dropZoon').classList.add('drop-zoon--Uploaded');

    q('#previewImage').style.display = 'none';

    q('#uploadedFile').classList.remove('uploaded-file--open');
    q('#uploadedFileInfo').classList.remove('uploaded-file__info--active');

    // After File Reader Loaded
    fileReader.addEventListener('load', async () => {
      const uploadArea = q('#uploadArea');

      uploadArea.classList.add('upload-area--open');

      q('#previewImage').style.display = 'block';

      const fileDetails = q('#fileDetails');

      fileDetails.classList.add('file-details--open');
      q('#uploadedFile').classList.add('uploaded-file--open');
      q('#uploadedFileInfo').classList.add('uploaded-file__info--active');

      q('#previewImage').setAttribute('src', fileReader.result);

      const uploadedFileName = q('.uploaded-file__name');
      uploadedFileName.innerHTML = file.name;
      try {
        const response = await loadUploadGif(file);
        console.log(response);
        const id = JSON.parse(response).data.id;

        if (localStorage.getItem('uploadedGifs')) {
          console.log('here');
          const uploadedArr = JSON.parse(localStorage.getItem('uploadedGifs'));
          uploadedArr.push(id);
          localStorage.setItem('uploadedGifs', JSON.stringify(uploadedArr));
        } else {
          localStorage.setItem('uploadedGifs', JSON.stringify([id]));
        }
      } catch (error) {
        console.log(error);
      }
    });

    fileReader.readAsDataURL(file);
  } else {
    this;
  }
};
