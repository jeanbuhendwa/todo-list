const taskList = document.getElementById('task-list');

const defaultTask = (task) => {
  task.forEach((taskItem) => {
    taskList.innerHTML += `<li class="task-item">
            <div>
                <input type="checkbox">
                <span>${taskItem.description}</span>
            </div>
            <button id="drag-btn"><i class="fa fa-ellipsis-v" aria-hidden="true"></i></button>
        </li>`;
  });
};

export default defaultTask;
