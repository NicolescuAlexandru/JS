//How to use it
//new - add a new To Do entry
//delete - remove a specific entry
//list - list all entries
//quit - quit the app

let input = prompt('What would you like to add?');
const todos = [];

while (input !== 'quit' && input !== 'q') {
    if (input === 'list') {
        console.log('-----------------------');
        for (let i = 0; i < todos.length; i++) {
            console.log(`${i}: ${todos[i]}`)
        }
        console.log('-----------------------');
    } else if (input === 'new') {
        const newTodo = prompt('What is the new todo entry?')
        todos.push(newTodo);
        console.log(`The entry ${newTodo} was added successfully.`)
    } else if (input === 'delete') {
        const toDelete = parseInt(prompt('What is the index of the entry to be deleted?'));
        if (!Number.isNaN(toDelete) && toDelete < todos.length) {
            todos.splice(toDelete, 1);
            console.log(`The entry indexed ${toDelete} was deleted successfully.`);
        } else {
            console.log('Please enter a valid index!');
        }
    }
    input = prompt('What would you like to add?');
}

console.log('Ok, the app is quit now.');
