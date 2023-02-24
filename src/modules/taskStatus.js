const check = 'fa-check-square-o';
const uncheck = 'fa-square-o';
const lineThrough = 'line-through';

const completeTask = (element, listArr) => {
  element.classList.toggle(check);
  element.classList.toggle(uncheck);
  element.parentNode.querySelector('.text-todo').classList.toggle(lineThrough);

  listArr[element.id].done = !listArr[element.id].done;
  return listArr;
};

export default completeTask;
