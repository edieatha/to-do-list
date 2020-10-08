import Task from '../../models/task';
import taskController from '../../controllers/task_controller';
import showTask from '../../views/tasks/show_task';

const formNewTask = (idlabel, idproject) => {
  let formaddtask = document.getElementById(idlabel);
  let closeNewTask = document.getElementById('closeForm-'+idlabel);
  formaddtask.addEventListener('submit', (e) => {
    let title = document.getElementById("inputForm-"+idlabel).value;
    let description = document.getElementById("descForm-"+idlabel).value;
    let date = document.getElementById("dateForm-"+idlabel).value;
    let select = document.getElementById("selectForm-"+idlabel).value;
    taskController.create(title, description, date, select, idproject);
    closeNewTask.click();
    formaddtask.reset();
    showTask(idproject);
    e.preventDefault();
  });

};

export default formNewTask;
