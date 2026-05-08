

function TodoList(props) {

    return(
        <div>
              <h1>TodoList</h1>
            <ul>
                {props.todos.map((todo) => (
                    <li key={todo.id}>
                    {todo.task}
                    <button onClick={() => props.onToggleTodo(todo.id)}>{todo.done ? "Undo" : "Incomplete"}</button>
                    <button onClick={() => props.onDeleteTodo(todo.id)}>Delete</button>
                    </li>
                ))}
            </ul>
          
        </div>
    )
}

export default TodoList;