function Names({username, notifications = 3}){

return(
    <div>
<h1>Welcome {username}, you have {notifications} unread notifications!</h1>
    </div>
)
}

export default Names;