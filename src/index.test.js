/**
 * @jest-environment jsdom
 */
import { addTask, removeTask } from './modules/addTask.js';

describe('Add and Delete todo', () => {
  test('Add List', () => {
    document.body.innerHTML = '<div><ul id="task-list"></ul></div>';
    addTask('john', []);
    const list = document.querySelectorAll('#task-list li');
    expect(list).toHaveLength(1);
  });

  test('Delete List', () => {
    document.body.innerHTML = '<div><ul id="task-list"></ul></div>';
    const myList = [
      {
        id: 0,
        name: 'todoTask',
        done: false,
      },
      {
        id: 1,
        name: 'newTask',
        done: false,
      },
    ];
    removeTask(myList[0], myList);
    const list = document.querySelectorAll('#task-list li');
    expect(list).toHaveLength(1);
  });
});
