import { fileValidate, progressMove, q } from "./helpers.js";

export const renderFilePreview = (file) => {
  const fileReader = new FileReader();
  const fileType = file.type;
  const fileSize = file.size;

  if (fileValidate(fileType, fileSize)) {
    q('#dropZoon').classList.add('drop-zoon--Uploaded');


    q('#loadingText').style.display = 'block';
    q('#previewImage').style.display = 'none';


    q('#uploadedFile').classList.remove('uploaded-file--open');
    q('#uploadedFileInfo').classList.remove('uploaded-file__info--active');

    // After File Reader Loaded
    fileReader.addEventListener('load', function() {
      const uploadArea = q('#uploadArea');

      uploadArea.classList.add('upload-area--open');

      q('#loadingText').style.display = 'none';
      q('#previewImage').style.display = 'block';

      const fileDetails = q('#fileDetails');

      fileDetails.classList.add('file-details--open');
      q('#uploadedFile').classList.add('uploaded-file--open');
      q('#uploadedFileInfo').classList.add('uploaded-file__info--active');

      q('#previewImage').setAttribute('src', fileReader.result);

      const uploadedFileName = q('.uploaded-file__name');
      uploadedFileName.innerHTML = file.name;

      progressMove();
    });

    fileReader.readAsDataURL(file);
  } else {
    this;
  }
};

