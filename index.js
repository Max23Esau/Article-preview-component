var modalContainer = document.getElementById('ModalContainer');
var btn = document.getElementById('btnModal');
var btnContainer = document.getElementById('userInfo__button');
var share = document.getElementById('userDescription');
var span = document.getElementsByClassName('close')[0];

if (window.matchMedia('(min-width: 890px)').matches) {
  /* La pantalla tiene al menos 890 píxeles de ancho */
  if (document.getElementById('btnModal')) {
    btn.onclick = function () {
      modalContainer.style.display = 'grid';
    };

    span.onclick = function () {
      modalContainer.style.display = 'none';
    };
  }
} else {
  /* La pantalla tiene menos de 890 píxeles de ancho */
  if (document.getElementById('btnModal')) {
    btn.onclick = function () {
      modalContainer.style.display = 'grid';
      share.classList.add('hide');
      modalContainer.classList.add('active');
    };

    span.onclick = function () {
      modalContainer.style.display = 'none';
      share.classList.remove('hide');
    };
  }
}

if (window.matchMedia('(min-width: 449px)').matches) {
  if (document.getElementById('btnModal')) {
    btn.onclick = function () {
      modalContainer.style.display = 'grid';
      share.classList.add('hide');
      btnContainer.classList.add('hide');

      span.onclick = function () {
        modalContainer.style.display = 'none';
        share.classList.remove('hide');
        btnContainer.classList.remove('hide');
      };
    }
    };
}