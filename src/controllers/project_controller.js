import Project from '../models/project';
import Task from '../models/task';
import taskController from './task_controller';



const projectController = (() => {

  const create = (project) => {
    let id = new Date().getTime() + 1;
    let arr = [];
    const proj = Project(id, project);
    if(!isEmpty()) {
      arr = [...all()];
    }
    arr.push(proj.getProject());
    localStorage.setItem('project', JSON.stringify(arr));
  }

  const all = () => {
    let stringProject = localStorage.getItem('project');
    return JSON.parse(stringProject);
  }

  const one = (id) => {
    let proj;
    for(let i = 0; i < all().length; i += 1) {
      if(all()[i].id == id){
        proj = Project(all()[i].id, all()[i].project);
      }
    }

    return proj;
  }

  const upDate = (project) => {
    let arr = [...all()];
    for(let i = 0; i < arr.length; i += 1) {
      if(arr[i].id == project.getId()){
        arr[i].project = project.getP();
      }
    }
    localStorage.setItem('project', JSON.stringify(arr));
  }

  const del = (id) => {
    let arrProject = [...all()];
    let arrayTask = [...taskController.all()];
    let filteredProject = arrProject.filter((value, index, arr) => {
       return value.id != id;
     });

    let filteredTask = arrayTask.filter((value, index, arr) => {
       return value.idProject != id;
     });
    localStorage.setItem('project', JSON.stringify(filteredProject));
    localStorage.setItem('task', JSON.stringify(filteredTask));
  }

  const isEmpty = () => {
    return all() != null ? false : true;
  }

  return {
    create,
    all,
    one,
    upDate,
    del
  };
})();

export default projectController;
