import Project from '../models/project';
import taskController from './task_controller';

const all = () => {
  const stringProject = localStorage.getItem('project');
  return JSON.parse(stringProject);
};

const isEmpty = () => (all() == null);

const projectController = (() => {
  const create = (project) => {
    const id = new Date().getTime() + 1;
    let arr = [];
    const proj = Project(id, project);
    if (!isEmpty()) {
      arr = [...all()];
    }
    arr.push(proj.getProject());
    localStorage.setItem('project', JSON.stringify(arr));
  };

  const one = (id) => {
    let proj;
    for (let i = 0; i < all().length; i += 1) {
      if (all()[i].id === id) {
        proj = Project(all()[i].id, all()[i].project);
      }
    }

    return proj;
  };

  const upDate = (project) => {
    const arr = [...all()];
    for (let i = 0; i < arr.length; i += 1) {
      if (arr[i].id === project.getId()) {
        arr[i].project = project.getP();
      }
    }
    localStorage.setItem('project', JSON.stringify(arr));
  };

  const del = (id) => {
    const arrProject = [...all()];
    const arrayTask = [...taskController.all()];
    const filteredProject = arrProject.filter((value) => value.id !== id);

    const filteredTask = arrayTask.filter((value) => value.idProject !== id);
    localStorage.setItem('project', JSON.stringify(filteredProject));
    localStorage.setItem('task', JSON.stringify(filteredTask));
  };

  return {
    create,
    all,
    one,
    upDate,
    del,
  };
})();

export default projectController;
