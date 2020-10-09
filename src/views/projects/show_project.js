import 'bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import projectController from '../../controllers/project_controller';
import editProject from './edit_project';
import newTask from '../tasks/new_task';
import showTask from '../tasks/show_task';
import deleteProject from './delete_project';
import delProject from '../../events/projects/del';

const showProject = (projects) => {
  if (projects != null) {
    const colLeft = document.getElementById('colLeft');
    colLeft.innerHTML = '';
    for (let i = 0; i < projects.length; i += 1) {
      colLeft.innerHTML += `<div class="card mt-2 mx-auto">
      <div class="card-header d-flex justify-content-center">
      ${projects[i].project}
      </div>
      <div class="card-body d-flex justify-content-around">
      <button id = "${projects[i].id}" type="button" class="btn btn-warning editProjectB" data-toggle="modal" data-target="#modal-${projects[i].id}">Edit</button>
      <button id = "${projects[i].id}" type="button" class="btn btn-danger" data-toggle="modal" data-target="#modal-remove-proj-${projects[i].id}">Remove</button>
      <button id = "${projects[i].id}" type="button" class="btn btn-outline-secondary newTaskB" data-toggle="modal" data-target="#modalTask-${projects[i].id}">Add Task</button>
      <button id = "task-${projects[i].id}" type="button" class="btn btn-info newTaskB">List Tasks</button>
      </div>
      </div>`;
      deleteProject(projects[i].id, projects[i].project);
    }
  }

  if (projectController.all() != null) {
    for (let i = 0; i < projectController.all().length; i += 1) {
      const { id } = projectController.all()[i];
      const task = document.getElementById(`task-${id}`);
      const del = document.getElementsByClassName('remove-proj');
      editProject(id);
      newTask(id);
      task.addEventListener('click', showTask.bind(task, id));
      del[i].addEventListener('click', delProject.bind(del[i], id));
    }
  }
};

export default showProject;
