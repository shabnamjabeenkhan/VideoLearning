function ProgressBar(props){
    return (
        <div>
<button onClick={props.onHandleProgress}>Your Progress is {props.progress}</button>
<button onClick={props.onHandleReset}>Reset</button>
        </div>
    )
}


export default ProgressBar;