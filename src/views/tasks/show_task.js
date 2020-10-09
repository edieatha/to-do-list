import 'bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import taskController from '../../controllers/task_controller';
import projectController from '../../controllers/project_controller';
import editTask from './edit_task';
import deleteTask from './delete_task';
import viewTask from './view_task';
import delTask from '../../events/tasks/del';

const showTask = (idProject) => {
  const tasks = taskController.findByProject(idProject);
  const colRight = document.getElementById('colright');
  colRight.innerHTML = '';
  if (tasks != null) {
    for (let i = 0; i < tasks.length; i += 1) {
      colRight.innerHTML += `<div class="card mt-2 mx-auto">
      <div class="card-header d-flex justify-content-center">
      Project: ${projectController.one(idProject).getP()}
      </div>
      <div class="card-body d-flex justify-content-center">
      Title: ${tasks[i].title} Due date: ${tasks[i].date}
      </div>
      <div class="card-footer d-flex justify-content-around">
      <button id = "${tasks[i].id}" type="button" class="btn btn-warning editProjectB" data-toggle="modal" data-target="#modalEditTask-${tasks[i].id}">Edit</button>
      <button id = "${tasks[i].id}" type="button" class="btn btn-danger" data-toggle="modal" data-target="#modal-remove-${tasks[i].id}">Remove</button>
      <button id = "${tasks[i].id}" type="button" class="btn btn-info newTaskB" data-toggle="modal" data-target="#modalViewTask-${tasks[i].id}">Show</button>
      </div>
      </div>`;
      editTask(tasks[i].id, idProject, projectController.one(idProject).getP());
      deleteTask(tasks[i].id, tasks[i].title);
      viewTask(tasks[i].id, projectController.one(idProject).getP());
    }
  }

  if (tasks != null) {
    const del = document.getElementsByClassName('remove-task');
    for (let i = 0; i < del.length; i += 1) {
      del[i].addEventListener('click', delTask.bind(del[i], tasks[i].id, idProject));
    }
  }
};

export default showTask;
