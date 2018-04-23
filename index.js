const canvas = document.getElementById('canvas');
const ctx = canvas.getContext('2d');
let fileName;

const uploadFile = document.getElementById('upload-file');
const downloadBtn = document.getElementById('download-btn');
const revertBtn = document.getElementById('revert-btn');

document.addEventListener('click', e => {
  if (!fileName && e.target.classList.contains('btn')) {
    alert('Please upload a file first');
    return;
  }

  // heyoooooo, should probably make this a switch statement ¯\_(ツ)_/¯
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
    } else if (e.target.classList.contains('hue-add')) {
      Caman('#canvas', img, function() {
        this.hue(1).render();
      });
    } else if (e.target.classList.contains('hue-remove')) {
      Caman('#canvas', img, function() {
        this.revert();
      });
    } else if (e.target.classList.contains('sepia-add')) {
      Caman('#canvas', img, function() {
        this.sepia(5).render();
      });
    } else if (e.target.classList.contains('sepia-remove')) {
      Caman('#canvas', img, function() {
        this.sepia(-5).render();
      });
    } else if (e.target.classList.contains('sharpen-add')) {
      Caman('#canvas', img, function() {
        this.sharpen(5).render();
      });
    } else if (e.target.classList.contains('sharpen-remove')) {
      Caman('#canvas', img, function() {
        this.sharpen(-5).render();
      });
    } else if (e.target.classList.contains('noise-add')) {
      Caman('#canvas', img, function() {
        this.noise(3).render();
      });
    } else if (e.target.classList.contains('noise-remove')) {
      Caman('#canvas', img, function() {
        this.revert();
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
    } else if (e.target.classList.contains('sunrise-add')) {
      Caman('#canvas', img, function() {
        this.revert();
        this.sunrise().render();
      });
    } else if (e.target.classList.contains('hazyDays-add')) {
      Caman('#canvas', img, function() {
        this.revert();
        this.hazyDays().render();
      });
    } else if (e.target.classList.contains('hemingway-add')) {
      Caman('#canvas', img, function() {
        this.revert();
        this.hemingway().render();
      });
    } else if (e.target.classList.contains('love-add')) {
      Caman('#canvas', img, function() {
        this.revert();
        this.love().render();
      });
    }
  } // end target filter btns
  return;
});

revertBtn.addEventListener('click', () => {
  if (!fileName) {
    alert('Please upload a file first');
    return;
  }

  Caman('#canvas', img, function() {
    this.revert();
  });
  return;
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

downloadBtn.addEventListener('click', () => {
  if (fileName) {
    const fileExtension = `.${fileName.split('.').pop()}`;
    const lastIndex = fileName.lastIndexOf('.');
    const file = fileName.slice(0, lastIndex);
    const newFileName = `${file}-edited${fileExtension}`;

    download(canvas, newFileName, fileExtension);
    return;
  }

  return;
});

function download(canvas, fileName, fileExtension) {
  let e;
  const link = document.createElement('a');
  link.download = fileName;
  link.href = canvas.toDataURL(`image/${fileExtension}`, 0.8);

  e = new MouseEvent('click');
  link.dispatchEvent(e);
  return;
}
