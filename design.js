document.addEventListener("DOMContentLoaded", () => {
    const taskInput = document.getElementById("taskInput");
    const addTaskBtn = document.getElementById("addTaskBtn");
    const taskList = document.getElementById("taskList");
  
    // Funt for new task
    const addTask = () => {
      const taskText = taskInput.value.trim();
      if (taskText === "") {
        alert("Please enter a task.");
        return;
      }
  
      const listItem = document.createElement("li");
  
      // Task Text
      const taskSpan = document.createElement("span");
      taskSpan.textContent = taskText;
  
      // Edit Button
      const editBtn = document.createElement("button");
      editBtn.textContent = "Edit";
      editBtn.classList.add("edit-btn");
      editBtn.addEventListener("click", () => {
        const updatedText = prompt("Edit Task:", taskSpan.textContent);
        if (updatedText) taskSpan.textContent = updatedText;
      });
  
      // Delete Button
      const deleteBtn = document.createElement("button");
      deleteBtn.textContent = "Delete";
      deleteBtn.classList.add("delete-btn");
      deleteBtn.addEventListener("click", () => {
        taskList.removeChild(listItem);
      });
  
      // Append to List Item
      listItem.appendChild(taskSpan);
      listItem.appendChild(editBtn);
      listItem.appendChild(deleteBtn);
  
      // Append to Task List
      taskList.appendChild(listItem);
  
      // Clear input field
      taskInput.value = "";
    };
  
    // Add Task on Button Click
    addTaskBtn.addEventListener("click", addTask);
  
    // Add Task on Enter Key Press
    taskInput.addEventListener("keydown", (event) => {
      if (event.key === "Enter") {
        addTask();
      }
    });
  });