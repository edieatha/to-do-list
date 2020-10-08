import Task from '../models/task';
import Project from '../models/project';
import projectController from '../controllers/project_controller';
import taskController from '../controllers/task_controller';

const db = () => {
  if("project" in localStorage === false){
    projectController.create('HTML');
  }
  if("task" in localStorage === false){
    let idProject = projectController.all()[0].id;
    taskController.create('Bootstrap',
    'Le lorem ipsum est, en imprimerie, une suite de mots sans signification utilisée àtitre provisoire pour calibrer',
    '2020-10-22',
    2,
    idProject);
  }
}

export default db;
