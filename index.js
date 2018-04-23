const canvas = document.getElementById('canvas');
const ctx = canvas.getContext('2d');

let img = new Image();
let fileName = '';

const uploadFile = document.getElementById('upload-file');
const downloadBtn = document.getElementById('download-btn');
const revertBtn = document.getElementById('revertn-btn');

uploadFile.addEventListener('change', e => {
  const file = document.getElementById('upload-file').files[0];
  const fileReader = new FileReader();

  if (file) {
    fileName = file.name;
    fileReader.readAsDataURL(file);
  }

  fileReader.addEventListener(
    'load',
    () => {
      img = new Image();
      img.src = fileReader.result;
      img.onload = function() {
        canvas.width = img.width;
        canvas.height = img.height;
        ctx.drawImage(img, 0, 0, img.width, img.height);
        // remove per caman api
        canvas.removeAttribute('data-caman-id');
      };
    },
    false
  );
});
