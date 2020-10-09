import 'bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';

import newProject from './views/projects/new_project';
import formNewProj from './events/projects/new';
import showProject from './views/projects/show_project';
import projectController from './controllers/project_controller';
import db from './db/seed';

document.addEventListener('load', db());

const container = document.getElementById('container');
container.appendChild(newProject());
showProject(projectController.all());
formNewProj();
