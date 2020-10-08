import Project from '../../models/project';
import projectController from '../../controllers/project_controller';
import showProject from '../../views/projects/show_project';
import showTask from '../../views/tasks/show_task';

const formEditProj = (id) => {
  const form = document.getElementById(id);
  const closeEditPro = document.getElementById('closeEditPro-'+id);
  form.addEventListener('submit', (e) => {
    const proj = Project(document.getElementById('edit-id-'+id).value, document.getElementById('edit-p-'+id).value);
    projectController.upDate(proj);
    closeEditPro.click();
    showProject(projectController.all());
    showTask(id);
    e.preventDefault();
  });

};

export default formEditProj;
