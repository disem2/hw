$.ajax({
    url: 'https://jsonplaceholder.typicode.com/todos',
    method: 'GET'
}).then(function(data) {
    let completedTodos = filterTodos(data);

    //add all todos
    showTodos('#allTodos', data);

    //add completed todos
    showTodos('#completedTodos', completedTodos)
});

// Return completed todos
function filterTodos(todosList) {
    let result = [];

    /*


    Write code here




     */

    return result;
}

// Add todos to DOM
function showTodos(tableId, todosList) {
    let table = $(tableId);

    for (let i = 0; i < todosList.length; i ++) {
        let todo = todosList[i];
        let tr = $('<tr/>');

        tr.append('<td>' + todo.id + '</td>');
        tr.append('<td>' + todo.title + '</td>');
        tr.append('<td>' + todo.completed + '</td>');

        table.append(tr);
    }
}

/*
* 1. Make filter using "for" loop
* 2. Make filter using "while" loop
* 3. Make filter using array filter method
*
* */