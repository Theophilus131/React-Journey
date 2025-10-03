import Button from "./component/Button"
import Card from "./component/Card"
import Student from "./component/Student"
import UserGreeting from "./component/UserGreeting"


function App() {
 

  return (
    <>
     <Card />
     <Button />
     <Student name="John Doe" age={30} isStudent ={true} />
      <Student name="Jane Smith" age={25} isStudent ={false} />
      <Student name="Alice Johnson" age={22} isStudent ={true} />
      <Student name="Bob Brown" age={28} isStudent ={false} />

      <UserGreeting isLoggedIn ={false} username="T-phils" />
    </>
  )
}

export default App
