import Task from '../../models/task';
import taskController from '../../controllers/task_controller';
import showTask from '../../views/tasks/show_task';

const formEditTask = (id, idproject) => {
  const formEdittask = document.getElementById(`view-edit-${id}`);
  const closeEditTask = document.getElementById(`closeForm-edit-task-${id}`);
  formEdittask.addEventListener('submit', (e) => {
    const title = document.getElementById(`inputForm-edit-task-${id}`).value;
    const description = document.getElementById(`descForm-edit-task-${id}`).value;
    const date = document.getElementById(`dateForm-edit-task-${id}`).value;
    const select = document.getElementById(`selectForm-edit-task-${id}`).value;
    const task = Task(id, title, description, date, select, idproject);
    taskController.upDate(task);
    closeEditTask.click();
    showTask(idproject);
    e.preventDefault();
  });
};

export default formEditTask;
