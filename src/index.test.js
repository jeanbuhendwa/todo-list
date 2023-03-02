/**
 * @jest-environment jsdom
 */
import { addTask } from "./modules/addTask";

describe("Add and Delete todo", () => {
  test("Add List", () => {
    document.body.innerHTML = `<div>` + `<ul id="task-list"></ul>` + `</div>`;
    addTask("john", []);
    const list = document.querySelectorAll("#task-list li");
    expect(list).toHaveLength(1);
  });
});
