function Apps(props) {

    
    return (
        <div>
            <ul>
                {props.apps.map(app => (
                    <li>{app}</li>
                ))}
            </ul>
          
        </div>
    )
}

export default Apps;