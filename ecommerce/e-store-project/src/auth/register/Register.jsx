
import { Link } from 'react-router'
import styles from "./register.module.css"
import React, {useState} from 'react'


export const Register = () => {


  const userProfile = {
    firstName: "",
    lastName: "",
    email: "",
    password: ""

  }

    const [user, setUser] = useState(userProfile)

    

    const handleChange = (event) =>{

      const {name, value} = event.target

        setUser((previousUser)=>(
          {...previousUser,[name]:value.trim()}
        ))

    }



    function handleSubmit(e){
      e.preventDefault()
       console.log(user)
    }

   

  return (
    <div className={styles.containner_main}>

          <form onSubmit={handleSubmit} action =''>

              <div className={styles.firstName}>
                <label htmlFor = "firstName">FirstNAme</label>
                <input name='firstName' type='text'onChange={handleChange} placeholder='firstName'/>
              </div>

              <div>
                <label htmlFor = "LastName">lastNAme</label>
                <input name='lastName' className type='text' onChange={handleChange} placeholder='lastName'/>
              </div>
              
              <div>
                <label htmlFor = "email">email</label>
                <input name='email' type='email' onChange={handleChange} placeholder='email'/>
              </div>
            
              <div>
                <label htmlFor = "password">lastNAme</label>
                <input name='password' type='password' onChange={handleChange} placeholder='password'/>
              </div>

            <button type='submit' >Register</button>
          </form>

      <div className={styles.linkToLogin}>
        <p>Already have an account?</p>
        <Link to="/login">Login</Link>
      </div>
    

    </div>
  )
}

export default Register;
