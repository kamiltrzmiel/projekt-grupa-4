/* -------------------------------- VARIABLES ------------------------------- */
import { API_URL, IMG_URL, API_KEY, LANGUAGE } from './variables/constants';

/* --------------------------------- HEADER --------------------------------- */

/* --------------------------------- FOOTER --------------------------------- */
const dialog = document.getElementById('footer-dialog');
const hideDialogBtn = document.getElementById('hide');
const showDialogBtn = document.getElementById('show');
const body = document.querySelector("body");

showDialogBtn.addEventListener('click', () => {
  body.style.overflow = 'hidden';
  dialog.showModal()
});

const closeModal = () => {
  body.style.overflow = 'auto';
  dialog.close();
};

hideDialogBtn.addEventListener('click', closeModal);
dialog.addEventListener('close', closeModal);

