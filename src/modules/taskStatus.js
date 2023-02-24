import listArr from './task.js';

const check = 'fa-check-square-o';
const uncheck = 'fa-square-o';
const lineThrough = 'line-through';

const completeTask = (element) => {
  element.classList.toggle(check);
  element.classList.toggle(uncheck);
  element.parentNode.querySelector('.text-todo').classList.toggle(lineThrough);

  listArr[element.id].done = !listArr[element.id].done;
};

export default completeTask;
