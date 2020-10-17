var modalContainer = document.getElementById('ModalContainer');
var btn = document.getElementById('btnModal');
var share = document.getElementById('userDescriptionContent');
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
