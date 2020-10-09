import 'bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import taskController from '../../controllers/task_controller';
import formEditTask from '../../events/tasks/edit';

const editTask = (idTask, idProject, project) => {
  const task = taskController.one(idTask);
  const colLeft = document.getElementById('colLeft');
  const modal = document.createElement('div');

  modal.classList.add('modal', 'fade');
  modal.setAttribute('id', `modalEditTask-${idTask}`);
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
  header.setAttribute('id', 'editModal');
  header.innerHTML = project;

  modalHeader.appendChild(header);

  const iconClose = document.createElement('button');
  iconClose.classList.add('close');
  iconClose.setAttribute('id', `closeForm-edit-task-${idTask}`);
  iconClose.setAttribute('data-dismiss', 'modal');
  iconClose.setAttribute('aria-label', 'Close');

  modalHeader.appendChild(iconClose);

  const span = document.createElement('span');
  span.setAttribute('aria-hidden', 'true');
  span.innerHTML = '&times;';

  iconClose.appendChild(span);

  const form = document.createElement('form');
  form.setAttribute('id', `view-edit-${idTask}`);

  const modalBody = document.createElement('div');
  modalBody.classList.add('modal-body');

  form.appendChild(modalBody);

  const formGroupone = document.createElement('div');
  formGroupone.classList.add('form-group');
  modalBody.appendChild(formGroupone);

  const label = document.createElement('label');
  label.setAttribute('for', `inputForm-edit-task-${idTask}`);
  label.innerHTML = 'Title';

  formGroupone.appendChild(label);

  const inputForm = document.createElement('input');
  inputForm.classList.add('form-control');
  inputForm.setAttribute('type', 'text');
  inputForm.setAttribute('id', `inputForm-edit-task-${idTask}`);
  inputForm.setAttribute('name', 'title');
  inputForm.setAttribute('required', 'required');
  inputForm.setAttribute('value', task.getTitle());

  formGroupone.appendChild(inputForm);

  const formGroupTwo = document.createElement('div');
  formGroupTwo.classList.add('form-group');
  modalBody.appendChild(formGroupTwo);

  const labelTwo = document.createElement('label');
  labelTwo.setAttribute('for', `descForm-edit-task-${idTask}`);
  labelTwo.innerHTML = 'Description';

  formGroupTwo.appendChild(labelTwo);

  const description = document.createElement('textarea');
  description.classList.add('form-control');
  description.setAttribute('rows', '3');
  description.setAttribute('id', `descForm-edit-task-${idTask}`);
  description.value = task.getDescription();

  formGroupTwo.appendChild(description);

  const formGroupThree = document.createElement('div');
  formGroupThree.classList.add('form-group');
  modalBody.appendChild(formGroupThree);

  const labelThree = document.createElement('label');
  labelThree.setAttribute('for', `dateForm-edit-task-${idTask}`);
  labelThree.innerHTML = 'Due date';

  formGroupThree.appendChild(labelThree);

  const date = document.createElement('input');
  date.classList.add('form-control');
  date.setAttribute('rows', '3');
  date.setAttribute('type', 'date');
  date.setAttribute('id', `dateForm-edit-task-${idTask}`);
  date.setAttribute('name', 'date');
  date.setAttribute('required', 'required');
  date.value = task.getDate();

  formGroupThree.appendChild(date);

  const formGroupfour = document.createElement('div');
  formGroupfour.classList.add('form-group');
  modalBody.appendChild(formGroupfour);

  const labelfour = document.createElement('label');
  labelfour.setAttribute('for', `selectForm-edit-task-${idTask}`);
  labelfour.innerHTML = 'Priority';

  formGroupfour.appendChild(labelfour);

  const select = document.createElement('select');
  select.classList.add('form-control');
  select.setAttribute('rows', '3');
  select.setAttribute('id', `selectForm-edit-task-${idTask}`);
  select.setAttribute('required', 'required');
  const opt1 = document.createElement('option');
  opt1.text = 1;
  select.add(opt1, select[0]);
  const opt2 = document.createElement('option');
  opt2.text = 2;
  select.add(opt2, select[1]);
  const opt3 = document.createElement('option');
  opt3.text = 3;
  select.add(opt3, select[2]);
  select.value = task.getPriotity();

  formGroupfour.appendChild(select);

  const modalFooter = document.createElement('div');
  modalFooter.classList.add('modal-footer');

  const buttonClose = document.createElement('button');
  buttonClose.classList.add('btn', 'btn-secondary');
  buttonClose.setAttribute('data-dismiss', 'modal');
  buttonClose.innerHTML = 'Close';

  modalFooter.appendChild(buttonClose);

  const inputSubmit = document.createElement('input');
  inputSubmit.classList.add('btn', 'btn-primary');
  inputSubmit.setAttribute('name', 'submit');
  inputSubmit.setAttribute('type', 'submit');
  inputSubmit.setAttribute('value', 'submit');
  inputSubmit.setAttribute('id', `submitTask-edit-task-${idTask}`);
  modalFooter.appendChild(inputSubmit);

  modalContent.appendChild(modalHeader);
  form.appendChild(modalFooter);
  modalContent.appendChild(form);
  modalDialog.appendChild(modalContent);
  modal.appendChild(modalDialog);
  colLeft.appendChild(modal);
  formEditTask(idTask, idProject);
};

export default editTask;
