import { gifFileTypes } from '../common/constants.js';

/**
 * Generates an HTML view for the upload area where users can upload GIF files.
 *
 * @returns {string} - The HTML content representing the upload area view.
 */
export const toUploadView = () => `
<!-- Upload Area -->
<div id="uploadArea" class="upload-area">
  <!-- Header -->
  <div class="upload-area__header">
    <h1 class="upload-area__title">Upload your file</h1>
    <p class="upload-area__paragraph">
      File should be a GIF
      <strong class="upload-area__tooltip">
        Like
        <span class="upload-area__tooltip-data">${[...gifFileTypes].join(', .')}</span> <!-- Data Will be Comes From Js -->
      </strong>
    </p>
  </div>
  <!-- End Header -->

  <!-- Drop Zoon -->
  <div id="dropZoon" class="upload-area__drop-zoon drop-zoon">
    <span class="drop-zoon__icon">
      <i class='bx bxs-file-image'></i>
    </span>
    <p class="drop-zoon__paragraph">Drop your file here or Click to browse</p>
    <img src="" alt="Preview Image" id="previewImage" class="drop-zoon__preview-image" draggable="false">
    <input type="file" id="fileInput" class="drop-zoon__file-input" accept="image/*" multiple>
  </div>
  <!-- End Drop Zoon -->

  <!-- File Details -->
  <div id="fileDetails" class="upload-area__file-details file-details">
    <h3 class="file-details__title">Uploading File</h3>

    <div id="uploadedFile" class="uploaded-file">
      <div class="uploaded-file__icon-container">
        <i class='bx bxs-file-blank uploaded-file__icon'></i>
        <span class="uploaded-file__icon-text"></span> 
        <!-- Data Will be Comes From Js -->
      </div>

      <div id="uploadedFileInfo" class="uploaded-file__info">
        <span class="uploaded-file__name">Project 1</span>
        <span class="uploaded-file__counter">0%</span>
      </div>
    </div>
  </div>
  <!-- End File Details -->
</div>
<!-- End Upload Area -->
`;
