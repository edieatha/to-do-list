import Project from '../../models/project';
import projectController from '../../controllers/project_controller';
import showProject from '../../views/projects/show_project';
const formNewProj = () => {
  const form = document.getElementById('add-project');
  const closeNewPro = document.getElementById('closeNewPro');
  form.addEventListener('submit', (e) => {
    projectController.create(document.getElementById('project').value);
    closeNewPro.click();
    form.reset();
    showProject(projectController.all());
    e.preventDefault();
  });

};

export default formNewProj;
