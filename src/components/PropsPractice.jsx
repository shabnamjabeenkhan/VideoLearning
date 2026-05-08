// function Apps(props) {

    
//     return (
//         <div>
//             <ul>
//                 {props.apps.map(app => (
//                     <li>{app}</li>
//                 ))}
//             </ul>
          
//         </div>
//     )
// }

// export default Apps;



// function TodoList(props) {

//     return(
//         <div>
//               <h1>TodoList</h1>
//             <ul>
//                 {props.todos.map((todo) => (
//                     <li key={todo.id}>
//                     {todo.task}
//                     <button onClick={() => props.onToggleTodo(todo.id)}>{todo.done ? "Undo" : "Incomplete"}</button>
//                     <button onClick={() => props.onDeleteTodo(todo.id)}>Delete</button>
//                     </li>
//                 ))}
//             </ul>
          
//         </div>
//     )
// }

// export default TodoList;


// function Header(props) {

//     const incompleteTodos = props.todos.filter(todo => !todo.done);
//     return(
//         <div>
//             <h1>Header</h1>
//             <p>You have {incompleteTodos.length} incomplete todos</p>
//         </div>
//     )
// }

// export default Header;


// import "./index.css";
// import Counter from "./components/Counter";
// import Sidebar from "./components/Sidebar";
// import { useState } from "react";
// import AdminToggle from "./components/AdminToggle";
// import Footer from "./components/Footer";
// // import { todosTasks } from "./components/data";
// import Header from "./components/Header";
// import TodoList from "./components/TodoList";
// import { todosTasks } from "./components/data";

// function App() {
// const [todos, setTodos] = useState(todosTasks);


// function onToggleTodo(id){
// setTodos(prevTodos =>
//  prevTodos.map((todo) =>{
//   if(todo.id === id){
//     return{
//       ...todo,
//       done: !todo.done
//     }
//   }
//   return todo;
//  })
// )
// }


// function onCompleteTodo(id){
// setTodos(todos.map(todo => {
//   if(todo.id === id){
//     return{
//       ...todo,
//       done: true
//     }
//   }
//   return todo;
// }))
// }

// function onDeleteTodo(id){

//   setTodos(todos.filter(todo => todo.id !== id))
// }

//   return(
//     <div>
// <Header todos={todos}/>
// <TodoList todos={todos} onDeleteTodo={onDeleteTodo} onCompleteTodo={onCompleteTodo} onToggleTodo={onToggleTodo}/>
//     </div>
//   )
// }












// export default App;