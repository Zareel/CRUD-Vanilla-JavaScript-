const input = document.querySelector("#input");
const btn = document.querySelector("#btn");
const ul = document.querySelector("#ul");

btn.addEventListener("click", (e) => {
  e.preventDefault();

  const task = input.value.trim();
  if (task === "") {
    alert("Pls enter a task..");
    return;
  }

  //todo create a list item
  const li = document.createElement("li");
  li.classList.add(
    "bg-stone-900",
    "py-2",
    "px-4",
    "rounded-md",
    "mb-4",
    "flex",
    "justify-between"
  );

  //todo create span
  const span = document.createElement("span");
  span.textContent = task;

  //todo create button
  const deleteButton = document.createElement("button");
  deleteButton.textContent = "Delete";
  deleteButton.classList.add("bg-red-700", "px-2", "rounded-md", "text-xs");

  //todo create edit button
  const editButton = document.createElement("button");
  editButton.textContent = "Edit";
  editButton.classList.add(
    "bg-yellow-500",
    "px-2",
    "rounded-md",
    "text-xs",
    "text-black"
  );

  // div for design
  const div = document.createElement("div");
  div.classList.add("flex", "gap-2");

  //todo append child elements
  //* append li into ul
  ul.appendChild(li);
  // append span to li
  li.appendChild(span);
  // append div to li
  li.appendChild(div);
  //* append updateButton to li
  div.appendChild(editButton);
  //* appen deleteButton to li
  div.appendChild(deleteButton);

  //todo clear input field
  input.value = "";

  //todo delete functionality
  deleteButton.addEventListener("click", () => {
    li.remove();
  });

  //todo edit functionality
  editButton.addEventListener("click", () => {
    const newTask = prompt("Edit your task: ", span.textContent);
    if (newTask !== null) {
      span.textContent = newTask;
    }
  });
});
