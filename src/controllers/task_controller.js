import Task from '../models/task';



const taskController = (() => {

  const create = (...arg) => {
    let id = new Date().getTime() + 1;
    let arr = [];
    const task = Task(id, ...arg);
    if(!isEmpty()) {
      arr = [...all()];
    }
    arr.push(task.getTask());
    localStorage.setItem('task', JSON.stringify(arr));
  }

  const all = () => {
    let stringTask = localStorage.getItem('task');
    return JSON.parse(stringTask);
  }

  const findByProject = (idProject) => {
    let arr = [];
    let arrTasks = [];
    if(!isEmpty()) {
      arr = [...all()];
      arrTasks = arr.filter((value, index, arr) => {
         return value.idProject == idProject;
       });
    }
    return arrTasks;

  }

  const one = (id) => {
    let task;
    for(let i = 0; i < all().length; i += 1) {
      if(all()[i].id == id){
        task = Task(all()[i].id, all()[i].title, all()[i].description, all()[i].date, all()[i].priotity, all()[i].idProject);
      }
    }

    return task;
  }

  const upDate = (task) => {
    let arr = [...all()];
    for(let i = 0; i < arr.length; i += 1) {
      if(arr[i].id == task.getId()){
        arr[i].title = task.getTitle();
        arr[i].description = task.getDescription();
        arr[i].date = task.getDate();
        arr[i].priotity = task.getPriotity();
        arr[i].idProject = task.getProject();
      }
    }
    localStorage.setItem('task', JSON.stringify(arr));
  }

  const del = (id) => {
    let arr = [...all()];
    for(let i = 0; i < arr.length; i += 1) {
      if(arr[i].id == id){
        arr.splice(i, 1);
      }
    }
    localStorage.setItem('task', JSON.stringify(arr));
  }

  const isEmpty = () => {
    return all() != null ? false : true;
  }

  return {
    create,
    all,
    one,
    findByProject,
    del,
    upDate
  };
})();

export default taskController;
