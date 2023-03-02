import completeTask from "./taskStatus.js";
import clearDoneTask from "./doneTask.js";
import {
  addTask,
  addTodo,
  loadTodo,
  updateIndex,
  removeTask,
} from "./addTask.js";

const taskInput = document.getElementById("input-task");
const taskList = document.getElementById("task-list");
const addBtn = document.getElementById("enter-task");

let listArr;
const storedData = localStorage.getItem("Todo");

if (storedData) {
  listArr = JSON.parse(storedData);
  loadTodo(listArr);
} else {
  listArr = [];
}

taskInput.addEventListener("keypress", (event) => {
  if (event.keyCode === 13) {
    const todoTask = taskInput.value;
    addTask(todoTask, listArr);
    taskInput.value = "";
  }
});

const updateTask = (id, value) => {
  listArr[id].name = value;
};

taskList.addEventListener("click", (event) => {
  const element = event.target;
  const elementJob = element.attributes.job.value;
  if (elementJob === "complete") {
    listArr = completeTask(element, listArr);
  } else if (elementJob === "delete") {
    taskList.innerHTML = "";
    removeTask(element, listArr);
  } else if (elementJob === "edit") {
    element.parentNode.classList.add("disable");
    element.parentNode.nextElementSibling.classList.remove("disable");
    const description = [
      ...element.parentNode.parentNode.previousElementSibling.children,
    ];
    description.forEach((element) => {
      if (element.id === "description") {
        element.classList.add("disable");
      } else if (element.id === "update-desc") {
        element.classList.remove("disable");
        element.value = element.previousElementSibling.textContent;
      }
    });
  } else if (elementJob === "save") {
    element.parentNode.classList.add("disable");
    element.parentNode.previousElementSibling.classList.remove("disable");
    const description = [
      ...element.parentNode.parentNode.previousElementSibling.children,
    ];
    let value = "";
    let span = "";
    description.forEach((element) => {
      if (element.id === "description") {
        element.classList.remove("disable");
        span = element;
      } else if (element.id === "update-desc") {
        value = element.value;
        span.textContent = value;
        element.classList.add("disable");
      }
    });
    updateTask(element.parentNode.nextElementSibling.children[0].id, value);
  }
  localStorage.setItem("Todo", JSON.stringify(listArr));
});

addBtn.addEventListener("click", () => {
  addTask(taskInput.value, listArr);
  taskInput.value = "";
});

const clearBtn = document.getElementById("clear-task");
clearBtn.addEventListener("click", () => {
  listArr = clearDoneTask(listArr);
  updateIndex();
  taskList.innerHTML = "";
  loadTodo(listArr);
  localStorage.setItem("Todo", JSON.stringify(listArr));
});

const clearAll = document.getElementById("reset-all");

clearAll.addEventListener("click", () => {
  localStorage.clear();
});
