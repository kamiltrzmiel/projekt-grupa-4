/* --------------------------------- FOOTER --------------------------------- */
const dialog = document.getElementById('footer-dialog');
const hideDialogBtn = document.getElementById('hide');
const showDialogBtn = document.getElementById('show');
const body = document.querySelector('body');

showDialogBtn.addEventListener('click', () => {
  body.style.overflow = 'hidden';
  dialog.showModal();
});

const closeModal = () => {
  body.style.overflow = 'auto';
  dialog.close();
};

hideDialogBtn.addEventListener('click', closeModal);
dialog.addEventListener('close', closeModal);
