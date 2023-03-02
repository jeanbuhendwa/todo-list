const check = 'fa-check-square-o';
const uncheck = 'fa-square-o';
const lineThrough = 'line-through';

const addTodo = (todo, id, done) => {
  const taskDone = done ? check : uncheck;
  const taskLine = done ? lineThrough : '';
  const taskList = document.getElementById('task-list');

  const text = `<li class="task-item">
          <div class="in-text">
              <i class="fa ${taskDone}" job="complete" id="${id}"></i>
              <span id="description" class="text-todo ${taskLine}" job="">${todo}</span>
              <input id="update-desc" class="disable" type="text" job="">
          </div>
          <div class="btns">
            <button id="edit-todo"><i class="fa fa-pencil-square-o" aria-hidden="true" job="edit"></i></button>
            <button id="save-todo" class="disable"><i class="fa fa-floppy-o" aria-hidden="true" job="save"></i></button>
            <button id="del-btn"><i class="fa fa-trash" aria-hidden="true" id="${id}" job="delete"></i></button>
          </div>
        </li>`;

  const position = 'beforeend';
  taskList.insertAdjacentHTML(position, text);
};

const addTask = (todoTask, listArr) => {
  if (todoTask) {
    listArr.push({
      id: listArr.length,
      name: todoTask,
      done: false,
    });
    addTodo(todoTask, listArr.length - 1, false);
    localStorage.setItem('Todo', JSON.stringify(listArr));
  }
};

const loadTodo = (arr) => {
  arr.forEach((element) => {
    addTodo(element.name, element.id, element.done);
  });
};

const updateIndex = (listArr) => {
  listArr.forEach((element, index) => {
    element.id = index;
  });
};

const removeTask = (element, listArr) => {
  listArr.splice(element.id, 1);
  updateIndex(listArr);
  loadTodo(listArr);
};

export {
  addTask, addTodo, loadTodo, updateIndex, removeTask,
};
