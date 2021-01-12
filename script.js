// selectors 

const todoInput = document.querySelector('.todo-input');
const todoButton = document.querySelector('.todo-btn');
const todoList = document.querySelector('.todo-list');
const filterOption = document.querySelector('.filter');


//event listeners

todoButton.addEventListener('click', addTodo);
todoList.addEventListener('click', deleteCheck);
filterOption.addEventListener('click', filterTodo);


//functions

function addTodo(event) {
    event.preventDefault();
    //checkpoint
    if (todoInput.value === ''){
        alert('pls put something in there lmao');
        event.preventDefault();
    } else {
        event.preventDefault();
        const newTodo = document.createElement('li');
        newTodo.classList.add('todo');
        newTodo.innerText = todoInput.value;
        const optionsDiv = document.createElement('div');
        optionsDiv.classList.toggle('options');
        newTodo.appendChild(optionsDiv);
        const completedButton = document.createElement('button');
        completedButton.innerHTML = '<i class="fas fa-check"></i>';
        completedButton.classList.add('check');
        optionsDiv.appendChild(completedButton);
        const trashButton = document.createElement('button');
        trashButton.innerHTML = '<i class="fas fa-trash"></i>';
        trashButton.classList.add('trash');
        optionsDiv.appendChild(trashButton);
        todoList.appendChild(newTodo);
        todoInput.value = '';   
    };

};


function deleteCheck(e) {
    const item = e.target;
    if (item.classList[0] === 'trash'){
        const todo = item.parentElement;
        const mainParent = todo.parentElement;
        mainParent.classList.add('fade');
		mainParent.addEventListener("transitionend", function(){
		event.preventDefault();
		mainParent.remove();	
    })
    
    };

    if (item.classList[0] === 'check'){
        const todo = item.parentElement;
        const mainParent = todo.parentElement;
        event.preventDefault();
        mainParent.classList.add('completed');
    }

};



function filterTodo(e) {
    const todos = todoList.childNodes;

    todos.forEach(function(todo){
        if (todo.style){
            switch(e.target.value) {
                case 'all':
                    todo.style.display = 'flex';
                    break;
                case 'completed':
                    if (todo.classList.contains('completed')){
                        todo.style.display = 'flex';
                    } else {
                        todo.style.display = 'none';
                    }
                    break;
                 case 'uncompleted':
                    if (!todo.classList.contains('completed')){
                        todo.style.display = 'flex';
                    } else {
                        todo.style.display = 'none';
                    }
                    break;
            }
        };
    });
}