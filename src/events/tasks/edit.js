import Task from '../../models/task';
import taskController from '../../controllers/task_controller';
import showTask from '../../views/tasks/show_task';

const formEditTask = (id, idproject) => {
  let formEdittask = document.getElementById('view-edit-'+id);
  let closeEditTask = document.getElementById('closeForm-edit-task-'+id);
  formEdittask.addEventListener('submit', (e) => {
    let title = document.getElementById("inputForm-edit-task-"+id).value;
    let description = document.getElementById("descForm-edit-task-"+id).value;
    let date = document.getElementById("dateForm-edit-task-"+id).value;
    let select = document.getElementById("selectForm-edit-task-"+id).value;
    let task = Task(id, title, description, date, select, idproject);
    taskController.upDate(task);
    closeEditTask.click();
    showTask(idproject);
    e.preventDefault();
  });

};

export default formEditTask;
