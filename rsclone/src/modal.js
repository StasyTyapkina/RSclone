export const modal = document.querySelector('.modal_container');
export const btn = document.querySelector('.modal_bttn');
export const close = document.querySelector('.close_bttn');

btn.onclick = function () {
  modal.style.display = 'block';
};

close.onclick = function () {
  modal.style.display = 'none';
  document.querySelector('.video').pause();
};

window.onclick = function (e) {
  if (e.target === modal) {
    modal.style.display = 'none';
    document.querySelector('.video').pause();
  }
};
