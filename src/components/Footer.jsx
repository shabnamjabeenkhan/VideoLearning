function Footer(props) {
    return(
        <div>
            <h1>You are an {props.isAdmin ? "Admin" : "User"}</h1>
        </div>
    )
}

export default Footer;