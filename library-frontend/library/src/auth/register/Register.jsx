import React from 'react'

export const Register = () => {


  return (
    <div>
        <div>
        <h1>Register Page</h1>




                <div>
                    <p>User Name</p>
                    <input type="text" placeholder='Enter User Name' />
                </div>

                        <div>
                            <p>Role</p>
                            <input type="text" placeholder='Admin/User' />
                        </div>

                        <div>
                            <p>Email</p>
                            <input type="email" placeholder='Enter Email' />
                        </div>
                        <div>
                            <p>Password</p>
                            <input type="password" placeholder='Enter Password' />
                        </div>
           
           
             <button>Register</button>

             <p>Already have an account? <Link to='/login'></Link></p>
        </div>


    </div>
  )
}

export default Register