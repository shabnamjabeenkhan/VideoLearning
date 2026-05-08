

function Counter(props) {



  

    return(
        <div>
<button onClick={props.onIncrement}>Add 1</button>
<p>{props.counter}</p>
        </div>
    )
}

export default Counter;