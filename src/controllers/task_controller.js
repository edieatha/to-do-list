import Task from '../models/task';

const all = () => {
  const stringTask = localStorage.getItem('task');
  return JSON.parse(stringTask);
};

const isEmpty = () => (all() == null);

const taskController = (() => {
  const create = (...arg) => {
    const id = new Date().getTime() + 1;
    let arr = [];
    const task = Task(id, ...arg);
    if (!isEmpty()) {
      arr = [...all()];
    }
    arr.push(task.getTask());
    localStorage.setItem('task', JSON.stringify(arr));
  };

  const findByProject = (idProject) => {
    let arr = [];
    let arrTasks = [];
    if (!isEmpty()) {
      arr = [...all()];
      arrTasks = arr.filter((value) => value.idProject === idProject);
    }
    return arrTasks;
  };

  const one = (id) => {
    let task;
    for (let i = 0; i < all().length; i += 1) {
      if (all()[i].id === id) {
        const tasks1 = (all()[i].id, all()[i].title, all()[i].description);
        const tasks2 = (all()[i].date, all()[i].priotity, all()[i].idProject);
        task = Task(tasks1, tasks2);
      }
    }

    return task;
  };

  const upDate = (task) => {
    const arr = [...all()];
    for (let i = 0; i < arr.length; i += 1) {
      if (arr[i].id === task.getId()) {
        arr[i].title = task.getTitle();
        arr[i].description = task.getDescription();
        arr[i].date = task.getDate();
        arr[i].priotity = task.getPriotity();
        arr[i].idProject = task.getProject();
      }
    }
    localStorage.setItem('task', JSON.stringify(arr));
  };

  const del = (id) => {
    const arr = [...all()];
    for (let i = 0; i < arr.length; i += 1) {
      if (arr[i].id === id) {
        arr.splice(i, 1);
      }
    }
    localStorage.setItem('task', JSON.stringify(arr));
  };

  return {
    create,
    all,
    one,
    findByProject,
    del,
    upDate,
  };
})();

export default taskController;
