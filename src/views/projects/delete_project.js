import 'bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import projectController from '../../controllers/project_controller';


const deleteProject = (id, project) => {
    let colLeft = document.getElementById('colLeft');
      colLeft.innerHTML += `<div id = "modal-remove-proj-${id}" class="modal fade bd-example-modal-sm" tabindex="-1" role="dialog" aria-labelledby="mySmallModalLabel" aria-hidden="true">
      <div class="modal-dialog modal-sm">
      <div class="modal-header">
        <button id = "close-del-proj-${id}" type="button" class="close" data-dismiss="modal" aria-label="Close">
          <span aria-hidden="true">&times;</span>
        </button>
      </div>
      <div class="modal-content">
      <button id = "remove-proj-${id}" type="button" class="btn btn-danger remove-proj">Delete ${project}</button>
      </div>
      </div>
      </div>`;
};

export default deleteProject;
