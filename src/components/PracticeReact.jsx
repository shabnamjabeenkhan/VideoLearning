// import "./App.css";
// import Lists from "./components/Lists";
// import Apps from "./components/Apps";
// import { useState } from "react";
// import Names from "./components/Names";

// function App() {

// const [users, setUsers] = useState([{id: 1, name: "John"}, {id: 2, name: "Jane"}, {id: 3, name: "Alex"}])
// const [fruit, setFruit] = useState([{id: 1, name: "apple"}, {id: 2, name: "banana"}, {id: 3, name: "cherry"}, {id: 4, name: "carrot"}]);
// const [tasks, setTasks] = useState([{id: 1, task: "learn React", done: false, quantity: 0}, {id: 2, task: "learn JavaScript", done: false, quantity: 20}, {id: 3, task: "learn CSS", done: false, quantity: 30}, {id: 4, task: "learn HTML", done: false, quantity: 40}]);

// function handleQuantity(taskId){
// setTasks(tasks.map((task) =>{
//   if(task.id === taskId){
//     return{
//       ...task,
//       quantity: task.quantity + 1
//     }
//   }
//   return task;
// }))
// }

// function handleDecrementQuantity(taskId){
// setTasks(tasks.map((task => {
//   if(task.id === taskId && task.quantity > 0){
//     return{
//       ...task,
//       quantity: task.quantity -1 
//     }
//   }
//   return task;
// })))
// }

// function handleDelete(id) {
// setUsers(users.filter(user => user.id !== id))
//   }
// function handleDeleteFruit(id) {
// setFruit(fruit.filter(fruit => fruit.id !== id))
// }



//   return (
//     <div>
// <ul>
//   {users.map(user => 
//     <li key={user.id}>{user.name} <button onClick={() => {handleDelete(user.id)}}>Delete</button></li>
//   )}
// </ul>
// <ul>{fruit.map(fruit =>
//   <li>{fruit.name} <button onClick={() => {handleDeleteFruit(fruit.id)}}>Delete</button></li>
// )}</ul>



// <ul>
//   {tasks.map(task =>
//     <li key={task.id}>{task.task} {task.quantity} <button onClick={() => {handleQuantity(task.id)}}>Add One</button>
//     <button onClick={() => {handleDecrementQuantity(task.id)}}>Decrement One</button></li>
//   )}
// </ul>

//       {/* <button onClick={handleIncrement}>Increment age {user.age}</button>
//       <p>you age is {user.age}</p> */}

//       {/* <p>{fruits.map((fruit) =>
//         <li key={fruit.id}>{fruit.name}</li>
//       )}</p>
//             <button onClick={handleRemove}>Remove carrot</button> */}

//     </div>

//   );
// }

// export default App;
// import "./index.css";
// import Counter from "./components/Counter";
// import Sidebar from "./components/Sidebar";
// import { useState } from "react";
// import AdminToggle from "./components/AdminToggle";
// import Footer from "./components/Footer";


// function App() {
// const [counter, setCounter] = useState(0);
// const [isAdmin, setIsAdmin] = useState(false);


// function onToggleAdmin(){
//   setIsAdmin(!isAdmin);
// }

// function onIncrement(){
//   setCounter(counter + 1);
// }

//   return(
//     <div>
//      <Counter counter={counter} onIncrement={onIncrement}/>
//      <Sidebar counter={counter} />
//      <AdminToggle isAdmin={isAdmin} onToggleAdmin={onToggleAdmin}/>
//      <Footer isAdmin={isAdmin}/>
//     </div>
//   )
// }


// import "./index.css";
// import { useId } from "react";


// function App() {

//   const usernameId = useId();

// function handleSubmit(event) {
// event.preventDefault();
// const data = new FormData(event.target);
// const username = data.get("username")
// console.log(username);
//   }

//   return(
//     <div>
//        <form onSubmit={handleSubmit} action="">
//   <label htmlFor={usernameId}>Enter YourUsername: </label>
//   <input type="text" name="username" id={usernameId} />
//   <input type="submit" value="Go" />
//  </form>
//     </div>

//   );
// }












// export default App;
