const input = document.getElementById("task-list");
const add = document.getElementById("add-task");

class Stack {
  constructor() {
    this.items = [];
  }

  push(element) {
    this.items.push(element);
  }

  pop() {
    return this.items.pop();
  }

  peek() {
    return this.items[this.items.length - 1];
  }

  isEmpty() {
    return this.items.length === 0;
  }
}

const todoStack = new Stack();

add.addEventListener("click", () => {
  const task = input.value;
  if (task) {
    todoStack.push(task);

    const taskDiv = document.createElement("div");
    taskDiv.className = "listsfortask";

    const checkbox = document.createElement("input");
    checkbox.type = "checkbox";
    checkbox.className = "task-checkbox";
    checkbox.addEventListener("change", () => {
      if (checkbox.checked) {
        document.getElementById("completed-task-container").appendChild(taskDiv);
        upButton.disabled = true;
        downButton.disabled = true;
      } else {
        document.getElementById("task-list-container").appendChild(taskDiv);
        upButton.disabled = false;
        downButton.disabled = false;
      }
    });

    const taskText = document.createElement("li");
    taskText.textContent = task;

    const deleteButton = document.createElement("button");
    deleteButton.textContent = "Delete";
    deleteButton.addEventListener("click", () => {
      taskDiv.remove();
    });

    const upButton = document.createElement("button");
    upButton.textContent = "👆";
    upButton.addEventListener("click", () => {
      const parent = taskDiv.parentNode;
      if (taskDiv.previousElementSibling) {
        parent.insertBefore(taskDiv, taskDiv.previousElementSibling);
      }
    });

    const downButton = document.createElement("button");
    downButton.textContent = "👇";
    downButton.addEventListener("click", () => {
      const parent = taskDiv.parentNode;
      if (taskDiv.nextElementSibling) {
        parent.insertBefore(taskDiv.nextElementSibling, taskDiv);
      }
    });

    const container = document.createElement("div");
    container.className = "container";
    container.appendChild(deleteButton);
    container.appendChild(upButton);
    container.appendChild(downButton);

    taskDiv.appendChild(checkbox);
    taskDiv.appendChild(taskText);
    taskDiv.appendChild(container);
    document.getElementById("task-list-container").appendChild(taskDiv);

    console.log(todoStack.peek());
    input.value = "";
  }
});
