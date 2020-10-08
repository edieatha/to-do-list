import 'bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import formNewTask from '../../events/tasks/new';
import projectController from '../../controllers/project_controller';

const newTask = (idproject) => {
  let colLeft = document.getElementById('colLeft');
  let modal = document.createElement('div');

  modal.classList.add('modal', 'fade');
  modal.setAttribute('id', 'modalTask-'+idproject);
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
  header.innerHTML = projectController.one(idproject).getP();

  modalHeader.appendChild(header);

  let iconClose = document.createElement('button');
  iconClose.classList.add('close');
  iconClose.setAttribute('id', 'closeForm-add-task-'+idproject);
  iconClose.setAttribute('data-dismiss', 'modal');
  iconClose.setAttribute('aria-label', 'Close');

  modalHeader.appendChild(iconClose);

  let span = document.createElement('span');
  span.setAttribute('aria-hidden', 'true');
  span.innerHTML = '&times;';

  iconClose.appendChild(span);

  let form = document.createElement('form');
  form.setAttribute('id', 'add-task-'+idproject);



  let modalBody = document.createElement('div');
  modalBody.classList.add('modal-body');

  form.appendChild(modalBody);

  let formGroupone = document.createElement('div');
  formGroupone.classList.add('form-group');
  modalBody.appendChild(formGroupone);

  let label = document.createElement('label');
  label.setAttribute('for', 'inputForm-add-task-'+idproject);
  label.innerHTML = 'Title';

  formGroupone.appendChild(label);

  let inputForm = document.createElement('input');
  inputForm.classList.add('form-control');
  inputForm.setAttribute('type', 'text');
  inputForm.setAttribute('id', 'inputForm-add-task-'+idproject);
  inputForm.setAttribute('name', 'title');
  inputForm.setAttribute('required', 'required');

  formGroupone.appendChild(inputForm);

  let formGroupTwo = document.createElement('div');
  formGroupTwo.classList.add('form-group');
  modalBody.appendChild(formGroupTwo);

  let labelTwo = document.createElement('label');
  labelTwo.setAttribute('for', 'descForm-add-task-'+idproject);
  labelTwo.innerHTML = 'Description';

  formGroupTwo.appendChild(labelTwo);

  let description = document.createElement('textarea');
  description.classList.add('form-control');
  description.setAttribute('rows', '3');
  description.setAttribute('id', 'descForm-add-task-'+idproject);
  description.setAttribute('name', 'description');
  description.setAttribute('required', 'required');

  formGroupTwo.appendChild(description);

  let formGroupThree = document.createElement('div');
  formGroupThree.classList.add('form-group');
  modalBody.appendChild(formGroupThree);

  let labelThree = document.createElement('label');
  labelThree.setAttribute('for', 'dateForm-add-task-'+idproject);
  labelThree.innerHTML = 'Due date';

  formGroupThree.appendChild(labelThree);

  let date = document.createElement('input');
  date.classList.add('form-control');
  date.setAttribute('rows', '3');
  date.setAttribute('type', 'date');
  date.setAttribute('id', 'dateForm-add-task-'+idproject);
  date.setAttribute('name', 'date');
  date.setAttribute('required', 'required');

  formGroupThree.appendChild(date);

  let formGroupfour = document.createElement('div');
  formGroupfour.classList.add('form-group');
  modalBody.appendChild(formGroupfour);

  let labelfour = document.createElement('label');
  labelfour.setAttribute('for', 'selectForm-add-task-'+idproject);
  labelfour.innerHTML = 'Priority';

  formGroupfour.appendChild(labelfour);

  let select = document.createElement('select');
  select.classList.add('form-control');
  select.setAttribute('rows', '3');
  select.setAttribute('id', 'selectForm-add-task-'+idproject);
  select.setAttribute('required', 'required');
  let opt1 = document.createElement("option");
  opt1.text = 1;
  select.add(opt1, select[0]);
  let opt2 = document.createElement("option");
  opt2.text = 2;
  select.add(opt2, select[1]);
  let opt3 = document.createElement("option");
  opt3.text = 3;
  select.add(opt3, select[2]);

  formGroupfour.appendChild(select);

  let modalFooter = document.createElement('div');
  modalFooter.classList.add('modal-footer');

  let buttonClose = document.createElement('button');
  buttonClose.classList.add('btn', 'btn-secondary');
  buttonClose.setAttribute('data-dismiss', 'modal');
  buttonClose.innerHTML = 'Close';

  modalFooter.appendChild(buttonClose);

  let inputSubmit = document.createElement('input');
  inputSubmit.classList.add('btn', 'btn-primary');
  inputSubmit.setAttribute('name', 'submit');
  inputSubmit.setAttribute('type', 'submit');
  inputSubmit.setAttribute('value', 'submit');
  inputSubmit.setAttribute('id', 'submitTask-add-task-'+idproject);
  modalFooter.appendChild(inputSubmit);

  modalContent.appendChild(modalHeader);
  form.appendChild(modalFooter);
  modalContent.appendChild(form);
  modalDialog.appendChild(modalContent);
  modal.appendChild(modalDialog);
  colLeft.appendChild(modal);
  formNewTask('add-task-'+idproject, idproject);
};

export default newTask;
