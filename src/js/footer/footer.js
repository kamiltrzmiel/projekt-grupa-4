const dialog = document.getElementById('footer-dialog');
const hideDialogBtn = document.getElementById('hide');
const showDialogBtn = document.getElementById('show');

showDialogBtn.addEventListener('click', () => {
  document.querySelector("body").style.overflow = 'hidden';
  dialog.showModal()
});
hideDialogBtn.addEventListener('click', () => {
  document.querySelector("body").style.overflow = 'auto';
  dialog.close()
});
