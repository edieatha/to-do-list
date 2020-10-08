import { format } from 'date-fns';
const Task = (id, title, description, date, priotity, idProject) => {

  const getId = () => id;
  const getTitle = () => title;
  const getDescription = () => description;
  const getDate = () => date;
  const getPriotity = () => priotity;
  const getProject = () => idProject;
  const getTask = () => {
    return { id,
      title,
      description,
      date,
      priotity,
      idProject
    };
  }

  return {
    getId,
    getTitle,
    getDescription,
    getDate,
    getPriotity,
    getProject,
    getTask
  };
};

export default Task;
