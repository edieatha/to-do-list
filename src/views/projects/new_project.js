import 'bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';

const newProject = () => {
  const sectionNewP = document.createElement('section');

  const button = document.createElement('button');
  button.classList.add('btn', 'btn-primary');
  button.setAttribute('data-toggle', 'modal');
  button.setAttribute('data-target', '#newProject');
  button.innerHTML = 'New Project';

  const rowShow = document.createElement('div');
  rowShow.classList.add('row', 'mx-auto');
  rowShow.setAttribute('id', 'rowShow');

  const colLeft = document.createElement('div');
  colLeft.classList.add('col');
  colLeft.setAttribute('id', 'colLeft');
  rowShow.appendChild(colLeft);

  const colright = document.createElement('div');
  colright.classList.add('col');
  colright.setAttribute('id', 'colright');
  rowShow.appendChild(colright);

  const newTask = document.createElement('div');
  newTask.classList.add('row', 'mx-auto');
  newTask.setAttribute('id', 'newTask');

  const modal = document.createElement('div');
  modal.classList.add('modal', 'fade');
  modal.setAttribute('id', 'newProject');
  modal.setAttribute('tabindex', '-1');
  modal.setAttribute('role', 'dialog');
  modal.setAttribute('aria-labelledby', 'exampleModalCenterTitle');
  modal.setAttribute('aria-hidden', 'true');

  const modalDialog = document.createElement('div');
  modalDialog.classList.add('modal-dialog', 'modal-dialog-centered');
  modalDialog.setAttribute('role', 'document');

  const modalContent = document.createElement('div');
  modalContent.classList.add('modal-content');

  const modalHeader = document.createElement('div');
  modalHeader.classList.add('modal-header');

  const header = document.createElement('h5');
  header.classList.add('modal-title');
  header.setAttribute('id', 'exampleModalLongTitle');
  header.innerHTML = 'New project';

  modalHeader.appendChild(header);

  const iconClose = document.createElement('button');
  iconClose.classList.add('close');
  iconClose.setAttribute('id', 'closeNewPro');
  iconClose.setAttribute('data-dismiss', 'modal');
  iconClose.setAttribute('aria-label', 'Close');

  modalHeader.appendChild(iconClose);

  const span = document.createElement('span');
  span.setAttribute('aria-hidden', 'true');
  span.innerHTML = '&times;';

  iconClose.appendChild(span);

  const form = document.createElement('form');
  form.setAttribute('id', 'add-project');
  form.setAttribute('action', '/');
  form.setAttribute('method', 'GET');

  const modalBody = document.createElement('div');
  modalBody.classList.add('modal-body');

  form.appendChild(modalBody);

  const formBroup = document.createElement('div');
  formBroup.classList.add('form-group');

  modalBody.appendChild(formBroup);

  const label = document.createElement('label');
  label.setAttribute('for', 'exampleFormControlInput1');
  label.innerHTML = 'Add Project';

  formBroup.appendChild(label);

  const inputText = document.createElement('input');
  inputText.classList.add('form-control');
  inputText.setAttribute('name', 'project');
  inputText.setAttribute('type', 'text');
  inputText.setAttribute('id', 'project');
  inputText.setAttribute('placeholder', 'Project');
  inputText.setAttribute('required', 'required');

  formBroup.appendChild(inputText);

  const modalFooter = document.createElement('div');
  modalFooter.classList.add('modal-footer');

  const buttonClose = document.createElement('button');
  buttonClose.classList.add('btn', 'btn-secondary');
  buttonClose.setAttribute('data-dismiss', 'modal');
  buttonClose.innerHTML = 'Close';

  modalFooter.appendChild(buttonClose);

  const inputSubmit = document.createElement('input');
  inputSubmit.classList.add('btn', 'btn-primary');
  inputSubmit.setAttribute('name', 'add-project');
  inputSubmit.setAttribute('type', 'submit');
  inputSubmit.setAttribute('value', 'Submit');

  modalFooter.appendChild(inputSubmit);

  modalContent.appendChild(modalHeader);
  form.appendChild(modalFooter);
  modalContent.appendChild(form);
  modalDialog.appendChild(modalContent);
  modal.appendChild(modalDialog);
  sectionNewP.appendChild(button);
  sectionNewP.appendChild(modal);
  sectionNewP.appendChild(rowShow);

  return sectionNewP;
};

export default newProject;
