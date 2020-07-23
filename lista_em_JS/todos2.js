var listElement = document.querySelector('#app ul');
var inputElement = document.querySelector('#app input');
var buttonElement = document.querySelector('#app button');

var tudus = [
    'Fazer café',
	'Estudar Javascript',
	'Acessar Comunidade da Rocketseat'				
];

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
    var todoText = inputElement.value;

    todos.splice(0, 1);
    inputElement.value = '';
    renderTodos();
}