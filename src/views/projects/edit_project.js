import 'bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import projectController from '../../controllers/project_controller';
import formEditProj from '../../events/projects/edit';

const editProject = (id) => {

  let colLeft = document.getElementById('colLeft');
  let modal = document.createElement('div');
  modal.classList.add('modal', 'fade');
  modal.setAttribute('id', 'modal-'+id);
  modal.setAttribute('tabindex', '-1');
  modal.setAttribute('role', 'dialog');
  modal.setAttribute('aria-labelledby', 'exampleModalCenterTitle');
  modal.setAttribute('aria-hidden', 'true');


  let modalDialog = document.createElement('div');
  modalDialog.classList.add('modal-dialog', 'modal-dialog-centered');
  modalDialog.setAttribute('role', 'document');



  let modalContent = document.createElement('div');
  modalContent.classList.add('modal-content');



  let modalHeader = document.createElement('div');
  modalHeader.classList.add('modal-header');



  let header = document.createElement('h5');
  header.classList.add('modal-title');
  header.setAttribute('id', 'editModal');
  header.innerHTML = 'Edit project';

  modalHeader.appendChild(header);

  let iconClose = document.createElement('button');
  iconClose.classList.add('close');
  iconClose.setAttribute('id', 'closeEditPro-form-'+id);
  iconClose.setAttribute('data-dismiss', 'modal');
  iconClose.setAttribute('aria-label', 'Close');

  modalHeader.appendChild(iconClose);

  let span = document.createElement('span');
  span.setAttribute('aria-hidden', 'true');
  span.innerHTML = '&times;';

  iconClose.appendChild(span);

  let form = document.createElement('form');
  form.setAttribute('id', 'form-'+id);
  form.setAttribute('action', '/');
  form.setAttribute('method', 'GET');


  let modalBody = document.createElement('div');
  modalBody.classList.add('modal-body');

  form.appendChild(modalBody);

  let formBroup = document.createElement('div');
  formBroup.classList.add('form-group');

  modalBody.appendChild(formBroup);

  let label = document.createElement('label');
  label.setAttribute('for', 'edit-p-form-'+id);
  label.innerHTML = 'Edit Project';

  formBroup.appendChild(label);

  const inputEditP = document.createElement('input');
  inputEditP.classList.add('form-control');
  inputEditP.setAttribute('type', 'text');
  inputEditP.setAttribute('id', 'edit-p-form-'+id);
  inputEditP.setAttribute('value', projectController.one(id).getP());
  inputEditP.setAttribute('required', 'required');

  formBroup.appendChild(inputEditP);

  let inputId = document.createElement('input');
  inputId.setAttribute('type', 'hidden');
  inputId.setAttribute('id', 'edit-id-form-'+id);
  inputId.setAttribute('value', id);

  formBroup.appendChild(inputId);

  let modalFooter = document.createElement('div');
  modalFooter.classList.add('modal-footer');

  let buttonClose = document.createElement('button');
  buttonClose.classList.add('btn', 'btn-secondary');
  buttonClose.setAttribute('data-dismiss', 'modal');
  buttonClose.innerHTML = 'Close';

  modalFooter.appendChild(buttonClose);

  let inputSubmit = document.createElement('input');
  inputSubmit.classList.add('btn', 'btn-primary');
  inputSubmit.setAttribute('name', 'btn-edit-project');
  inputSubmit.setAttribute('type', 'submit');
  inputSubmit.setAttribute('value', 'Submit');
  modalFooter.appendChild(inputSubmit);

  modalContent.appendChild(modalHeader);
  form.appendChild(modalFooter);
  modalContent.appendChild(form);
  modalDialog.appendChild(modalContent);
  modal.appendChild(modalDialog);
  colLeft.appendChild(modal);
  formEditProj('form-'+id);

};

export default editProject;
