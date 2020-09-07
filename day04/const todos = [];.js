const todos = [];

let globalId = 0;

function getId() {
    globalId++;
    return globalId;
}
function addTodo(newTodo) {
    todos.push({ id: getId(), title: newTodo, isComplete: false });
}	
function removeTodo(todoId) {
    const index = todos.findIndex((todo) => todo.id === todoId);
    if (index === -1) {
        throw new Error('Id not found');
    }
    todos.splice(index, 1)
}
function changeTodoTitle(todoId, newTitle) {
    const index = todos.findIndex((todo) => todo.id === todoId);
    if (index === -1) {
        throw new Error('Id not found');
    }
    todos[index].title = newTitle;
}
function changeTodoStatus(todoId, isComplete) {
    const index = todos.findIndex((todo) => todo.id === todoId);
} if (index === -1) {
    throw new Error('Id not found');
}
function removeCompleted(todo) {
    const index = todos.filter((todoId) => todoId.isComplete===false);
} if (index === -1) {
    throw new Error('Id not found');
}
todos[index].status = isComplete;
