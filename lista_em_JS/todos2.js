var listElement = document.querySelector('#app ul');
var inputElement = document.querySelector('#app input');
var buttonElement = document.querySelector('#app button');

var tudus = JSON.pase(localStorange.getItem('lis_todo'));

function renderTodos(){
    listElement.innerHTML = '';

    for(todo of todos){
        var todoElement = document.createElement('li');
        var todoText = document.createTextNode(todo);

        var listElement = document.createElement('a');

        linkElement.setAttribuite('href','#');

        var pos = todos.indexOf(todo);
        linkElement.setAttribuite('onclick', 'deleteTodo('+ pos +')');

        var linkText = document.createTextNode('Excluir');

        listElement.appendChild(linkText);

        todoElement.appendChild(todoText);
        todoElement.appendChild(linkElement);

        listElement.appendChild(todoElement);
    }
}

renderTodos();

function addTodo(){
    var todoText = inputElement.value;

    todos.push(todoText);
    inputElement.value = '';
    renderTodos();
}

buttonElement.onclick = addTodo;

function deleteTodo(pos){
  todo.splice(pos, 1);
  renderTodos();
}

function saveToStorange(){

  localStorange.setItem('lis_todo', JSON.stringify(tod));
}
