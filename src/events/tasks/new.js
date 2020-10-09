import taskController from '../../controllers/task_controller';
import showTask from '../../views/tasks/show_task';

const formNewTask = (idlabel, idproject) => {
  const formaddtask = document.getElementById(idlabel);
  const closeNewTask = document.getElementById(`closeForm-${idlabel}`);
  formaddtask.addEventListener('submit', (e) => {
    const title = document.getElementById(`inputForm-${idlabel}`).value;
    const description = document.getElementById(`descForm-${idlabel}`).value;
    const date = document.getElementById(`dateForm-${idlabel}`).value;
    const select = document.getElementById(`selectForm-${idlabel}`).value;
    taskController.create(title, description, date, select, idproject);
    closeNewTask.click();
    formaddtask.reset();
    showTask(idproject);
    e.preventDefault();
  });
};

export default formNewTask;
