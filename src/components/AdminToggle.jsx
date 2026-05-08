function AdminToggle(props) {
    return(
        <div>
            <h1>Admin Toggle</h1>
            <button onClick={props.onToggleAdmin}>{props.isAdmin ? "Make User" : "Make Admin"}</button>
        </div>
    )
}

export default AdminToggle;