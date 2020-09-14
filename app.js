const form =document.querySelector('#task-form');
const taskList =document.querySelector('.collection');
const taskInput =document.querySelector('#task');

const taskTitle=document.getElementById('task-title');
taskTitle.style.background='#0491E7';

loadEventListeners();

function loadEventListeners(){
    form.addEventListener('submit',addTask);

    taskList.addEventListener('click',removeTask);
}

function addTask(e) {
    if (taskInput.value === '') {
        alert('Add task');    
    }

    const li = document.createElement('li');
    li.className ='collection-item';
    li.appendChild(document.createTextNode(taskInput.value));
    const link= document.createElement('a');
    link.className ='delete-item secondary-content';
    link.innerHTML = '<i class= "fa fa-remove">Remove</i>';
    li.appendChild(link);
    taskList.appendChild(li);


    e.preventDefault();
}

    function removeTask(e) {
        if (e.target.parentElement.classList.contains('delete-item'))
        e.target.parentElement.parentElement.remove();
            
        
        console.log(e.target);
        
    }
