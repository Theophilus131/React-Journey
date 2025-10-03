


function UserGreeting(props) {

//    if (props.isLoggedIn) {
//       return <h2>Welcome back, {props.username}!</h2>;
//    }
//         return <h2>Please sign in to continue.</h2>;

return(props.isLoggedIn ? 
<h2>Welcome back, {props.username}!</h2>
 : <h2>Please sign in to continue.</h2>)
  
}

export default UserGreeting