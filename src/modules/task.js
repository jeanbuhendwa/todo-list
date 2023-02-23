const taskInput = document.getElementById('input-task');
const taskList = document.getElementById('task-list');
const addBtn = document.getElementById('enter-task');

const check = 'fa-check-square-o';
const uncheck = 'fa-square-o';
const lineThrough = 'line-through';

let listArr;

const storedData = localStorage.getItem('Todo');

const addTodo = (todo, id, done) => {
  const taskDone = done ? check : uncheck;
  const taskLine = done ? lineThrough : '';

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

const loadTodo = (arr) => {
  arr.forEach((element) => {
    addTodo(element.name, element.id, element.done);
  });
};

if (storedData) {
  listArr = JSON.parse(storedData);
  loadTodo(listArr);
} else {
  listArr = [];
}

const addTask = () => {
  const todoTask = taskInput.value;
  if (todoTask) {
    // addTodo(todoTask, id, false);
    listArr.push({
      id: listArr.length,
      name: todoTask,
      done: false,
    });
    addTodo(todoTask, listArr.length - 1, false);
    localStorage.setItem('Todo', JSON.stringify(listArr));
  }
  taskInput.value = '';
};

taskInput.addEventListener('keypress', (event) => {
  if (event.keyCode === 13) {
    addTask();
  }
});

const completeTask = (element) => {
  element.classList.toggle(check);
  element.classList.toggle(uncheck);
  element.parentNode.querySelector('.text-todo').classList.toggle(lineThrough);

  listArr[element.id].done = !listArr[element.id].done;
};

const updateIndex = () => {
  listArr.forEach((element, index) => {
    element.id = index;
  });
};

const removeTask = (element) => {
  listArr.splice(element.id, 1);
  updateIndex();
  taskList.innerHTML = '';
  loadTodo(listArr);
};

const updateTask = (id, value) => {
  listArr[id].name = value;
};

taskList.addEventListener('click', (event) => {
  const element = event.target;
  const elementJob = element.attributes.job.value;
  if (elementJob === 'complete') {
    completeTask(element);
  } else if (elementJob === 'delete') {
    removeTask(element);
  } else if (elementJob === 'edit') {
    element.parentNode.classList.add('disable');
    element.parentNode.nextElementSibling.classList.remove('disable');
    const description = [
      ...element.parentNode.parentNode.previousElementSibling.children,
    ];
    description.forEach((element) => {
      if (element.id === 'description') {
        element.classList.add('disable');
      } else if (element.id === 'update-desc') {
        element.classList.remove('disable');
        element.value = element.previousElementSibling.textContent;
      }
    });
  } else if (elementJob === 'save') {
    element.parentNode.classList.add('disable');
    element.parentNode.previousElementSibling.classList.remove('disable');
    const description = [
      ...element.parentNode.parentNode.previousElementSibling.children,
    ];
    let value = '';
    let span = '';
    description.forEach((element) => {
      if (element.id === 'description') {
        element.classList.remove('disable');
        span = element;
      } else if (element.id === 'update-desc') {
        value = element.value;
        span.textContent = value;
        element.classList.add('disable');
      }
    });
    updateTask(element.parentNode.nextElementSibling.children[0].id, value);
  }
  localStorage.setItem('Todo', JSON.stringify(listArr));
});

addBtn.addEventListener('click', () => {
  addTask();
});
