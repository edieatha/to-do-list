import Project from '../../models/project';
import projectController from '../../controllers/project_controller';
import showProject from '../../views/projects/show_project';
import reload from '../../views/reload';

const delProject = (id) => {
  let close = document.getElementById('close-del-proj-'+id);
  projectController.del(id);
  close.click();
  reload();
  showProject(projectController.all());
};

export default delProject;
