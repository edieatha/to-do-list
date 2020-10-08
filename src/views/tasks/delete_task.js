import 'bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import taskController from '../../controllers/task_controller';
import Task from '../../models/task';


const deleteTask = (idtask, title) => {
    let colRight = document.getElementById('colright');
      colRight.innerHTML += `<div id = "modal-remove-${idtask}" class="modal fade bd-example-modal-sm" tabindex="-1" role="dialog" aria-labelledby="mySmallModalLabel" aria-hidden="true">
      <div class="modal-dialog modal-sm">
      <div class="modal-header">
        <button id = "close-del-${idtask}" type="button" class="close" data-dismiss="modal" aria-label="Close">
          <span aria-hidden="true">&times;</span>
        </button>
      </div>
      <div class="modal-content">
      <button id = "remove-task-${idtask}" type="button" class="btn btn-danger remove-task">Delete ${title} </button>
      </div>
      </div>
      </div>`;
};

export default deleteTask;
