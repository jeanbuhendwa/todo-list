const taskInput = document.getElementById('input-task');
const taskList = document.getElementById('task-list');
// const tasklistChildren = taskList.children;
const addBtn = document.getElementById('enter-task');
const error = document.getElementById('error-message');

const buildTask = () => {
  const taskItem = document.createElement('li');
  taskItem.setAttribute('class', 'task');

  const taskCheckbox = document.createElement('input');
  taskCheckbox.setAttribute('type', 'checkbox');

  const taskValue = document.createTextNode(taskInput.value);

  const taskDelBtn = document.createElement('button');
  const taskDelIcon = document.createElement('i');
  taskDelIcon.setAttribute('class', 'fa fa-trash-o');
  taskDelBtn.appendChild(taskDelIcon);

  taskItem.append(taskCheckbox, taskValue, taskDelBtn);

  taskList.appendChild(taskItem);
};

const addTask = () => {
  error.style.display = 'none';

  if (taskInput.value === '') {
    error.style.display = 'block';
  } else {
    buildTask();
    taskInput.value = '';
  }
};

const enterTask = (event) => {
  error.style.display = 'none';
  if (event.keyCode === 13 && taskInput.value !== '') {
    buildTask();
    taskInput.value = '';
  }
};

addBtn.addEventListener('click', addTask);
taskInput.addEventListener('keypress', enterTask);
