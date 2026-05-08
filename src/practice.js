let nextID = 1
const todos = [
    {
        id: nextID++,
        task: "learn Javascript",
        done: true
    }
]
// console.log(todos);


function addTodo(task){
    todos.push({
        id: nextID++,
        task: task,
        done: false
    })
}
addTodo("learn React")
// console.log(todos);

function addAnotherTodo(task){
    todos.push({
        id: nextID++,
        task: task,
        done: false
    })
}
addAnotherTodo("learn Python")
console.log(todos);



// function completedTodo(id){
//     const updatedTodo = todos.map((todo) => {
//         if (todo.id === id){
//             return {...todo, done: true}
//         }
//         return todo
//     })
//     console.log(updatedTodo);
// }
// completedTodo(2);

// function deleteTodo(id) {
//     const idToKeep = todos.filter((todo) => todo.id !== id)
//     console.log(idToKeep);
// }
// deleteTodo(2);


// function findingTodo(id){
//     const foundTodo = todos.find((todo)=>{
//         if (todo.id === id){
//             return true
//         }
//         return false
//     })
//     console.log(foundTodo);
// }
// findingTodo(1);

function getProgressCount(){
const totalTodos = todos.length;
const completedTodos = todos.filter((todo) =>{
    if (todo.done === true){
        return true
    }
    return false
}).length
const percentage = totalTodos === 0 ? 0 : Math.round((completedTodos / totalTodos) * 100);
console.log(`${completedTodos} out of ${totalTodos} Todos are completed`)
console.log(`The score is ${percentage}%`)
}
getProgressCount();


