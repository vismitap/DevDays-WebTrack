

let task = document.querySelector('.task');
let doneIcon = document.querySelectorAll('.doneIcon');
let delIcon = document.querySelectorAll('.delIcon');
let newTask = document.querySelector('.newTask');
let content = document.querySelector('.content');
let desc = document.querySelector('.desc');
let addTodo = document.querySelector('#addTodo');
let addDesc = document.querySelector('#addDesc');
let taskCont = document.querySelector('.taskCont')
doneTask();
delTask();


function doneTask(){
    for(let i=0;i<doneIcon.length;i++){
        doneIcon[i].addEventListener('click',function(){
            task.style.backgroundColor = '#0adb25';
            desc.style.backgroundColor = '#b5fcb8';
            doneIcon[i].style.display = 'none';
        })
    }
}

function delTask(){
    for(let i=0;i<doneIcon.length;i++){
        delIcon[i].addEventListener('click',function(){
            task.style.display = 'none';
        })
    }
}
function addTask(){
    taskCont.innerText = addTodo.innerText;
    let addedTask = task.cloneNode(true);
    content.appendChild(addedTask);
}

newTask.addEventListener('click',function(){
    addTask(); 

})


const express = require("express");
const app = express();

app.post("/add.html", function(req, res) {
    res.send(addTodo.innerText,addDesc.innerText);
    res.redirect(200, "/");
});
  
