var modalContainer = document.getElementById('ModalContainer');
var btn = document.getElementById('btnModal');
var btnContainer = document.getElementById('userInfo__button');
var share = document.getElementById('userDescription');
var span = document.getElementsByClassName('close')[0];

if (document.getElementById('btnModal')) {
  btn.onclick = function () {
    modalContainer.style.display = 'grid';
    share.classList.add('hide');
    btnContainer.classList.add('hide');
  };

  span.onclick = function () {
    modalContainer.style.display = 'none';
    share.classList.remove('hide');
    btnContainer.classList.remove('hide');
  };
}
