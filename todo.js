const taskElement = document.querySelector('.task-input');
const addButton = document.querySelector('.add-button');
const listContainer = document.querySelector('.to-do-list');

listContainer.innerHTML = localStorage.getItem('data');

addButton.addEventListener('click', () => {
  addTodo();
});


document.addEventListener('keydown', (event) => {
  if (event.key === "Enter") {
    addTodo();
  }
});

function addTodo() {
  if (taskElement.value === "") {
    alert('You have to enter something');
  } else {
    let li = document.createElement("li");
    li.innerHTML = taskElement.value;
    listContainer.appendChild(li);
    let span = document.createElement("span");
    span.innerHTML = "&#10006;";
    li.appendChild(span);
  }
  taskElement.value = "";
  savetoStorage();
  
}

listContainer.addEventListener('click', (e) => {
  if (e.target.tagName === "LI") {
    e.target.classList.toggle("checked");
  } else if (e.target.tagName === "SPAN") {
    e.target.parentElement.remove();
  }

  savetoStorage();
})

function savetoStorage() {
  localStorage.setItem('data', listContainer.innerHTML);
}