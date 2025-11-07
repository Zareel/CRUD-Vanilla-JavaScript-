//   const input = document.querySelector("#input");
//   const btn = document.querySelector("#btn");
//   const taskList = document.querySelector("#taskList");

//   // addTask
//   btn.addEventListener("click", (e) => {
//     e.preventDefault() //prevent from default

//     const task = input.value.trim();
//     if (task === "") {
//       alert("Please enter a task");
//       return;
//     }

//     // create list item
//     const li = document.createElement("li");
//     li.textContent = task;

//     // add delete button
//     const delButton = document.createElement("button");
//     delButton.textContent = "delete";
//     delButton.classList.add("ml-10");
//     li.appendChild(delButton);

//     // append to list
//     taskList.appendChild(li);

//     // clear input
//     input.value = "";

//     // delete on click
//     delButton.addEventListener("click", () => {
//       li.remove();

//     });
//   });

const input = document.querySelector("#input");
const btn = document.querySelector("#btn");
const taskList = document.querySelector("#taskList");

btn.addEventListener("click", (e) => {
  e.preventDefault(); // Prevent form refresh

  const task = input.value.trim();
  if (task === "") {
    alert("Please enter a task");
    return;
  }

  // Create list item
  const li = document.createElement("li");
  li.classList.add(
    "flex",
    "justify-between",
    "items-center",
    "bg-stone-700",
    "text-gray-200",
    "p-2",
    "rounded",
    "my-1"
  );

  // Task text span
  const taskText = document.createElement("span");
  taskText.textContent = task;

  // Create delete button
  const delButton = document.createElement("button");
  delButton.textContent = "Delete";
  delButton.classList.add("text-red-400", "hover:text-red-600", "font-bold");

  //   create update button
  const updateButton = document.createElement("button");
  updateButton.textContent = "Update";
  updateButton.classList.add(
    "text-yellow-500",
    "hover:text-yellow-400",
    "font-bold"
  );

  // Add button inside li
  li.appendChild(taskText);
  li.appendChild(delButton);
  li.appendChild(updateButton);
  

  // Append li to task list
  taskList.appendChild(li);

  // Clear input
  input.value = "";

  // Delete task when clicked
  delButton.addEventListener("click", () => {
    li.remove();
  });

  //   update task
  updateButton.addEventListener("click", () => {
    const newTask = prompt("Edit your task: ", taskText.textContent);
    if (newTask !== null && newTask.trim() !== "") {
      taskText.textContent = newTask.trim();
    }
  });
});

