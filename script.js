const formDOM = document.querySelector(".todo_form");
const inputDOM = document.querySelector(".todo_input");
const todoContainer = document.querySelector(".todo_container");

const startConf = () => {
   // baslangic ayarlari
   const todos = JSON.parse(localStorage.getItem("todos"));
   if (!todos) {
      localStorage.setItem("todos", JSON.stringify([]));
   } else {
      todos.forEach(todo => {
         addHTML(todo);
      });
   } 
}

// toast start ---
const Toasty = (message) => {
   
   const toastLiveExample = document.getElementById(`${message}`)

   const toast = new bootstrap.Toast(toastLiveExample)
    
   toast.show()    
}
 // toast end 

const addTodo = (e) => {
   e.preventDefault();
   
   const inputVal = inputDOM.value;

   if (inputDOM.value == '')  { // boş değer girilmeye çalışıyor ise hata veriyoruz
      Toasty("liveToastFail");
      return false;
   } else {

    const todo = {
      text: inputVal,
      isCompleted: false,
   };

   const todos = JSON.parse(localStorage.getItem("todos"));
   todos.push(todo);
   localStorage.setItem("todos", JSON.stringify(todos));

   addHTML(todo);

   formDOM.reset();
   
   Toasty("liveToastSuccess");
   }
}

const deleteTodo = (e) => {
   const todo = e.target.parentElement.parentElement;
   const text = todo.firstChild.children[1].textContent;

   let todos = JSON.parse(localStorage.getItem("todos"));
   todos = todos.filter(td => td.text != text);
   localStorage.setItem("todos", JSON.stringify(todos));

   todo.remove();
   Toasty("liveToastDelete");
}

const completeTodo = (e) => {
   const todo = e.target.parentElement.parentElement;
   const text = todo.firstChild.children[1].textContent;

   let todos = JSON.parse(localStorage.getItem("todos"));
   
   todos.forEach(td => {
      if (td.text === text) td.isCompleted = !td.isCompleted 
   });

   localStorage.setItem("todos", JSON.stringify(todos));
}

const saveTodo = (e) => {
   const todo = e.target.parentElement.parentElement;
   const prevText = todo.firstChild.children[1].textContent; // değiştirilmeden önceki değer
   const newText = todo.firstChild.children[2].value; // editlerken girdiğimiz yeni değer

   let todos = JSON.parse(localStorage.getItem("todos"));
   
   todos.forEach(td => {
      if (td.text === prevText) td.text = newText;
   });

   localStorage.setItem("todos", JSON.stringify(todos));

   todo.firstChild.children[1].textContent = newText;  // HTML üzerindeki değerini de değiştiriyoruz

   todo.classList.remove("-edited"); // verdiğimiz classı kaldırıyoruz

   Toasty("liveToastEdit");
}

const editTodo = (e) => {
   const todo = e.target.parentElement.parentElement;
   todo.classList.add("-edited");
}

const addHTML = (todo) => {
   const todoDiv = document.createElement("div");
   todoDiv.classList.add("todo");

   const todoLeft = document.createElement("div");
   todoLeft.classList.add("todo_left");
   
   const editInput = document.createElement("input");
   editInput.classList.add("todo_editInput")
   editInput.defaultValue = todo.text;

   const todoCb = document.createElement("input");
   todoCb.type = "checkbox";
   todoCb.checked = todo.isCompleted; 
   todoCb.classList.add("todo_cb");
   todoCb.addEventListener("click", completeTodo); 

   const todoText = document.createElement("span");
   todoText.classList.add("todo_text");
   todoText.textContent = todo.text;

   todoLeft.appendChild(todoCb);
   todoLeft.appendChild(todoText);
   todoLeft.appendChild(editInput);

   const todoRight = document.createElement("div");
   todoRight.classList.add("todo_right");

   const deleteBtn = document.createElement("button");
   deleteBtn.classList.add("todo_delete");
   deleteBtn.textContent = "Delete";
   deleteBtn.addEventListener("click", deleteTodo); 
   
   const editBtn = document.createElement("button");
   editBtn.classList.add("todo_edit");
   editBtn.textContent = "Edit";
   editBtn.addEventListener("click", editTodo); 
   
   const saveBtn = document.createElement("button");
   saveBtn.classList.add("todo_save");
   saveBtn.textContent = "Save";
   saveBtn.addEventListener("click", saveTodo);

   todoRight.appendChild(deleteBtn);
   todoRight.appendChild(editBtn);
   todoRight.appendChild(saveBtn);

   todoDiv.appendChild(todoLeft);
   todoDiv.appendChild(todoRight);

   todoContainer.appendChild(todoDiv);
}

startConf();

formDOM.addEventListener("submit", addTodo);