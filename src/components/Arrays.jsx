import { useState } from "react";
function Arrays() {
    const [counter, setCounter] = useState(0);
    const [isActive, setIsActive] = useState(true);
    const [userType, setUserType] = useState("editor");
    const [promoCode, setPromoCode] = useState("");
    const [light, setLight] = useState(true);
    const [values, setValues] = useState([]);
    const [balance, setBalance] = useState([]);
  




    function handleBalance() {
      setBalance([...balance, 10]);
    }
  
    function handleRemoveBalance() {
      setBalance([...balance, -10]);
    }
  
    function resetBalance() {
      setBalance([]);
    }
  
    function handleAddValue() {
      setValues([...values, 5]);
    }
  
    function toggleLight() {
      setLight(!light);
      document.body.classList.toggle("body");
    }
  
    function handleEditorClick() {
      setUserType("editor");
    }
  
    function handleAdminClick() {
      setUserType("admin");
    }
  
    function PromoCode() {
      setPromoCode("DISCOUNT10");
    }
    function resetPromoCode() {
      setPromoCode("");
    }
  
    function incrementCounter(value) {
      setCounter(counter + value);
    }
  
    function toggleActive() {
      setIsActive(!isActive);
      console.log(isActive);
    }
  
    function decrementCounter(value) {
      if (counter > 0) {
        setCounter(counter - value);
      }
    }
  
    const sum = balance.reduce((total, current) => total + current, 0);
    return (
        <div>
        <button onClick={handleBalance}>Add Deposit</button>
        <p>Your balance is {balance}</p>
        <p>Total: {sum}</p>
        <button onClick={handleRemoveBalance}>Remove Deposit</button>
        <button onClick={resetBalance}>Reset Balance</button>
  
        <div style={{ padding: "10px" }}>
          <button onClick={handleAddValue}>Add 5</button>
        </div>
  
        <p>You have {values.length} items!</p>
        <p>{values}</p>
        <button onClick={toggleLight}>CLICK TO TOGGLE THE LIGHT</button>
        {light ? <p>The light is on</p> : <p>The light is off</p>}
        <p>The counter initial value is: {counter}</p>
        <button onClick={() => incrementCounter(5)}>+</button>
        <button onClick={() => decrementCounter(5)}>-</button>
        <button onClick={toggleActive}>{isActive ? "Start" : "Stop"} </button>
        <p>User type: {userType}</p>
        <button onClick={handleEditorClick}>Make Editor</button>
        <button onClick={handleAdminClick}>Make Admin</button>
        <p>Promo: {promoCode}</p>
        <button onClick={PromoCode}>PROMO CODE</button>
        <button onClick={resetPromoCode}>Reset</button>
  
        {/* <button onClick={()=> console.log("Button clicked")}></button> */}
        {/* <Apps apps={["Calculator", "Notes", "Weather", "Music", "Videos", "Settings", "Help", "About", "Contact", "Feedback"]}/> */}
        {/* <Lists list={["Red", "Pink", "Blue", "Green", "Red"]}/> */}
        {/* <Podcasts podcasts={[{title: "Podcast 1", description: "Description 1"}, {title: "Podcast 2", description: "Description 2"}, {title: "Podcast 3", description: "Description 3"}]}/> */}
        {/* <Names username="John" notifications="10"/> */}
      </div>
    )
}

export default Arrays;