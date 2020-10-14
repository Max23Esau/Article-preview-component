if (document.getElementById('btnModal')) {
  var modalContainer = document.getElementById('ModalContainer');
  var btn = document.getElementById('btnModal');
  var body = document.getElementsByTagName('body')[0];

  btn.onclick = function () {
    modalContainer.style.display = 'block';
  };

  window.onclick = function (event) {
    if (event.target == modalContainer) {
      modalContainer.style.display = 'none';
    }
  };
}
