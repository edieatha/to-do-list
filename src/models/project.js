const Project = (id, project) => {
  const getId = () => id;
  const getP = () => project;
  const getProject = () => ({ id, project });

  return {
    getProject,
    getId,
    getP,
  };
};

export default Project;
