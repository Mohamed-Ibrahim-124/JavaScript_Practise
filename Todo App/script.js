//"use strict";
let tasks = [];

const getPriorityName = function (priority) {
  switch (priority) {
    case "1":
      return "High";
    case "2":
      return "Medium";
    case "3":
      return "Low";
    default:
      return "";
  }
};

const deleteTask = function (i) {
  if (!confirm("Are you sure ?")) return;
  tasks.splice(i, 1);
  renderTable();
};
const moveUp = function (i) {
  if (i == 0) return;
  const oldTask = tasks[i];
  tasks[i] = tasks[i - 1];
  tasks[i - 1] = oldTask;
  renderTable();
};
const moveDown = function (i) {
  if (i == tasks.length - 1) return;
  const oldTask = tasks[i];
  tasks[i] = tasks[i + 1];
  tasks[i + 1] = oldTask;
  renderTable();
};

const renderTable = function () {
  const tbody = document.querySelector("#tasks_tbody");
  tbody.innerHTML = "";
  tasks.forEach((t, i) => {
    const row = `
        <tr>
        <td>${i + 1}</td>
        <td>${t.name}</td>
        <td>${getPriorityName(t.priority)}</td>
        <td>
        ${
          i > 0
            ? `<button class="btn btn-sm btn-secondary" onclick="moveUp(${i})">Up</button>`
            : ``
        }
        ${
          i < tasks.length - 1
            ? `<button class="btn btn-sm btn-secondary" onclick="moveDown(${i})">Down</button>`
            : ``
        }
        </td>
        <td>
        <button class="btn btn-primary btn-sm" onclick=editTask(${i})>Edit</button>
        <button class="btn btn-success btn-sm" onclick="saveTask(${i}) style="display: none;">Save</button>
        <button class="btn btn-danger btn-sm" onclick="cancelTask(${i}) style="display: none;">Cancel</button>
        <button class="btn btn-danger btn-sm" onclick="deleteTask(${i})">Delete</button></td>
        </tr>
        `;
    tbody.insertAdjacentHTML("beforeEnd", row);
  });
};
const addTask = function () {
  console.log(this);
  const taskName = document.querySelector("#task_name").value;
  const priority = document.querySelector("#task_priority").value;
  if (taskName !== "" && priority > 0) {
    tasks.push({
      name: taskName,
      priority: priority,
    });
    renderTable();
  }
};

const editTask = function (no)
{/*
 document.getElementById("edit_button"+no).style.display="none";
 document.getElementById("save_button"+no).style.display="block";
	*/
 var name = tasks[no].g
 var country=document.getElementById("country_row"+no);
 var age=document.getElementById("age_row"+no);
	
 var name_data=name.innerHTML;
 var country_data=country.innerHTML;
 var age_data=age.innerHTML;
	
 name.innerHTML="<input type='text' id='name_text"+no+"' value='"+name_data+"'>";
 country.innerHTML="<input type='text' id='country_text"+no+"' value='"+priority+"'>";

}


const cancelTask = function (i) {
  console.log(this);
  const taskName = document.querySelector("#task_name").value;
  const priority = document.querySelector("#task_priority").value;
  if (taskName !== "" && priority > 0) {
    tasks.push({
      name: taskName,
      priority: priority,
    });
    renderTable();
  }
};
/*
const saveTask = function (no)
{
 var name_val=document.getElementById("name_text"+no).value;
 var country_val=document.getElementById("country_text"+no).value;
 var age_val=document.getElementById("age_text"+no).value;

 document.getElementById("name_row"+no).innerHTML=name_val;
 document.getElementById("country_row"+no).innerHTML=country_val;
 document.getElementById("age_row"+no).innerHTML=age_val;

 document.getElementById("edit_button"+no).style.display="block";
 document.getElementById("save_button"+no).style.display="none";
}

*/

/*
const saveTask = function (i) {
  console.log(this);
  const taskName = document.querySelector("#task_name").value;
  const priority = document.querySelector("#task_priority").value;
  if (taskName !== "" && priority > 0) {
    tasks.push({
      name: taskName,
      priority: priority,
    });
    renderTable();
  }
};
*/
document.querySelector("#add").addEventListener("click", addTask);
var name = "Test3";
var age = 22;
const calcFunction = () => {
  console.log(this);
  console.log(`My name is ${this.name} I'm ${this.age} years old`);
};
const obj = {
  name: "Test",
  age: 35,
  cal: calcFunction,
};

const obj2 = {
  name: "Test2",
  age: 22,
  cal: calcFunction,
};

function thisTest() {
  let obj1 = "Ramy";
  var obj2 = "Ahmed";
  console.log(this);
  const x = () => {
    console.log(this);
  };
  x();
}
