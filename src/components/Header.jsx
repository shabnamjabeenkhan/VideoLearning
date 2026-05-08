
function Header(props) {

    const incompleteTodos = props.todos.filter(todo => !todo.done);
    return(
        <div>
            <h1>Header</h1>
            <p>You have {incompleteTodos.length} incomplete todos</p>
        </div>
    )
}

export default Header;