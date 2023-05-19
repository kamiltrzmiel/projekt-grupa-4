/* -------------------------------- VARIABLES ------------------------------- */
import './variables/constants';

/* --------------------------------- HEADER --------------------------------- */

/* --------------------------------- FOOTER --------------------------------- */
const dialog = document.getElementById('footer-dialog');
const hideDialogBtn = document.getElementById('hide');
const showDialogBtn = document.getElementById('show');

showDialogBtn.addEventListener('click', () => dialog.showModal());
hideDialogBtn.addEventListener('click', () => dialog.close());
