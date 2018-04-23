const canvas = document.getElementById('canvas');
const ctx = canvas.getContext('2d');

// let img = new Image();
let fileName = '';

const uploadFile = document.getElementById('upload-file');
const downloadBtn = document.getElementById('download-btn');
const revertBtn = document.getElementById('revert-btn');

document.addEventListener('click', e => {
  if (e.target.classList.contains('filter-btn')) {
    if (e.target.classList.contains('brightness-add')) {
      Caman('#canvas', img, function() {
        this.brightness(5).render();
      });
    } else if (e.target.classList.contains('brightness-remove')) {
      Caman('#canvas', img, function() {
        this.brightness(-5).render();
      });
    } else if (e.target.classList.contains('contrast-add')) {
      Caman('#canvas', img, function() {
        this.contrast(5).render();
      });
    } else if (e.target.classList.contains('contrast-remove')) {
      Caman('#canvas', img, function() {
        this.contrast(-5).render();
      });
    } else if (e.target.classList.contains('saturation-add')) {
      Caman('#canvas', img, function() {
        this.saturation(5).render();
      });
    } else if (e.target.classList.contains('saturation-remove')) {
      Caman('#canvas', img, function() {
        this.saturation(-5).render();
      });
    } else if (e.target.classList.contains('vibrance-add')) {
      Caman('#canvas', img, function() {
        this.vibrance(5).render();
      });
    } else if (e.target.classList.contains('vibrance-remove')) {
      Caman('#canvas', img, function() {
        this.vibrance(-5).render();
      });
    } else if (e.target.classList.contains('vintage-add')) {
      Caman('#canvas', img, function() {
        this.revert();
        this.vintage().render();
      });
    } else if (e.target.classList.contains('lomo-add')) {
      Caman('#canvas', img, function() {
        this.revert();
        this.lomo().render();
      });
    } else if (e.target.classList.contains('clarity-add')) {
      Caman('#canvas', img, function() {
        this.revert();
        this.clarity().render();
      });
    } else if (e.target.classList.contains('sin-city-add')) {
      Caman('#canvas', img, function() {
        this.revert();
        this.sinCity().render();
      });
    } else if (e.target.classList.contains('crossprocess-add')) {
      Caman('#canvas', img, function() {
        this.revert();
        this.crossProcess().render();
      });
    } else if (e.target.classList.contains('pinhole-add')) {
      Caman('#canvas', img, function() {
        this.revert();
        this.pinhole().render();
      });
    } else if (e.target.classList.contains('nostalgia-add')) {
      Caman('#canvas', img, function() {
        this.revert();
        this.nostalgia().render();
      });
    } else if (e.target.classList.contains('hermajesty-add')) {
      Caman('#canvas', img, function() {
        this.revert();
        this.herMajesty().render();
      });
    }
  } // end target filter btns
});

revertBtn.addEventListener('click', () => {
  Caman('#canvas', img, function() {
    this.revert();
  });
});

uploadFile.addEventListener('change', e => {
  const file = document.getElementById('upload-file').files[0];
  const allowedImageExt = /\.(jpe?g|png|gif)$/i; // only allow jpeg, png, and gif extensions

  if (allowedImageExt.test(file.name)) {
    const fileReader = new FileReader();
    fileName = file.name;
    fileReader.readAsDataURL(file);
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
  } else {
    alert('illegal file extension');
    return;
  }
});
