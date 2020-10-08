import Task from '../../models/task';
import taskController from '../../controllers/task_controller';
import showTask from '../../views/tasks/show_task';

const delTask = (idTask, idProject) => {
  let close = document.getElementById('close-del-'+idTask);
  taskController.del(idTask);
  close.click();
  showTask(idProject);
};

export default delTask;
