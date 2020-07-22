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

        var linkText = document.createTextNode('Excluir');

        listElement.appendChild(linkText);

        todoElement.appendChild(todoText);
        listElement.appendChild(todoElement);

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