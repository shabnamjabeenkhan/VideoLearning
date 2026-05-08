
function Lists(props) {
    return (
        <div>
       <ul>
        {props.list.map((item) =>(
          <li>{item}</li>
        ))}
       </ul>
        </div>
    )
}

export default Lists;